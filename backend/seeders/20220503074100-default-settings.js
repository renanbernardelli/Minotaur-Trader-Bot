'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require('../src/utils/crypto');

module.exports = {
  async up (queryInterface, Sequelize) {
    
    const settingsId = await queryInterface.rawSelect('minotaurSettings', {where: {}, limit: 1}, ['id']); //Check if there is seed in DB

    //If there is no seed, create one.
    if(!settingsId){

      return queryInterface.bulkInsert('minotaurSettings', [{
        email: 'test@test.com',
        password: bcrypt.hashSync('123'),
        apiUrl: 'https://testnet.binance.vision/api',
        accessKey: process.env.BN_TEST_AK,
        secretKey: crypto.encrypt(process.env.BN_TEST_SK),
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    };
  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('minotaurSettings', null, {});
  }
};
