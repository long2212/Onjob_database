module.exports = (sequelize, type) => {
    return sequelize.define('position', {
        id: {
            field: 'Pos_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Pos_Name: {
            type: type.STRING,
            allowNull: false
        },
        Pos_Describe: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}