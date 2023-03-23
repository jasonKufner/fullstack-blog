import axios from "axios";

const baseUrl = '/api/blogs'

const getAll = () => axios
  .get(baseUrl)
  .then( response => response.data)


const newPost = (article) => axios
  .post(baseUrl, article)
  .then(r => r.data)


export default {getAll, newPost}