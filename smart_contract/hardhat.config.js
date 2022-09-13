require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/Itsp8MwlopiM-YIbCpQT79RdE_RUn9GC',
      accounts:['d668f0411be4f65c6752bde4173ce94f0779b3864282b844324ce4f6a994b402']
    }
  }
};


// https://eth-goerli.g.alchemy.com/v2/Itsp8MwlopiM-YIbCpQT79RdE_RUn9GC