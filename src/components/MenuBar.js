import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';


export default function MenuBar (props) {

    const toggleMenu = () => {
        props.setMenuOpen(false)
    }
    const isConnected = Boolean(props.accounts[0]);

    const connectAccount = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            props.setAccounts(accounts)
        }
    }

    const handleIncrement = () => {
        if (props.mintAmount >= 2) return;
        props.setMintAmount(props.mintAmount + 1);
    }

    const handleDecrement = () => {
        if (props.mintAmount <= 1) return;
        props.setMintAmount(props.mintAmount - 1);
    }
    return (
    <div className="menu-bar-wrapper">
        <div className="menu-bar">
            <div  id="close-out-wrapper">
            <button onClick={toggleMenu} className="close-out">X</button>
        </div>
        <section id="menu-social-links-wrapper">
            {isConnected ? 
            <button className="menu-buttons">Wallet Connected</button>
        : 
        <button className="menu-buttons" onClick={connectAccount}>Connect Wallet</button>}
            
            <a href="https://opensea.io/afbelardi" target="_blank" rel="noreferrer" className="menu-buttons">
                OpenSea
            </a>
            <a href="https://www.twitter.com/afbelardi" target="_blank" rel="noreferrer" className="menu-buttons">
                Twitter
            </a>
            <a href="https://www.instagram.com/afbelardi" target="_blank" rel="noreferrer" className="menu-buttons">Instagram</a>
        </section> 
        {isConnected ? <section id="mint-section">
        <Button 
                        className='menu-buttons'
                        marginRight='4px'
                        onClick={handleDecrement}>
                            -
                        </Button>
            <button className="menu-buttons">Mint</button>
            <Button 
                        className='menu-buttons'
                        marginLeft="3px"
                        onClick={handleDecrement}>
                            +
                        </Button>
        </section>
        : '' }
        </div>
        </div>
    )
}