import React, { useState } from 'react';
import axios from 'axios';
import { photoColumn1 } from '../assets/photoLinks';
import { photoColumn2 } from '../assets/photoLinks';

export default function ImageSlider (props) {
 
    
    return(
        <div className="image-wrapper">
            <div id="image-column-1">
            {Object.keys(photoColumn1).length
            ? photoColumn1.map(link => {
                return (
                    <img className="images" src={link.link}></img>
                )
            })
        : ""}
            </div>
            <div id="image-column-2">
            {Object.keys(photoColumn2).length
            ? photoColumn2.map(link => {
                return (
                    <img className="images" src={link.link}></img>
                )
            })
        : ""}
            </div>
        </div>
    )
}