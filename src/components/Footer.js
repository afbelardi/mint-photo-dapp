import React from 'react';
import { Button, Input } from '@chakra-ui/react';


export default function Footer(props) {

    const handleIncrement = () => {
        if (props.mintAmount >= 3) return;
        props.setMintAmount(props.mintAmount + 1);
    }

    const handleDecrement = () => {
        if (props.mintAmount <= 1) return;
        props.setMintAmount(props.mintAmount - 1);
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


    return (
        <div id='footer-wrapper'>
            <div id='footer-content'>
                <section id="footer-mint">
                {isConnected ? 
                <>
        <section id="mint-section">
        <Button 
                        className='menu-buttons'
                        marginRight='4px'
                        onClick={handleDecrement}>
                            -
                        </Button>
                        <Input
                        id='mint-amount'
                        readOnly
                        width='100px'
                        height='40px'
                        textAlign='center'
                        type='number'
                        value={props.mintAmount}
                        fontFamily="JetBrains Mono ,monospace"
                        />
            <Button 
                        className='menu-buttons'
                        marginLeft="3px"
                        onClick={handleIncrement}>
                            +
                        </Button>
                        
        </section>
        <button style={{marginTop: '10px'}} className='menu-buttons' id='mint-footer-button'>Mint</button>
        </>
        : '' }
                </section>
                <section>
                {isConnected ? 
            <button className="menu-buttons">Wallet Connected</button>
        : 
        <button className="menu-buttons" id='not-connected' onClick={connectAccount}>Connect Wallet</button>}
                </section>
            </div>
        </div>
    )
}