module.exports = function(sequelize, DataTypes) {
  var InventoryItem = sequelize.define('InventoryItem', {
    quantity: {
      type: DataTypes.FLOAT,
      defaultValue: 1,
      validate: {
        // Postgres doesn't support unsigned values
        isPositive: function(value) {
          if (value <= 0) {
            throw new Error('Quantity values must be greater than zero');
          }
        }
      }
    },
    unit: DataTypes.STRING(8)
  });
  return InventoryItem;
};