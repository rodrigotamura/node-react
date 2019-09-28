import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { Op } from 'sequelize';
import authConfig from '../../config/auth';

import User from '../models/User';
import Transaction from '../models/Transaction';

class SessionController {
  async store(req, res) {
    // validating
    const schema = Yup.object().shape({
      cpf: Yup.string().length(11),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'CPF inválido' });
    }

    const { cpf } = req.body;

    // verifying if user exists
    const user = await User.findOne({
      subQuery: false,
      where: { cpf },
    });

    if (!user) {
      return res.status(401).json({ error: 'Usuário inexistente.' });
    }

    const { id, name, mobile, account_number } = user;

    // wether first login, let's give R$ 1k for this user from Bank's Owner💓
    const transactions = await Transaction.findOne({
      subQuery: true,
      where: { user_id_destiny: id },
    });

    if (!transactions) {
      await Transaction.create({
        user_id_origin: 1,
        user_id_destiny: id,
        value: 1000,
      });
    }

    // Getting current balance from this user
    const transactionsBalance = await Transaction.findAll({
      raw: true,
      where: {
        [Op.or]: [{ user_id_origin: id }, { user_id_destiny: id }],
      },
      attributes: ['user_id_origin', 'user_id_destiny', 'value'],
    });

    // storing balance in req object
    const balance = transactionsBalance.reduce((total, transaction) => {
      return transaction.user_id_origin === id
        ? total - Number(transaction.value)
        : total + Number(transaction.value);
    }, 0);

    return res.json({
      user: {
        name,
        cpf,
        mobile,
        account_number,
        balance,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
