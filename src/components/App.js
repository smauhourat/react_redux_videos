import React, { Component, useState, useEffect } from 'react'
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('casas');
    }, []);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };    

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }    

    return (
        <div className="ui content" style={{margin: '10px'}}>
            <SearchBar onFormSubmit={onTermSubmit} />
            Found: {videos.length} videos
            <div className="ui grid">
                <div className="ui row">
                    <div class="eleven wide column">
                        <VideoDetails video={selectedVideo}/>
                    </div>
                    <div class="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default App;
