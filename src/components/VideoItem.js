import './VideoItem.css';
import React from 'react'

const VideoItem = ({ video }) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.default.url} />
            <div className="content">
                <a className="header">{video.snippet.title}</a>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoItem
