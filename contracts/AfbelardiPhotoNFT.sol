// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import 'openzeppelin/contracts/access/Ownable.sol';

contract AfbelardiPhotoNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint public maxPerWallet;
    bool public isPublicMintEnabledl
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;
}