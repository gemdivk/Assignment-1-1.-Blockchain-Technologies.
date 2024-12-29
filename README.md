# Assignment 1-1. Blockchain Techologies. 

This assignment implements a basic Ethereum smart contract for handling Ether transactions.

## Features
- **Receive Ether**: The contract can accept Ether tokens.
- **Check Balance**: Anyone can check the contract's balance.
- **Withdraw Funds**: Only the contract owner can withdraw all the funds.

## Prerequisites
1. **Ganache**: Local Ethereum blockchain for testing.
2. **Metamask**: Browser-based wallet for interacting with the contract.
3. **Node.js**: Required for using Web3.js.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/gemdivk/Assignment-1-1.-Blockchain-Technologies..git
   cd Assignment-1-1.-Blockchain-Technologies.
2. Install dependencies: 
   npm install web3

3. Configure Ganache and Metamask
   Add Ganache to Metamask using RPC URL: 
    * http://127.0.0.1:7545
    * Import an account from Ganache using its private key.
4. Deploy the contract using Remix IDE and connect to Ganache.

## Usage
*Interact with the contract using Web3.js scripts:*
   * Check balance:
contract.methods.getBalance().call();
   * Send Ether:
web3.eth.sendTransaction({ from: sender, to: contractAddress, value: amount });
   * Withdraw Ether:
contract.methods.withdrawAll().send({ from: owner });

## Demo
Screenshots of the contract interaction and deployment.
Use this section to interact with the contract.

//1. Write a smart contract:

    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    contract EtherWallet {
    address public owner;

    // Constructor sets the owner of the contract
    constructor() {
        owner = msg.sender;
    }

    // Function to receive Ether (payable)
    receive() external payable {}

    // Function to withdraw all Ether (only owner)
    function withdrawAll() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    // Function to check the contract balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
    }

//2. Configure environment to run web3.js and install library web3.js
![alt text](</step2.png>)

//3. Configure web3.js to run with Ganache and/or any Public Testnet
![alt text](</step3.png>)

//4. Configure Metamask with Ganache and/or any Public Testnet
![alt text](</step4.png>)
![alt text](</step4.1.png>)
![alt text](</step4.2.png>)

//5. Deploy the contract to Ganache and/or any Public Testnet
![alt text](</step5.png>)
![alt text](</step5.1.png>)
![alt text](</step5.3.png>)

//6. Call any functions of smart contract from step 4 from environment
which you have configured from steps 1,2,3
![alt text](/<step6.png>)
