const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Ganache default RPC

web3.eth.getAccounts()     
    .then(accounts => console.log("Ganache Accounts:", accounts))
    .catch(err => console.error("Connection Error:", err));