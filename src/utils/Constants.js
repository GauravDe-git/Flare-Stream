export const SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const API_KEY = "AIzaSyDu8fgEgivxksg3VSjQHdEpnQxp3Eh1bFU";

const categoryId = 0;

export const YOUTUBE_API_BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos";
export const YOUTUBE_API = `${YOUTUBE_API_BASE_URL}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;





