'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('members', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123'
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: 'password456'
      },
      // Add more dummy data as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove all data from the Members table
    await queryInterface.bulkDelete('members', null, {});
  }
};

