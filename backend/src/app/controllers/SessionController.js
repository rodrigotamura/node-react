import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from '../../config/auth';

import User from '../models/User';

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
      where: { cpf },
    });

    if (!user) {
      return res.status(401).json({ error: 'Usuário inexistente.' });
    }

    const { id, name, mobile } = user;

    return res.json({
      user: {
        name,
        cpf,
        mobile,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
