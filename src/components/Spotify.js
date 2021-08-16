import React from 'react';
import { FaSpotify } from "react-icons/fa";
import "./Spotify.css";

function Spotify() {

    let musicStyles = {
        fontSize: '2.5vw',
        color: "#1DB954",
        margin: "auto"
    }

    return (
        <div className="music-wrap">
            <div className="music">
                <img src="assets/music.png" className="music-img" />
                <div className="music-content">
                        <FaSpotify style={musicStyles}/>    
                        <p>Connect to your spotify account</p>
                </div>
            </div>
        </div>
    );
}

export default Spotify;