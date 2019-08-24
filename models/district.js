module.exports = (sequelize, type) => {
    return sequelize.define('district', {
        id: {
            field: 'District_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        Province_id: {
            type: type.INTEGER,
            allowNull: false
        },         

        District_name: {
            type: type.STRING,
            allowNull: false
        },              
    }, { timestamps: false })
}