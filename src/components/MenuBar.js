import React from 'react';


export default function MenuBar (props) {

    const toggleMenu = () => {
        props.setMenuOpen(false)
    }

    return (
    <div className="menu-bar-wrapper">
        <div className="menu-bar">
            <div  id="close-out-wrapper">
                <div onClick={toggleMenu} id="close-out1"></div>
                <div onClick={toggleMenu} id="close-out2"></div>
        </div>
        </div>
        </div>
    )
}