module.exports = (sequelize, type) => {
    return sequelize.define('district', {
        id: {
            field: 'District_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },      

        District_name: {
            type: type.STRING,
            allowNull: false
        },              
    }, { timestamps: false })
}