const assert = require("assert");
const ganache = require("ganache-cli"); // test local ethereum network
const Web3 = require("web3"); // upper case for constructor
const web3 = new Web3(ganache.provider());

// Mocha: it, describe, beforeEach
