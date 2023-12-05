import { DataTypes, Model, Sequelize } from 'sequelize';

class Product extends Model {
    public id!: number;
    public name!: string;
    public image!: string;
    public description!: string;
    public dailyPrice!: number;
    public weeklyPrice!: number;
    public biweeklyPrice!: number;
    public monthlyPrice!: number;
}

export const initProductModel = (sequelize: Sequelize) => {
    Product.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        dailyPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        weeklyPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        biweeklyPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        monthlyPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        tableName: 'products',
    });
}

export default Product;