import axios from 'axios';

const url = 'http://localhost:8080/blog'
const urlPost = 'http://localhost:8080/blog/post'

export const fetchPosts = () => axios.get(url);
export const readPost = (id) => axios.get(urlPost/`${id}`)
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${urlPost}, ${id}`);