import Sequelize, { Model } from 'sequelize';

class Favored extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, {
      foreignKey: 'user_id_favored',
      as: 'favored',
    });
  }
}

export default Favored;
