//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Partnership {
    string private deploymentMessage = "Contract is deployed.";
    uint256 private partnerAmount = 2;
    address[] public addresses;

    constructor(address[] memory _addresses) {
        require(
            _addresses.length == partnerAmount,
            "The can't have more than 2 partners."
        );

        addresses = _addresses;

        console.log(deploymentMessage);
    }
}