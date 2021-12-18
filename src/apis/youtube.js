import axios from 'axios';

const KEY = 'AIzaSyBU8vSO8gQp6j3qOvySZqmSPpOm87tAFXE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }    
});

