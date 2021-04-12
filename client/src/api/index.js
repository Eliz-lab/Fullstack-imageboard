import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = ()=> axios.get(url);

export const createPosts = ()=> axios.get(url, newPost);

/*export const updatePosts = ()=> axios.get(url,); */

//here api is the bridge between front end and backend (locallhost3000 FE and 5000 backend)