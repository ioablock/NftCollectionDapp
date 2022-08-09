 // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.4;

//Saving gas,  save gas as we would not need to inherit and deploy the entire Whitelist Contract but only a part of it.
    interface IWhitelist {
        function whitelistedAddresses(address) external view returns (bool);
    }