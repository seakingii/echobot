require("dotenv").config({ path: "./.env.local" });
const { JsonRpcProvider, Wallet, Contract } = require("ethers");
const contractABI = require("./Inscription.json");

const provider = new JsonRpcProvider(
  "https://api.testnet.evm.eosnetwork.com/",
  undefined,
  {
    batchMaxCount: 1,
  }
);
const wallet = new Wallet(process.env.WALLET_PRIVATE_KEY, provider); // Be very careful with your private key!
const contractAddress = "0x18AB37D940495dEC1EA35F2d76C08A4C7a390857";
const contract = new Contract(contractAddress, contractABI, wallet);

async function mint() {
  let transaction = await contract.inscribe(
    "0x7b2270223a22656f732d3230222c226f70223a226d696e74222c227469636b223a22454f5349222c22616d74223a2231303030227d"
  );

  console.log(`Transaction Hash: ${transaction.hash}`);

  const receipt = await transaction.wait();
  console.log(`Transaction was mined in block ${receipt.blockNumber}`);
}

async function runMultipleMints() {
  const startTime = new Date();

  for (let i = 0; i < 100; i++) {
    console.log(`Minting ${i + 1}/100`);
    await mint().catch(console.error);
  }

  const endTime = new Date();

  const duration = (endTime - startTime) / 1000; // Convert milliseconds to seconds
  console.log(`Finished minting 100 Smart Inscriptions in ${duration} seconds.`);
}

runMultipleMints();
