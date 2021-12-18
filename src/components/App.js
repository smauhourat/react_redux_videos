import React, { Component } from 'react'
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';


class App extends Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
        console.log(response.data.items);
    };

    render() {
        return (
            <div className="ui content" style={{margin: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                Found: {this.state.videos.length} videos
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;
