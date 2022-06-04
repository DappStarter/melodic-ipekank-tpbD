require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note place arrow hidden arena onion genre'; 
let testAccounts = [
"0xa8f1b8f8f95f7cb16d1309597b41de6cb9394bd399e88dd9e118038ad7da2340",
"0x4d57615f5b5497d61eeef678d8d838799b95580d415369d111bacc7fc54402ed",
"0x5af9e7f0ffb2cc2c258dfbbf36d518744754610234049d4d1e013bba8fb1498f",
"0x0680d9e39547591724a23eea821d56dc53a58b4b02dbc1a9d91c6f565432013c",
"0x76d08309bc726da641e12f6ce20601d5149aac73e3befe76bca0239fc63f8c6f",
"0x626e345637e3d7e55e66d9d6aff960a0909df5d6c8c7d52b3a6c45e956665557",
"0x388a0320057f088b99c7cd5975c534bfd3c91a34e1b5a53b270bea940bf4c8f7",
"0x6998d5a84f6738660d297004683c37224069d958b18f318f1d15bed50de9e5d7",
"0x315f559b629defecb0a5d6125ff8c229e9b4a6e4b66240ef02fa6b8c259d73c4",
"0x301b33684704b51046f577d9344402f0dbfb06866668c73a13a173bbee3ca080"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

