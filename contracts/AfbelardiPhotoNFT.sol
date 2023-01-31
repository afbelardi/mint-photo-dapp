// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract AfbelardiPhotoNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    string public baseExtension;
    address public withdrawWallet;
    mapping(address => uint256) public walletMints;
    mapping(address => bool) public isWhiteListed;


    constructor() payable ERC721('AfbelardiPhotoNFT', 'AFB') {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 9;
        maxPerWallet = 3;
        withdrawWallet = 0xf72cb599DeB8f2cB5768B6Cd94a295C299Bd612F;
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_, string calldata baseExtension_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
        baseExtension = baseExtension_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), 'Token does not exist!');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), baseExtension));
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{ value: address(this).balance}('');
        require(success, 'Withdrawal failed');
    }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnabled, 'Minting not enabled');
        require(quantity_ > 0, 'You must mint at least one NFT');
        require(msg.value == quantity_ * mintPrice, 'Wrong mint value');
        require(totalSupply + quantity_ <= maxSupply, 'Sold out');
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'Exceeded max wallet');

        for (uint256 i = 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }

}