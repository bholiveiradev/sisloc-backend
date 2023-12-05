'use strict';

const getRandomImageName = () => {
  const imageNames = [
    '132165801G1.webp',
    '132260681G1.webp',
    '132381386G1.webp',
    '132474081G1.webp',
    '132651745G1.webp',
  ];
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  return imageNames[randomIndex];
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productsData = [];

    for (let i = 1; i <= 20; i++) {
      productsData.push({
        name: `Product Demo ${i}`,
        image: `${getRandomImageName()}`,
        description: `Description for Product Demo ${i}`,
        dailyPrice: i * 5.0,
        weeklyPrice: i * 30.0,
        biweeklyPrice: i * 50.0,
        monthlyPrice: i * 100.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('products', productsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
