require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "ce26be32486441198fe3a173c2936938"
const fs = require("fs")
const mnemonic = fs.readFileSync(".secret").toString().trim()
const privateKeys = "8c959e4a80372c26edbf757c960df929880efa8ea0ef2b0aeaf3485714d77762"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
//     rinkeby: {
//       provider: function() {
//         return new HDWalletProvider(
//           privateKeys,`https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
//         )
//       },
//       gas: 5000000,
//       gasPrice: 25000000000,
//       network_id: 4
//     }
//   ropsten: {
//     provider: function() {
//       return new HDWalletProvider(
//         privateKeys,`https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
//       )
//     },
//     gas: 5000000,
//     gasPrice: 25000000000,
//     network_id: 4
//   }
// },
ropsten: {
  provider: () =>
    new HDWalletProvider(
      mnemonic,
      `https://ropsten.infura.io/v3/${infuraKey}`
    ),
  provider: new HDWalletProvider(
    mnemonic,
    `https://ropsten.infura.io/v3/${infuraKey}`
  ),
  network_id: 3, // Ropsten's id
  gas: 5500000, // Ropsten has a lower block limit than mainnet
  confirmations: 2, // # of confs to wait between deployments. (default: 0)
  timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
  skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
}
},
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
