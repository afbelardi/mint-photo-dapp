import React, { useState } from 'react';
import axios from 'axios';
import { photoColumn1 } from '../assets/photoLinks';
import { photoColumn2 } from '../assets/photoLinks';

export default function ImageSlider (props) {
 
    
    return(
        <div id="animation-wrapper">
        <div id="image-wrapper">
            <span id="image-column-1">
            {Object.keys(photoColumn1).length 
            ? photoColumn1.map(link => {
                return(
                    <img key={Math.random() * photoColumn1.length} className="image" src={link.link}></img>
                )
            })
        : ''}
            </span>
            <span id="image-column-2">
            {Object.keys(photoColumn2).length 
            ? photoColumn2.map(link => {
                return(
                    <img key={Math.random() * photoColumn2.length} className="image" src={link.link}></img>
                )
            })
        : ''}

            </span>
        </div>
        </div>
    )
}