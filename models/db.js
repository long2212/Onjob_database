const Sequelize = require('sequelize');
const PositionModel = require('./position');
const DepartmentModel = require('./department');
const NationModel = require('./nation');
const EmployeeTypeModel = require('./employee_type');
const ShiftModel = require ('./shift');
const DegreeModel = require ('./degree');
const CertificateModel = require ('./certificate');
const RecordModel = require('./record');
const RecordTypeModel = require('./record_type');
const ProvinceModel = require('./province');
const DistrictModel = require('./district');
const CerTypeModel = require('./cer_type')
const AddressModel = require('./address')


const sequelize = new Sequelize('OnJobTraining', 'sa', '1234', {
    dialect: 'mssql',
    host: 'localhost',
    
    pool: { max: 20, min: 0, acquire: 30000, idle: 10000 },
    logging: true
})

const Position = PositionModel(sequelize, Sequelize);
const Department = DepartmentModel(sequelize, Sequelize);
const Nation = NationModel(sequelize, Sequelize);
const EmployeeType = EmployeeTypeModel(sequelize, Sequelize);
const Shift = ShiftModel(sequelize, Sequelize);
const Degree = DegreeModel(sequelize, Sequelize);
const Certificate = CertificateModel(sequelize, Sequelize);
const Record = RecordModel(sequelize, Sequelize);
const RecordType = RecordTypeModel(sequelize, Sequelize);
const Province = ProvinceModel(sequelize, Sequelize);
const District = DistrictModel(sequelize, Sequelize);
const CerType = CerTypeModel(sequelize,Sequelize);
const Address = AddressModel(sequelize,Sequelize);

// Customer.belongsTo(CustomerType, { foreignKey: 'CUT_ID', as: 'customerType' });
// CustomerType.hasMany(Customer, { foreignKey: 'CUT_ID', as: 'customers' });

//run once, thenn comment-out
// sequelize.sync({ force: true }).then(() => {
//     console.log('database & tables created!');
// });

module.exports = {
    Position,
    Department,
    Nation,
    EmployeeType,
    Shift,
    Degree,
    Certificate,
    Record,
    RecordType,
    Province,
    District,
    CerType,
    Address
}