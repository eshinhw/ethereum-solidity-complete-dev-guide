# Chapter 3: Advanced Smart Contracts

## The Lottery Contract

###  Contract Variables

- `Manager`: A person who create a smart contract and execute it
- `Players`: People who participate in the lottery (An array of addresses)

### Contract Functions

- `Enter`: Enters a player into the lottery
- `pickWinner`: Randomly picks a winner and sends them the prize

### Basic Solidity Types

- `string`: Sequence of characters
- `bool`: Boolean value
- `int`: Integer, positive or negative. Has no decimal.
  - `int8`: 8 bits are used to represent integer. (-128 ~ 127)
  - `int16`: 16 bits are used to represent integer. (-32768 ~ 32767)
  - `int256` == `int`: Either really large negative int or really large positive int.
- `uint`: 'Unsigned' integer, positive number. Has no decimal.
  - A signed integer is a 32-bit datum that encodes an integer in the range **[-2147483648 to 2147483647]**. 
  - An unsigned integer is a 32-bit datum that encodes a nonnegative integer in the range **[0 to 4294967295]**.
- `fixed/ufixed`: 'Fixed' point number. Number with a decimal after it.
- `address`: Has methods tied to it for sending money.