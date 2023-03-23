import '../static/App.css';
import {useState} from "react";
import blogService from "../services/blogService";

const App = () => {
  const [blog, setBlog] = useState({})

  const formFields = (field, value) => setBlog({
    ...blog,
    [field]: value
  })

  const submitForm = (e) => {
    e.preventDefault()
    blogService.newPost(blog)
  }

  return (
      <form>
        title = {blog.title} <br/>
        author = {blog.author} <br/>
        url = {blog.url} <br/>
        <label>
          Title:
          <input type="text" onChange={(i) => formFields("title",i.currentTarget.value)}/>
        </label>

        <label>
          Author:
          <input type="text" onChange={(i) => formFields("author",i.currentTarget.value)}/>
        </label>

        <label>
          Url:
          <input type="text" onChange={(i) => formFields("url",i.currentTarget.value)}/>
        </label>
        <button type="submit" onClick={submitForm}>submit</button>
      </form>
  );
}

export default App
