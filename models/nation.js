module.exports = (sequelize, type) => {
    return sequelize.define('nation', {
        id: {
            field: 'Nation_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nation_name: {
            type: type.STRING,
            allowNull: false
        },
        nation_describe: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}