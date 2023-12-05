import { Dialect, Sequelize } from "sequelize";

import User, { initUserModel } from "./User";
import Product, { initProductModel } from './Product';

const { DB_DRIVER, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

(async() => {
    const sequelize = new Sequelize(
        DB_DATABASE!,
        DB_USER!,
        DB_PASSWORD!,
        {
            host: DB_HOST,
            dialect: (DB_DRIVER as Dialect) || 'mysql',
        }
    );

    initProductModel(sequelize);
    initUserModel(sequelize);

    await sequelize.sync({ force: false });
})();

export { 
    User,
    Product
};