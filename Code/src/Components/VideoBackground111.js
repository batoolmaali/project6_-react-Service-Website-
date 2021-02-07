import React from 'react';
import Sample from "../assest/Video/sample.mp4";

function VideoBackground() {
    return (
        <div>
            <header>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={Sample} type="video/mp4"/>
                </video>
            </header>
          
        </div>
    );
}

export default VideoBackground;