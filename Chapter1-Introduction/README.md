# Chapter 1: What is Ethereum?

- [A Short History of Ethereum](#a-short-history-of-ethereum)
- [Ethereum Networks](#ethereum-networks)
- [How to Interact with Ethereum Networks](#how-to-interact-with-ethereum-networks)
- [Metamask Setup](#metamask-setup)
- [Transactions in Ethereum](#transactions-in-ethereum)
- [Transaction Wait Time](#transaction-wait-time)
- [Smart Contracts](#smart-contracts)
- [Solidity Programming Language](#solidity-programming-language)

## A Short History of Ethereum

- "Bitcoin: A Peer-to-Peer Electronic Cash System" written and released by Satoshi Nakamoto on October 31, 2008.
- Only purpose of bitcoin is to enable financial transactions, sending money from Person A to Person B.
- People started expanding the idea of transferring currencies to other types of exchanges as well.
- "Ethereum: The Ultimate Smart Contract and Decentralized Application Platform" released by Vitalik Buterin on December 2013.
- Introduces the idea of 'Smart Contracts' as an entity that can send and receive currency, beyond just humans.
- Smart Contracts are operated on a blockchain network which can be used to create more advanced applications.

## Ethereum Networks

- There are Ethereum networks which are used to transfer money and store data.
- In reality, there is ONE main Ethereum network that everyone uses for deployment, production of applications. The main Ethereum network is where Ethereum coins are actually worth something.
- There are many other Ethereum networks for different purposes. For example, there are Ethereum networks solely for testing, and even we can create our own private Ethereum networks.
- Each Ethereum network consists of one or more nodes.
- Each node in an Ethereum network is a machine running an ethereum client. A machine here is any type of computers such as a laptor or a desktop. After we install a Ethereum software on our machines, we can connect to the Ethereum network through the software and become a part of the network.
- Anyone can run a node in the network.
- Each node can contain a full copy of the blockchain.
- The 'Blockchain' is a database that stores a record of every transaction that has ever taken place.

## How to Interact with Ethereum Networks

- Developers can use a library called **web3.js** which can be tought of as a portal/window to Ethereum networks. `web3.js` allows us to send money, store data, deploy contracts or whatever we want to do on the network.
- Consumers can use **Metamask** or **Mist Browser (abandoned in 2019)** to interact with the network. 
- **Metamask** is a Chrome extension for regular users who want to use the Ethereum network. 
- **Mist browser** was a decentralized app on the Ethereum network from 2015 to 2019. Mist was the first browser that allowed users to browse dApps, and it had an Ethereum wallet built in. It was also the first desktop crypto wallet with a graphical user interface (GUI). Mist was deprecated in March 2019 after developers decided other browser developers and wallet makers were better able to create products for this quickly evolving space.

## Metamask Setup

- We will use Goerli Network to run and test our codes because working our codes on the main network costs real money.

## Transactions in Ethereum

<p align="center">
  <img width="400" height="400" src="https://user-images.githubusercontent.com/41933169/217088718-72eefc4f-faf9-4a66-82cc-b1415aa187fb.png">
</p>

- Transaction object contains:
  - nonce (nonsense, pointless): How many times the sender has sent a transaction
  - to: Address of account this money is going to
  - value: Amount of ether being sent to the target address
  - gasPrice: Amount of ether the sender is willing to pay per unit gas to get this transaction processed
  - startGas/gasLimit: Unit of gas that this transaction can consume
  - v,r,s
    - Cryptographic pieces of data that can be used to generate the senders account address. 
    - These data is generated from the sender's private key.
    - Extremely complex data 
    - One way process from the sender's private key to v,r,s.
    - Having v,r,s can't regenerate the sender's private key.
    - v,r,s are used to create one particular sender's address.

## Transaction Wait Time

- The Blockchain structure is very complicated to understand in nature because it is designed to be complex to replace the current financial systems by solving extremely difficult problems.
- When a transaction is sent to the network, it goes to one of the particular nodes in the network to be processed. That one particular node communicates with all other nodes in the network .
- Each node has a copy of the entire blockchain which can be considered as a type of database storing data.
- A block in a node collects all incoming transactions where a block is a list of transactions from multiple users.
- A node then runs a validation logic on this newly create block to verify the transactions inside which takes 30 seconds.
- The validation logic is referred to as mining. The process of mining is complicated.

<p align="center">
  <img width="500" height="400" src="https://user-images.githubusercontent.com/41933169/218238910-c68389b0-f9f0-4b9c-b734-30ec2020afdd.png">
</p>

<p align="center">
  <img width="300" height="300" src="https://user-images.githubusercontent.com/41933169/218238928-8236c26a-3a18-46f7-b16f-a2a6ee68b40e.png">
</p>

## Smart Contracts

- An account controlled by code
- Contract Account
  - Balance: amount of ether this account owns
  - Storage: data storage for this contract
  - Code: raw machine code for this contract
- Contract accounts reside in one specific individual network while external accounts like Metamask can be used in different networks.
- There is no communication between the networks.
- On our machine, we create Contract Source Code and deploy it on the network. Then, inside the network, Contract Instance, also known as Contract Account, is created.
- In OOP terms, Contract Source Code is a class we define. Contract Instances are the instances of the contract class we defined.

## Solidity Programming Language

### Key Properties of Solidity

- Written in .sol files
- Strongly typed
- Similar to JavaScript
- Has several huge, gigantic 'gotchas'

### Compile Solidity

1. Contract Definition written in Solidity
2. Solidity Compiler generates **Byte code ready for deployment** and **Application Binary Interface (ABI)**
3. Application Binary Interface (ABI) works as a interface between JavaScript code and Bytecode converted from Solidity. JavaScript can't read the Bytecode and JS needs a translator to interpret the Bytecode.
4. ABI works as a translator of Bytecode for JavaScript.



