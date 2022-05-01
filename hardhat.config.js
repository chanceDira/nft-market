require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HhRs860gMXvP8A6oFNKXhkbkol1yykPk",
      accounts: ["db244bf6b924ce4a38eb62c922e40c928a14d4bab87a994b27729196342f25fb"]
    },
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};

// NFT contract address 0x44C19D14c01c37aE20dDB237FC3a798453B881c5
// Marketplace contract address 0xa6ed4040DdB9DA1e51d52581a72993938EE1F60d