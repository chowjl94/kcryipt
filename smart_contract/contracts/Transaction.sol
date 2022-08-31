// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


// contract name similar to a class
contract Transactions {
    // variable
    uint256 transactionCounter;
    
    // function to emit
    // typeof variable / variable name
    event Transfer(address sender , address receiver, uint amount, string message, uint256 timestamp, string keyword );

    // object properties
    struct TransferStruc {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // transactions is a array fo TransferSturc objects
    TransferStruc[] transactions;


    function addtoChain( address payable receiver ,uint amount , string memory message, string memory keyword) public {
        // increment transaction count
        // update transaction count by pushing a transferStruc object into Transaction class
        // emit the Transfer event
        transactionCounter +=1;
        transactions.push(TransferStruc(msg.sender, receiver , amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getTransactions() public view returns (TransferStruc[] memory){
        return transactions;
        
    }

    function getTransactionsCount() public view returns (uint256) {
        return transactionCounter;
    }

}