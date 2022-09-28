'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {

    queryInterface.addIndex('minotaurSettings', ['email'], {

      name: 'settings_email_index',
      unique: true
    });
  },

  async down (queryInterface, Sequelize) {
    
    queryInterface.removeIndex('minotaurSettings', 'settings_email_index');
  }
};
