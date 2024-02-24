//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Partnership {
    string private deploymentMessage = "Contract is deployed.";
    uint256[] public splitRatios;
    address[] public addresses;
    uint256 private splitRatiosTotal;

    constructor(address[] memory _addresses, uint256[] memory _splitRatios) {
        require(
            _addresses.length > 1,
            "More than one address should be provided to establish a partnership"
        );

        require(
            _splitRatios.length == _addresses.length,
            "The address amount and the split ratio amount should be equal"
        );

        addresses = _addresses;
        splitRatios = _splitRatios;

        console.log(deploymentMessage);
    }

    function getSplitRatiosTotal(uint256[] memory _splitRatios) private pure returns(uint256){
        uint256 total = 0;
        for(uint256 i = 0; i < _splitRatios.length; i++){
            require(_splitRatios[i] > 0, "Split ratio can not be 0 or less");
            total += _splitRatios[i];
        }
        return total;
    }
}