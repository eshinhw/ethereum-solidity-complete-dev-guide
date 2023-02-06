# Ethereum and Solidity: The Complete Developer's Guide

<p align="center">
  <img width="1000" height="480" src="https://user-images.githubusercontent.com/41933169/217077452-339073d6-310a-425e-baab-4e76f5d56fee.jpg">
</p>

## Chapter 1: What is Ethereum?

### A Short History of Ethereum

- "Bitcoin: A Peer-to-Peer Electronic Cash System" written and released by Satoshi Nakamoto on October 31, 2008.
- Only purpose of bitcoin is to enable financial transactions, sending money from Person A to Person B.
- People started expanding the idea of transferring currencies to other types of exchanges as well.
- "Ethereum: The Ultimate Smart Contract and Decentralized Application Platform" released by Vitalik Buterin on December 2013.
- Introduces the idea of 'Smart Contracts' as an entity that can send and receive currency, beyond just humans.
- Smart Contracts are operated on a blockchain network which can be used to create more advanced applications.

### What is Ethereum?

- There are Ethereum networks which are used to transfer money and store data.
- In reality, there is ONE main Ethereum network that everyone uses for deployment, production of applications. The main Ethereum network is where Ethereum coins are actually worth something.
- There are many other Ethereum networks for different purposes. For example, there are Ethereum networks solely for testing, and even we can create our own private Ethereum networks.
- Each Ethereum network consists of one or more nodes.
- Each node in an Ethereum network is a machine running an ethereum client. A machine here is any type of computers such as a laptor or a desktop. After we install a Ethereum software on our machines, we can connect to the Ethereum network through the software and become a part of the network.
- Anyone can run a node in the network.
- Each node can contain a full copy of the blockchain.
- The 'Blockchain' is a database that stores a record of every transaction that has ever taken place.

### How to Interact with Ethereum Networks

- Developers can use a library called **web3.js** which can be tought of as a portal/window to Ethereum networks. `web3.js` allows us to send money, store data, deploy contracts or whatever we want to do on the network.
- Consumers can use **Metamask** or **Mist Browser (abandoned in 2019)** to interact with the network. 
- **Metamask** is a Chrome extension for regular users who want to use the Ethereum network. 
- **Mist browser** was a decentralized app on the Ethereum network from 2015 to 2019. Mist was the first browser that allowed users to browse dApps, and it had an Ethereum wallet built in. It was also the first desktop crypto wallet with a graphical user interface (GUI). Mist was deprecated in March 2019 after developers decided other browser developers and wallet makers were better able to create products for this quickly evolving space.

### Metamask Setup

- We will use Goerli Network to run and test our codes because working our codes on the main network costs real money.

### Transactions

<p align="center">
  <img width="200" height="400" src="https://user-images.githubusercontent.com/41933169/217082181-570f59b3-1168-4ee8-bf85-d883c9519fc2.png">
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



## Chapter 2: Smart Contracts with Solidity
- Rinkeby Network contains Infura node.
- Infura API is a public API which provides access to Infura node which is hosted by Rinkeby Network.
## Chapter 3: Advanced Smart Contracts
## Chapter 4: Building Interactive Front-Ends
## Chapter 5: Real Projects with Ethereum
## Chapter 6: Ethereum Project Infrastructure
## Chapter 7: Advanced Multi-Page Front-Ends
## Chapter 8: Appendix: Basic React
## Chapter 9: Extra
