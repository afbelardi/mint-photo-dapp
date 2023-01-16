import React from 'react';



export default function MenuBar (props) {

    const toggleMenu = () => {
        props.setMenuOpen(false)
    }

    return (
    <div className="menu-bar-wrapper">
        <div className="menu-bar">
            <div  id="close-out-wrapper">
            <button onClick={toggleMenu} className="close-out">X</button>
        </div>
        <div>
            <section id="menu-social-links-wrapper">
            <button className="menu-buttons">Connect Wallet</button>
            <a href="https://opensea.io/afbelardi" target="_blank" rel="noreferrer" className="menu-buttons">
                OpenSea
            </a>
            <a href="https://www.twitter.com/afbelardi" target="_blank" rel="noreferrer" className="menu-buttons">
                Twitter
            </a>
            <a href="https://www.instagram.com/afbelardi" target="_blank" rel="noreferrer" className="menu-buttons">Instagram</a>
            </section> 
        </div>
        </div>
        </div>
    )
}