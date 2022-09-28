const aes = require('aes-js');

const key = aes.utils.utf8.toBytes(process.env.AES_KEY); //Transform AES_KEY to binary

if(key.length !== 32) throw new Error('Invalid key for AES. Must be 256-bit / 32 bytes.');

function encrypt(text) {

    const bytesInfo = aes.utils.utf8.toBytes(text); //Transform text to binary
    const aesCTR = new aes.ModeOfOperation.ctr(key); //Initialize the object
    const encryptBytes = aesCTR.encrypt(bytesInfo); //Encrypt the binary
    return aes.utils.hex.fromBytes(encryptBytes); //Binary to text to save in DB
};

function decrypt(encryptedHex) {

    const encryptBytes = aes.utils.hex.toBytes(encryptedHex); //Text to bytes
    const aesCTR = new aes.ModeOfOperation.ctr(key); //Initialize the object
    const decryptedBytes = aesCTR.decrypt(encryptBytes); //Decrypt the binary
    return aes.utils
    .utf8.fromBytes(decryptedBytes); //Binary to text
};

module.exports = {encrypt, decrypt};