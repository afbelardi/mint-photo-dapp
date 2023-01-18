import React, { useState } from 'react';
import axios from 'axios';
import { photoColumn1 } from '../assets/photoLinks';
import { photoColumn2 } from '../assets/photoLinks';

export default function ImageSlider (props) {
 
    
    return(
        <div id="animation-wrapper">
        <div id="image-wrapper">
            <span id="image-column-1">

            </span>
            <span id="image-column-2">
                
            </span>
        </div>
        </div>
    )
}