import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { Transition } from 'react-transition-group';




export default function NavBar (props) {

    


    return (
        <div className="navbar-wrapper">
            <div className="hamburger">
            <Hamburger toggled={props.menuOpen} toggle={props.setMenuOpen}  color="white" duration={.9} size={40}/>
            </div>
            <div className='social-wrapper'>
            <a href="https://opensea.io/afbelardi" target="_blank" rel="noreferrer">
                <div className='social-div'>
                    
                        <svg viewBox="0 0 90 90"  width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M45 0C20.151 0 0 20.151 0 45s20.151 45 45 45 45-20.151 45-45S69.858 0 45 0ZM22.203 46.512l.189-.306 11.709-18.315c.171-.261.576-.234.702.054 1.953 4.383 3.645 9.837 2.853 13.23-.333 1.395-1.26 3.285-2.304 5.031a9.02 9.02 0 0 1-.441.747.397.397 0 0 1-.333.171H22.545a.398.398 0 0 1-.342-.612Zm52.173 6.3a.408.408 0 0 1-.243.378c-.909.387-4.014 1.818-5.301 3.609-3.294 4.581-5.805 11.133-11.43 11.133H33.948c-8.316 0-15.048-6.759-15.048-15.102v-.27c0-.216.18-.396.405-.396h13.068c.261 0 .45.234.432.495a4.397 4.397 0 0 0 .468 2.511 4.594 4.594 0 0 0 4.122 2.556h6.471v-5.049h-6.399a.414.414 0 0 1-.333-.648c.072-.108.144-.216.234-.342a49.469 49.469 0 0 0 2.331-3.717 29.88 29.88 0 0 0 1.611-3.222c.09-.198.162-.405.243-.603.126-.351.252-.684.342-1.008.09-.279.171-.567.243-.837.216-.936.306-1.926.306-2.952 0-.405-.018-.828-.054-1.224-.018-.441-.072-.882-.126-1.323-.036-.387-.108-.774-.18-1.17a24.352 24.352 0 0 0-.369-1.755l-.054-.225c-.108-.405-.207-.783-.333-1.188a44.34 44.34 0 0 0-1.233-3.645c-.162-.459-.342-.9-.531-1.332-.27-.666-.549-1.269-.801-1.836a13.363 13.363 0 0 1-.351-.738 21.95 21.95 0 0 0-.387-.801c-.09-.198-.198-.387-.27-.567l-.792-1.458c-.108-.198.072-.441.288-.378l4.95 1.341h.036l.648.189.72.198.261.072v-2.934C43.866 19.152 45 18 46.413 18c.702 0 1.341.288 1.791.756.459.468.747 1.107.747 1.818v4.365l.531.144c.036.018.081.036.117.063.126.09.315.234.549.414.189.144.387.324.621.513.477.387 1.053.882 1.674 1.449.162.144.324.288.477.441.801.747 1.701 1.62 2.565 2.592.243.279.477.549.72.846.234.297.495.585.711.873.297.387.603.792.882 1.215.126.198.279.405.396.603.36.531.666 1.08.963 1.629.126.252.252.531.36.801.333.738.594 1.485.756 2.241.054.162.09.333.108.495v.036c.054.216.072.45.09.693a7.714 7.714 0 0 1-.126 2.313c-.072.324-.162.63-.27.963-.117.315-.225.639-.369.954a12.946 12.946 0 0 1-.99 1.881c-.126.225-.279.459-.423.684-.162.234-.333.459-.477.675-.207.279-.423.567-.648.828-.198.27-.396.54-.621.783-.306.369-.603.711-.918 1.044-.18.216-.378.441-.585.639-.198.225-.405.423-.585.603-.315.315-.567.549-.783.756l-.513.459a.381.381 0 0 1-.27.108h-3.942v5.049h4.959c1.107 0 2.16-.387 3.015-1.116.288-.252 1.557-1.35 3.06-3.006a.354.354 0 0 1 .189-.117l13.689-3.96a.4.4 0 0 1 .513.387v2.898Z" fill="#000"></path></svg>
                    
                </div>
                </a>
            <div className='social-div'>
                <a href='https://www.instagram.com/afbelardi' target='_blank' rel="noreferrer">   
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                        </path>
                    </svg>
                </a>
                </div>
            <div className='social-div'>
                <a href='https://www.twitter.com/afbelardi' target='_blank' rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                        </path>
                    </svg>
                </a>
            </div>
            </div>
         </div>   
    )
}