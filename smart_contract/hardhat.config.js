// https://eth-rinkeby.alchemyapi.io/v2/Mkw7FLGRE-bsUbERIwZIwSk7ZGmlzgQA 
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/Mkw7FLGRE-bsUbERIwZIwSk7ZGmlzgQA',
      accounts:['d668f0411be4f65c6752bde4173ce94f0779b3864282b844324ce4f6a994b402']
    }
  }
};
