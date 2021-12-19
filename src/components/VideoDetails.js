import React from 'react'

const VideoDetails = (props) => {
    if (!props.video) {
        return <div>Loading...</div>;
      }    
    const videoUrl = `https://www.youtube.com/embed/${props.video?.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoUrl} />
            </div>
            <div className="ui segment">
                <h4 className="header">{props.video?.snippet.title}</h4>
                <p>{props.video?.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails;