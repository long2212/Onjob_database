module.exports = (sequelize, type) => {
    return sequelize.define('employee_type', {
        emType_id: {
            field: 'EmType_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        emType_name: {
            type: type.STRING,
            allowNull: false
        },
        emType_describe: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}