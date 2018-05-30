var bip39 = require('bip39')
var EthereumTx = require('ethereumjs-tx')
var util = require('ethjs-account')
var wallet = require('ethereumjs-wallet')
var hdkey = require('hdkey')
var web3 = require('web3')

const mnemonic = bip39.generateMnemonic(); //generates string
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
console.log("Seed Buffer:",seed);

const root = hdkey.fromMasterSeed(seed); // to be kept safe
const masterPrivateKey = root.privateKey.toString('hex');
console.log("Master Private Key:",masterPrivateKey);

var path = "m/44'/60'/0'/0/0"
const addrNode = root.derive(path); //line 1
pubkey = util.privateToPublic(addrNode.privateKey.toString('Hex'))
console.log("Private key from",path,"is",addrNode.privateKey.toString('Hex'));
console.log("Pubkey generated from privateKey(",addrNode.privateKey.toString('Hex'),") is ",pubkey.toString('hex'));

var address = web3.utils.toChecksumAddress(pubkey)
