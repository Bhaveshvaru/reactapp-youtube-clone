import axios from 'axios';
const KEY = 'AIzaSyCvdHvFVUvYVKs6UJ_S3TBcM9xIwbtiaPU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: `${KEY}`,
  },
});
