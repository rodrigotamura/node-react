import User from '../models/User';

export default async (req, res, next) => {
  // verifying if owner exists
  const owner = await User.findByPk(1);
  if (!owner) {
    await User.create({
      name: 'Bank`s Owner',
      cpf: '98765432112',
      mobile: '51 123512354',
      account_number: '999999',
    });
  }

  // verifying if client exists
  const client = await User.findOne({
    where: { cpf: '12345678910' },
  });
  if (!client) {
    await User.create({
      name: 'Cliente especial',
      cpf: '12345678910',
      mobile: '51 123512354',
      account_number: '10110',
    });
  }

  return next();
};
