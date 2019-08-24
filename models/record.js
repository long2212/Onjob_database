module.exports = (sequelize, type) => {
    return sequelize.define('record', {
        id: {
            field: 'Rec_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        RecType_id: {
            type: type.INTEGER,
            allowNull: false
        },

        Rec_name: {
            type: type.STRING,
            allowNull: false
        },
        
        Duration: {
            type: type.STRING,
            allowNull: true
        },

        Signer: {
            type: type.STRING,
            allowNull: true
        },

        Rec_describe: {
            type: type.STRING,
            allowNull: true
        }
    }, { timestamps: false })
}