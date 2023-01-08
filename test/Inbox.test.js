const assert = require("assert");
const ganache = require("ganache-cli"); // test local ethereum network
const Web3 = require("web3"); // upper case for constructor
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
});

describe("Inbox", () => {
  it("deploy a contract", () => {
    console.log(accounts);
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
