const assert = require("assert");
const ganache = require("ganache-cli"); // test local ethereum network
const Web3 = require("web3"); // upper case for constructor
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface)) // create a Contract object from web3 instance using the interface from compile.js which compiles the solidity code
    .deploy({ data: bytecode, arguments: ["Hi there!"] }) // deploys the contract
    .send({ from: accounts[0], gas: "1000000" }); // send the contract to network?
});

describe("Inbox", () => {
  it("deploy a contract", () => {
    assert.ok(inbox.options.address);
  });
  it("has a default message", async () => {
    const message = await inbox.methods.message().call(); // reference the inbox contract which has a property called methods which contains message() 
  });
});

// Mocha: it, describe, beforeEach
// class Car {
//   park() {
//     return "stopped";
//   }
//   drive() {
//     return "vroom";
//   }
// }

// beforeEach(() => {const car = new Car();});

// describe("Car", () => {
//   it("car can park", () => {
//     assert.equal(car.park(), "stopped");
//   });
//   it("car can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });
