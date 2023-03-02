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

### The Messsage Global Object

- `msg.data`: 'Data' field from the call or transaction that invoked the current function
- `msg.gas`: Amount of gas the current function invocation has available
- `msg.sender`: Address of the account that started the current function invocation
- `msg.value`: Amount of ether (in wei) that was sent along with the function invocation

### Reference Types

- Fixed Array
  - Array that contains a single type of element. 
  - Has an unchaging length.
  - `int[3] = [1,2,3]; bool[2] = [true,false]`
- Dynamic Array
  - Array that contains a single type of element.
  - Can change in size over time.
  - `int[] = [1,2,3]; bool[] = [true,false,true]`
- Mapping
  - Collection of key value pairs.
  - Think of JavaScript objects, Ruby hashes, or Python dictionary.
  - All keys must be of the same type, and all values must be of the same type.
  - Represents a collection of things.
  - `mapping[string => string]; mapping[int => boolean]`
- Struct
  - Collection of key value pairs that can have different types.
  - Represents a singular thing.
  - `struct Car {string make; string model; uint value;}`


### Common Function Types

- `public`: Anyone can call this function
- `private`: Only this contract can call this function
- `view`: This function returns data and does not modify the contract's data
- `constant`: This function returns data and does not modify the contract's data
- `pure`: Function will not modify or even read the contract's data
- `payable`: When someone call this function, they might send ether along