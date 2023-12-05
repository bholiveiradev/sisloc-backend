'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Test User',
      email: 'fredx@sisloc.com.br',
      password: '$2b$10$wSxEA4.9Xcxq8C8rOxpQre2poN5mfhHXgW.iBTHEpcPPZPdUMLB1q', // criptografado com bcrypt
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
