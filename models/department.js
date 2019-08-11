module.exports = (sequelize, type) => {
    return sequelize.define('department', {
        id: {
            field: 'Dep_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Dep_name: {
            type: type.STRING,
            allowNull: false
        },
        Dep_describe: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}