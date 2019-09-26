import { Op } from 'sequelize';
import * as Yup from 'yup';
import { parseISO, subMinutes, compareAsc } from 'date-fns'; // let's only import this feature
import Favored from '../models/Favored';
import User from '../models/User';
import Transaction from '../models/Transaction';

class TransactionsController {
  /**
   * getting all transactions
   * */
  async index(req, res) {
    const transactions = await Transaction.findAll({
      where: {
        [Op.or]: [
          { user_id_origin: req.userId },
          { user_id_destiny: req.userId },
        ],
      },
      include: [
        {
          model: User,
          as: 'user_origin',
          attributes: ['name', 'mobile'],
        },
        {
          model: User,
          as: 'user_destiny',
          attributes: ['name', 'mobile'],
        },
      ],
    });

    // negating outgoing values
    const transactionsCorrectedAmount = transactions.map(transaction => {
      if (transaction.user_id_origin === req.userId) {
        transaction.value *= -1;
      }
      return transaction;
    });

    return res.json(transactionsCorrectedAmount);
  }

  /**
   * Creating new user and making it as favored
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      user_id_destiny: Yup.number().required(),
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Dados inválidos para a transação.' });
    }

    const { user_id_destiny, value } = req.body;

    // verifying wether user destination is a favored
    const checkFavored = await Favored.findOne({
      where: { user_id: req.userId, user_id_favored: user_id_destiny },
    });
    if (!checkFavored) {
      return res.status(400).json({ error: 'Favorecido inválido.' });
    }

    // Verify if transaction value is greater than current balance
    if (value > req.balance) {
      return res.status(400).json({ error: 'Saldo insuficiente.' });
    }

    // Transaction less than 2 minutes, consider latest
    const latestTransaction = await Transaction.findOne({
      raw: true,
      where: { user_id_origin: req.userId, user_id_destiny },
      order: [['created_at', 'DESC']],
      attributes: ['id', 'created_at'],
    });
    const check2Minutes = compareAsc(
      subMinutes(new Date(), 2),
      latestTransaction.created_at
    );
    if (check2Minutes === -1) {
      await Transaction.destroy({
        where: {
          id: latestTransaction.id,
        },
      });
    }

    // completing transaction
    const transaction = await Transaction.create({
      user_id_origin: req.userId,
      user_id_destiny,
      value,
    });

    const balance = req.balance - value;

    return res.json({ transaction, balance });
  }
}

export default new TransactionsController();
