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
            <button className="menu-buttons">
                OpenSea
            </button>
            <a href="https://www.twitter.com/afbelardi" target="_blank" className="menu-buttons">
                Twitter
            </a>
            <button className="menu-buttons">Instagram</button>
            </section> 
        </div>
        </div>
        </div>
    )
}