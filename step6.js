const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:7545');

// Contract details
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = "0x04266aaaF9bf0A2041e0dFBB6be244E53670caBD";
const contract = new web3.eth.Contract(contractABI, contractAddress);

contract.methods.getBalance().call()
    .then(balance => {
        console.log(`Contract Balance: ${web3.utils.fromWei(balance, 'ether')} Ether`);
    })
    .catch(err => console.error(err));

const account = "0x04266aaaF9bf0A2041e0dFBB6be244E53670caBD"; 
contract.methods.withdrawAll().send({ from: account })
    .then(receipt => {
        console.log('Withdrawal successful:', receipt);
    })
    .catch(err => console.error(err));
