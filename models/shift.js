module.exports = (sequelize, type) => {
    return sequelize.define('shift', {
        id: {
            field: 'Shift_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Shift_Type: {
            type: type.STRING(30),
            allowNull: false
        },

        Shift_Duration: {
            type: type.INTEGER,
            allowNull: false
        },

        Shift_describe: {
            type: type.STRING,
            allowNull: true
        }
    }, { timestamps: false })
}