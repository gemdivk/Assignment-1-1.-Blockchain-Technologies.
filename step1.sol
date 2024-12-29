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