export const SUGGESTIONS_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const SUGGESTIONS_API = 'https://flarestream-cors.onrender.com:8080/youtube?q=';
export const API_KEY = "AIzaSyDu8fgEgivxksg3VSjQHdEpnQxp3Eh1bFU";

const categoryId = 0;

export const YOUTUBE_API_BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos";
export const YOUTUBE_API = `${YOUTUBE_API_BASE_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

export const SURFING_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;


// https://www.googleapis.com/youtube/v3/search?part=snippet&type=suggest&key=AIzaSyDu8fgEgivxksg3VSjQHdEpnQxp3Eh1bFU&q=
