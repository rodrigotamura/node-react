import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id_origin: Sequelize.INTEGER,
        user_id_destiny: Sequelize.INTEGER,

        value: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id_origin',
      target: 'id',
      as: 'user_origin',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id_destiny',
      target: 'id',
      as: 'user_destiny',
    });
  }
}

export default Transaction;
