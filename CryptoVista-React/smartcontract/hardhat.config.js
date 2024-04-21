// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };


require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/8JDU9sz9_cZkluyc-8MYU4ShDID0qCKQ',
      accounts: ['b17e63d5504cacb2649b8be493b97638b1ad83024cbfa79adfcf12b6a3e76e3e'],
    },
  },
};


// module.exports = {
//   defaultNetwork: "sepolia",
//   networks: {
//     hardhat: {
//     },
//     sepolia: {
//       url:'https://eth-sepolia.g.alchemy.com/v2/8JDU9sz9_cZkluyc-8MYU4ShDID0qCKQ',
//       accounts: ['b17e63d5504cacb2649b8be493b97638b1ad83024cbfa79adfcf12b6a3e76e3e']
//     }
//   },
//   solidity: {
//     version: "0.8.0",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 40000
//   }
// }