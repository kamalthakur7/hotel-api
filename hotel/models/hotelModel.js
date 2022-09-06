module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define('hotel', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.STRING
        }
    })
    return Hotel;
}