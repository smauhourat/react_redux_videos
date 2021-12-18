import React from 'react'

const VideoDetails = (props) => {
    return (
        <div>
            VideoDetails: {props.video?.snippet.title}
        </div>
    )
}

export default VideoDetails;