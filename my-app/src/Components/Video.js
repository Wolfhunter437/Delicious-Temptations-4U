import React from 'react'

export default function Video() {
    return (
        <div class="container Video">
            <div class="videoContainer">
            <video id="customVideo" controls>
                <source src="assets/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    )
}
