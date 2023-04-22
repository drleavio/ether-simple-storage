const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config;

async function main() {
  //   HTTP://127.0.0.1:7545

  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_Storage.abi", "utf8");
  const binary = fs.readFileSync("./SimpleStorage_sol_Storage.bin", "utf8");
  const contractfactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("wait....contract is deploying");
  const contract = await contractfactory.deploy();
  console.log(contract);
  const deplomentreciept = await contract.deployTransaction(1);
  console.log(deplomentreciept);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
