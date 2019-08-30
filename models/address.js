module.exports = (sequelize, type) => {
    return sequelize.define('address', {
        id: {
            field: 'Address_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Province_ID:
        // {
        //     type: type.INTEGER,
        //     allowNull: false
        // },
        // District_ID:
        // {
        //     type: type.INTEGER,
        //     allowNull: false
        // },
        Address_name: {
            type: type.STRING,
            allowNull: false
        },
         
    }, { timestamps: false })
}