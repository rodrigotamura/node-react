import { Op } from 'sequelize';
import Transaction from '../models/Transaction';

/**
 * Getting logged user's current balance
 */
export default async (req, res, next) => {
  const transactions = await Transaction.findAll({
    raw: true,
    where: {
      [Op.or]: [
        { user_id_origin: req.userId },
        { user_id_destiny: req.userId },
      ],
    },
    attributes: ['user_id_origin', 'user_id_destiny', 'value'],
  });

  // storing balance in req object
  req.balance = transactions.reduce((total, transaction) => {
    return transaction.user_id_origin === req.userId
      ? total - Number(transaction.value)
      : total + Number(transaction.value);
  }, 0);

  return next();
};
