import Like from './Like'

const Article = ({article}) => {
  return (
    <article>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>
        {article.author}
      </p>
      <footer>
        <a href="{article.url}">{article.url}</a>
        <Like />
      </footer>
    </article>
  )
}

export default Article