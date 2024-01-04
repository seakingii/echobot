# EOS EVM Inscription Bot

A script for automatically minting ECHO Smart Inscription on the EOS EVM network. The script, `inscribeBot.js`, interacts with a smart contract to mint ECHO Smart Inscription in a batch of 100 (you can change this number to number of batch you want to mint).

## Testnet Run Result
450 second to mint batch of 100 -> 7-8 Smart Inscription minted per minute.

## Setup

Before running the script, you must set up your environment and install necessary dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- An EOS EVM-compatible wallet with sufficient funds to cover gas fees.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mrozuru/echobot.git
   cd echobot
   ```

2. **Install dependencies:**

   Run the following command in your project directory to install the required Node.js packages:

   ```sh
   npm install
   ```

### Configuration

1. **Environment Variables:**

   Create a `.env.local` file in the root of your project and add the following environment variable:

   ```env
   WALLET_PRIVATE_KEY=your_private_key
   ```

   Replace `your_private_key` with the private key of your EOS EVM-compatible wallet. Ensure this wallet has enough EOS to cover transaction gas fees.

   > **Warning:** Never share your private key with anyone or commit it to a public repository. Always keep it secret.

2. **Smart Contract and RPC Endpoint:**

   The script is preconfigured to interact with a specific smart contract on the EOS EVM. If you need to use a different contract or endpoint, modify the `contractAddress` and `provider` variables in `inscribeBot.js`.

### Running the Script

To start the minting process, execute the following command in your terminal:

```sh
node inscribeBot.js
```

The script will mint Smart Inscription sequentially until 100 mints are completed, and it will log the transaction hashes and block numbers for each mint. It will also output the total time taken to complete the minting.

## Important Notes

- Ensure you understand the actions the scripts performs and consider the security implications before using it with real funds.
- The actual transaction time and success may vary based on network conditions and the gas price set in the transactions. Be aware of the current network load and adjust the gas price accordingly if necessary.
- Test scripts like this one in a test environment before using them on the main network.

## Support

For support, please open an issue in the GitHub repository.

---

Thank you for using the EOS EVM Inscription Bot! Your feedback and contributions are highly appreciated.
