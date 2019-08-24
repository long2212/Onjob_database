module.exports = (sequelize, type) => {
    return sequelize.define('province', {
        id: {
            field: 'Province_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Province_name: {
            type: type.STRING,
            allowNull: false
        },              
    }, { timestamps: false })
}