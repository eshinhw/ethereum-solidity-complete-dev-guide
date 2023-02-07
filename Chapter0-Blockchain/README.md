# Blockchain

Blockchain is Distributed Ledge that is open to anyone in the blockchain network. Each block contains 1) Data 2) Hash and 3) Hash of previous block. The data stored inside each block depends on application domain. For example, each block inside bitcoin blockchain may contain the information about From, To and Amount. Hash is like a fingerprint that can be used to uniquely identify each block in the network. Hashes are very useful to detect any changes in a block because modifying or updating data inside a block causes to generate new hash.

From a business perspective, it’s helpful to think of blockchain technology as a type of next-generation business process improvement software. Collaborative technology, such as blockchain, promises the ability to improve the business processes that occur between companies, radically lowering the “cost of trust.” For this reason, it may offer significantly higher returns for each investment dollar spent than most traditional internal investments.

Genesis block: the first block of blockchain network which doesn't contain hash of previous block.

Blockchain can be secured by the use of HASHING and PROOF OF WORK.
Proof of Work: 

Blockchain technology can be used in storing medical records, e-notary or even collecting taxes.

Smart contracts is a tiny program stored inside blockchain.

Smart contracts can be used in crowdfunding platforms.

Smart contracts are immutable and distributed.

## Oracle Problem

오라클 문제(oracle problem)란 블록체인 밖에 있는 데이터를 블록체인 안으로 가져올 때 발생하는 문제를 말한다. 오라클 현상 또는 연결성 문제(connectivity problem)라고도 한다.

블록체인 분야에서 오라클(oracle)이란 블록체인 밖에 있는 데이터를 블록체인 안으로 가져오는 것을 말한다. 이때 블록체인 밖에 있는 데이터를 오프체인(off-chain)이라고 하고, 그 데이터가 블록체인 안으로 들어온 것을 온체인(on-chain)이라고 한다. 블록체인(blockchain)은 데이터의 위변조가 거의 불가능한 분산 저장 기술이지만, 데이터가 블록체인 안으로 들어와야 블록체인으로 관리할 수 있다. 데이터가 블록체인 안으로 들어오지 않거나, 혹은 블록체인 안으로 들어오는 과정에서 위변조가 발생한다면, 설령 그 데이터가 블록체인으로 관리된다고 할지라도 신뢰하기 어렵다.

현실 세계에 있는 데이터가 블록체인 안으로 들어오는 과정은 생각만큼 쉽지 않다. 오프체인 데이터가 온체인 데이터로 바뀌기 위해서는, 현실 세계와 블록체인의 중간에서 데이터를 블록체인 안에 넣어주는 사람이나 장치가 필요하다. **오라클 문제는 이러한 중간자 역할을 하는 사람이나 장치를 어떻게 신뢰할 수 있을 것인가 하는 문제**이다. 블록체인은 탈중앙 분산화를 추구하므로 권위를 가진 중앙이 존재하지 않는다. 따라서 블록체인에 데이터를 입력하는 중간자를 신뢰할 수 있는 특별한 방법이 필요하다.

블록체인에서 오라클 문제를 해결하기 위해 다양한 방법이 도입되고 있으나 확실한 해결책은 존재하지 않는다. 암호화폐 소유자들의 투표(voting)를 통해 결정하거나, 다양한 데이터의 중앙값(median)을 선택하거나, 현실 세계와 블록체인 사이에서 신뢰할 수 있는 데이터를 제공해 주는 중간자(middleware)를 두는 방법 등 블록체인 오라클 문제를 해결하기 위한 다양한 방안이 제시되고 있다.

## The Value of Blockchain

- **Value**: Enables a unique asset tobe transferred over the internet without a middle centralized agent. We can create a digital asset that is unique and transfer the unique asset to other people directly without losing its uniqueness and needing any third parties. 
- **Trust**: Creates a permanent, secure and unalterable record of who owns what. Using advanced cryptography, "Information integrity" is preserved. We can have digital fingerprints of every single transaction that happens on the network. 
- **Reliability**: Decentralized network structure ensures that there is no single point of failure which could bring the entire system down.

Prove authenticity and guarantee integrity

Blockchain provide a single source of truth that is permanent, verifable and unchangeable. 

## Characteristics of Blockchain

- Ledger
- Costantly growing
- Permanent record of all transactions
- Secure
- Chronological
- Immutable

## Double Spending

Double spending is one of the key problems with sending money over the Internet and why there has traditionally been a need for third parties such as banks and other institutions. Bitcoin solves this issue.

## The Roles of Bitcoin Miners

- Process and confirm transactions
- Anyone can be a Bitcoin miner due to decentralization
- Creates blocks on the Bitcoin Blochain
- Secure the Bitcoin network
- More Bitcoin miners, more secure the Bitcoin blockchain network because more Bitcoin miners make harder to hack the network and manipulate the stored data
- Miners need specialized and powerful computers which are specifically designed for Bitcoin mining.
- Solve cryptography math problems.
- Miners get rewarded/paid in Bitcoin, and that's how Bitcoin is created.

## Hash Functions

- Secure Hash Algorithm (SHA) 256 developed by National Security Agency (NSA).
- SHA-256 is a cryptographic hash function used in Bitcoin.
- Cryptography is a key component.
- SHA256 allows to generate unique hash from given data
- Hash is a one way function: there is no way of getting the data from hash
- On the other hand, encryption allows two ways conversion. We can convert the data into encrypted form and also retrieve data from encrypted code.

## Block Hashing

- Miners are in the process of creating blocks
- Nonce: Number used Once
- Domino Effect
- 4 leading zeros represent difficulty level.
- New blocks are mined every 10 minutes.

## Nonce

"Nonce" is a portmanteau of **"number used only once."** It is a four-byte number added to a hashed—or encrypted—block in a blockchain that, when rehashed, meets the difficulty level restrictions. **The nonce is the number that blockchain miners are solving for. When the solution is found, the blockchain miner that solves it is given the block reward.**

## Distributed Blockchain Network

- Same blockchain is distributed over the network with thousands copies.

## The Four Components of Bitcoin

- Software (Bitcoin Client)
  - Every 10 minutes, new cryptography challenge is created which is trying to find the nonce which will make the hash for specific block be valid 
- Cryptography
- Hardware
- Gaming Theory: Games run by Bitcoin miners

## Coinbase Transactions

## Bitcoin Transfer of Value

- Disintermediated
- Distributed
- Decentralized: nothing tells Bitcoin what to do.
- Trustless: Bitcoin is Trustless. As a result, you do not need any third party to establish trust.

**"Distributed Trustless Consensus"**

## Cryptocurrency

- Cryptocurrency is a type of digital asset which can be used to exchange value between parties.
- It uses cryptography to secure how it's transferred and to control the creation of new unit of that currency.

### Benefits of Cryptocurrency

- Impossible to counterfeit
- Decentralized cryptocurrencies are impervious to manipulation by governments (controlled supply)
- Fast settlement
- Can help the over 2 billion underbanked people worldwide
- Billions of dollars in cryptocurrency exchange hands daily worldwide
- No physical currency to transmit infection

## Smart Contracts

## Decentralized Autonomous Organizations (DAO)

- Collection of smart contracts
- Distributed networks on a Blockchain
- Internet of Things (IoT)
- Artificial Intelligence

## Blockchain Real Applications

1. Supply Chain Management
2. Real Estate: Reduce risk, error and fraud
3. Insurance
4. Certification & Authentification

## Limitations

1. Early Stage
2. Lack of Awareness
3. Limited Available Technical Talent
4. Immutable
5. No Reversals or Modifications
6. Key Management
7. Scalability
8. Time to Process
 
## Bitcoin Cash

- A new cryptocurrency developed from a "Hard Fork" in the Bitcoin Blockchain. Bitcoin Cash is NOT Bitcoin.
- Increases block size to 8MB from the 1MB limit prior to the fork.
- BitcoinCash.org
- Decentralized and run by global community

## Bitcoin Forks and Segregated Witness

### What is Fork?

A Fork takes place when a blockchain splits into two different paths forward. Hard Fork introduces a change that forces everyone to upgrade. Soft Fork introduces a change that is backwards compatible. It doesn't need upgrade. Forks on Bitcoin happen on a regular basis. Two or more miners solve a block at the same time - for a while there are extra chains. Eventually, one of the chains wins over the other. Orphan blocks are released to back to the Mempool.
### Hard Fork: Bitcoin Cash

Bitcoin Cash was born in August 1, 2017 at block #478558 by User Activated Hard Fork (UAHF)

### Soft Fork: Bitcoin with SegWit

- User Activated Soft Fork (UASF)
- Locked In on August 8, 2017 at block #479707
- Official Activation on August 24, 2017 at block #481824
- Did not cause a split in chain
- Replaces block size limit with block weight limit

### What is Segregated Withness (SegWit)?

- Protocol Upgrade
- Improves scalability without increasing Block size
- Addresses Transaction Malleability
- Does not require upgrading to remain on the Blockchain
- Did not cause a split in chain

## Block Weight

- Limited by how many transactions fit within the maximum block weight
- Current block weight limit is 4 Million "Weight Units"
- Block weight is measured in bytes
- Transaction fees are set based on the number of bytes in a transaction
- Miners try to maximize their profits by getting as many high fee transactions as they can
- It's also possible to have a block with only one transaction, the Coinbase transaction.

## Halving (50 BTC to 6.25 BTC)

- The first halving took place on November 28, 2012.
- Halving takes place every 4 years.

## Important Dates

- October 31, 2008: Bitcoin Whitepaper
- January 3,  2009: The Genesis block was created
- May 22, 2010: First Retail Purchase with Bitcoin (2 pizzas for 10000 BTC)
- November 28, 2013: 1 BTC > 1000 USD
- March 2, 2017: 1 BTC > 1 Oz of Gold
- 


## Resources

- [BitcoinCash](BitcoinCash.org)
- [CoinMarketCap](coinmarketcap.com)
- [BlockDozer](blockdozer.com)
- [Blockchair](blockchair.com)
## Questions to Solve

- Nonce, Hash, Coinbase Transactions