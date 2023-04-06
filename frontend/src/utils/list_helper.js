const totaledLikes = (blogs) => {
  return blogs
    .reduce((sum, blog) => sum += blog.likes,
      0)
}

const favoriteBlog = (blogs) => {
  return blogs
    .reduce((fav, blog) => blog.likes >= (fav.likes || 0)
      ? blog
      : fav, {}
    )
}

module.exports = {
  totaledLikes,
  favoriteBlog
}