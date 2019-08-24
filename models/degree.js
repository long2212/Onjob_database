module.exports = (sequelize, type) => {
    return sequelize.define('degree', {
        id: {
            field: 'Deg_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Deg_name: {
            type: type.STRING(30),
            allowNull: false
        },
        Deg_describe: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}