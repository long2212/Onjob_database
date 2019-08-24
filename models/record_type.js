module.exports = (sequelize, type) => {
    return sequelize.define('record_type', {
        id: {
            field: 'RecType_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        RecType_name: {
            type: type.STRING,
            allowNull: false
        },           
        
        RecType_describe: {
            type: type.STRING,
            allowNull: true
        },

    }, { timestamps: false })
}