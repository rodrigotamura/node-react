import { Op } from 'sequelize';
import * as Yup from 'yup';
import Favored from '../models/Favored';
import User from '../models/User';

class FavoredsController {
  /**
   * getting all Favoreds accounts
   * */
  async index(req, res) {
    const favoreds = await Favored.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: User,
          as: 'favored',
          attributes: ['name', 'mobile'],
        },
      ],
    });

    return res.json(favoreds);
  }

  /**
   * Creating new user and making it as favored
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.number()
        .min(10000000000)
        .max(99999999999),
      mobile: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dados inválidos.' });
    }

    const { name, cpf, mobile } = req.body;

    // generating a number account
    const account_number = Math.floor(Math.random() * 100000);

    // creating new user
    const [favored] = await User.findOrCreate({
      where: { cpf },
      defaults: { name, mobile, account_number },
    });

    // making this user as favored
    await Favored.findOrCreate({
      where: { user_id: req.userId, user_id_favored: favored.id },
    });

    return res.json(favored);
  }

  /**
   * Unmaking favored
   */
  async remove(req, res) {
    const schema = Yup.object().shape({
      favored_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({
        error: 'Favor informar o ID do usuário favorecido a descadastrar',
      });
    }

    const { favored_id } = req.params;

    await Favored.destroyOr({
      where: { user_id: req.userId, user_id_favored: favored_id },
    });

    return res.json();
  }

  /**
   * Getting Favored info
   */
  async show(req, res) {
    const schema = Yup.object().shape({
      favored_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({
        error: 'Favor informar o ID do usuário favorecido a visualizar',
      });
    }

    const { favored_id } = req.params;

    // getting favored info
    const favored = await User.findByPk(favored_id);

    if (!favored) {
      return res.status(400).json({
        error: 'Este favorecido não existe',
      });
    }

    return res.json(favored);
  }

  /**
   * Updating favored infos
   */
  async update(req, res) {
    // validating
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      cpf: Yup.number()
        .min(10000000000)
        .max(99999999999),
      mobile: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Dados inválidos',
      });
    }

    const { id, name, cpf, mobile } = req.body;

    // verify if given cpf is already taken
    const checkCpf = await User.findOne({
      where: { cpf, id: { [Op.not]: id } },
    });
    if (checkCpf) {
      return res.status(400).json({
        error: 'Favor informar outro CPF. CPF em uso!',
      });
    }

    // updating
    const favored = await User.update(
      {
        name,
        cpf,
        mobile,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.json();
  }
}

export default new FavoredsController();
