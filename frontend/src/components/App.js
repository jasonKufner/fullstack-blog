import Article from "./Article";
import BlogForm from "./BlogForm";
import {useEffect, useState} from "react";
import blogService from "../services/blogService";

const Blog = () => {
  const [articles, setArticles] = useState([])

  useEffect( () => {
    blogService.getAll().then( posts => {
      setArticles(posts)
    } )
  }, [])

  return (
    <main>
      <BlogForm></BlogForm>
      { articles.map(a =>
        <Article key={a.id} article={a}/>
      )}
    </main>
  )
}

export default Blog