import React from 'react';
import Sample from "../assest/Video/cook.mp4";
import '../assest/Css/video.css'
function VideoBackground() {
    return (
       
            <header className="header-container">
                <div className="video-container">
                <video   playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" style={{width:"100%"}}>
                    <source src={Sample} type="video/mp4"/>
                </video>
                </div>
            </header>
      
    );
}

export default VideoBackground;