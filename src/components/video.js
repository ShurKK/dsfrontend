import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <video preload controls width="100%">
        <source src={videoSrcURL} type="video/mp4"/>    
    </video>  
  </div>
)
export default Video