import axios from 'axios'

const KEY = 'AIzaSyC4sUV3k34QJLXmtqtlEYVMjM2eStI2x3E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});