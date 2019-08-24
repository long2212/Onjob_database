const Sequelize = require('sequelize');

const PositionModel = require('./position');
const DepartmentModel = require('./department');
const ShiftModel = require ('./shift');
const DegreeModel = require ('./degree');
const CertificateModel = require ('./certificate')
const NationModel = require('./nation');
const EmployeeTypeModel = require('./employee_type');
const RecordModel = require('./record');
const RecordTypeModel = require('./record_type');
const ProvinceModel = require('./province');
const DistrictModel = require('./district');

const sequelize = new Sequelize('OnJobTraining', 'sa', '1234', {
    dialect: 'mssql',
    host: 'localhost',
    // host: '10.50.1.197',
    // dialectOptions: {
    //     "options": {
    //         "instanceName": "SQLEXPRESS"
    //     }
    // },
    pool: { max: 20, min: 0, acquire: 30000, idle: 10000 },
    logging: true
})

const Position = PositionModel(sequelize, Sequelize)
const Department = DepartmentModel(sequelize, Sequelize)
const Shift = ShiftModel(sequelize, Sequelize)
const Degree = DegreeModel(sequelize, Sequelize)
const Certificate = CertificateModel(sequelize, Sequelize)
const Nation = NationModel(sequelize, Sequelize)
const EmployeeType = EmployeeTypeModel(sequelize, Sequelize)
const Record = RecordModel(sequelize, Sequelize)
const RecordType = RecordTypeModel(sequelize, Sequelize)
const Province = ProvinceModel(sequelize, Sequelize)
const District = DistrictModel(sequelize, Sequelize)

// Customer.belongsTo(CustomerType, { foreignKey: 'CUT_ID', as: 'customerType' });
// CustomerType.hasMany(Customer, { foreignKey: 'CUT_ID', as: 'customers' });

Record.belongsTo(RecordType, { foreignKey: 'RecType_id', as: 'recordtype' });
RecordType.hasMany(Record, { foreignKey: 'RecType_id', as: 'records' });

District.belongsTo(Province, { foreignKey: 'Province_id', as: 'province' });
Province.hasMany(District, { foreignKey: 'Province_id', as: 'districts' });

//run once, thenn comment-out
// sequelize.sync({ force: true }).then(() => {
//     console.log('database & tables created!');
// });

module.exports = {
    Certificate,
    Department,
    Position,    
    Degree,
    EmployeeType,
    Shift,
    Nation,
    Record,
    RecordType,
    Province,
    District
}