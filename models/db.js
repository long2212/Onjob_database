const Sequelize = require('sequelize');
const PositionModel = require('./position');
const DepartmentModel = require('./department');

const sequelize = new Sequelize('OnJobTraining', 'sa', '123', {
    dialect: 'mssql',
    host: 'localhost',
    dialectOptions: {
        "options": {
            "instanceName": "SQLEXPRESS"
        }
    },
    pool: { max: 20, min: 0, acquire: 30000, idle: 10000 },
    logging: true
})

const Position = PositionModel(sequelize, Sequelize)
const Department = DepartmentModel(sequelize, Sequelize)

// Customer.belongsTo(CustomerType, { foreignKey: 'CUT_ID', as: 'customerType' });
// CustomerType.hasMany(Customer, { foreignKey: 'CUT_ID', as: 'customers' });

//run once, thenn comment-out
sequelize.sync({ force: true }).then(() => {
    console.log('database & tables created!');
});

module.exports = {
    Position,
    Department
}