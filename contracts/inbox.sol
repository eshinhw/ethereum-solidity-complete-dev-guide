pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function Inbox (string inputMessage) public {
        message = inputMessage;
    }

    function setMessage (string newMessage) public {
        message = newMessage;
    }

}