'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('members', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more dummy data as needed, ensuring to include createdAt and updatedAt
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove all data from the members table
    await queryInterface.bulkDelete('members', null, {});
  }
};