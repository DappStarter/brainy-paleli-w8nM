require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name return mad million hockey end army general'; 
let testAccounts = [
"0x4f67e422e7d76bd5a851336cdbb557d175349dc16689efae961023e3d9dab2b9",
"0x6949d92d000d42b4ec7b09e6dad6840ba29a98c8f6fcd8fdca7c683abe445d1e",
"0x8169e2ef1cc3ba39045a4d7e69bb8afe6d2b94dcddaadaad2e9be45b17b8910a",
"0x42279b7deb19430c3b96d6098e7672dfe27cd8e15f0d5969d267ca978a3eb8a3",
"0xdae039c3231a3db6d77766d38a89f747a88948c81a52606135947db12d902eb5",
"0x9e283d757e0e5b7fc6638b5355c78afde2f3539e0035382d8b825b028d805c9e",
"0xecd7e54b6c31fa18bcdb4295c39464454817b8b2135e099251e3138ba85d64e0",
"0xf80bed9ad5f91ed819f77b944e70ef21ea6c6b2119f186fb5bda4ddfe6c45cc0",
"0x1e8411efed389fd8202b0251ed41b1637e8a8a16150622a3b7459fe773ac4a7f",
"0xab24936e84be859b648528abbb45687d97a71a0b575d51c513f7d9cb63885112"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

