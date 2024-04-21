
const hre = require("hardhat");

async function main() {
  
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transaction = await Transactions.deploy();
  console.log("transact:",transaction);
  await transaction.waitForDeployment();

  console.log(`Deployed contract address: ${transaction.target}`);
  // console.log("here is the ",lock.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const hre = require("hardhat");
// const main = async () => {
//   const Transactions = await hre.ethers.getContractFactory("Transactions");
//   const transactionsContract = await Transactions.deploy();
  
//   await transactionsContract.deployed();
  
//   console.log("Transactions address: ", transactionsContract.address);
// };


// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// runMain();
