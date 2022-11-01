const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  
  const contract = await ethers.getContractFactory("ERC721Staking");

  // deploy the contract
  const deployedContract = await contract.deploy("0xd2e9ab8E75BE67b3C03dB7caF397A64f821B6813","0x2bEa0aE2B419D9238C71C65366373e8d76a678dD");

  await deployedContract.deployed();

  // print the address of the deployed contract
  console.log("ERC721Staking Contract Address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });