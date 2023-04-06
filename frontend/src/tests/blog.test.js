const {totaledLikes, favoriteBlog} = require('../utils/list_helper')

const blogs = [{
  _id: '5a422aa71b54a676234d17f8',
  title: 'Go To Statement Considered Harmful',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 6,
  __v: 0
},
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 4,
    __v: 0
  }
]

test('Should count total likes', () => {
  const count = totaledLikes(blogs)
  expect(count).toBe(10)
})

test('Should return favorite blog', () => {
  const blog = favoriteBlog(blogs)
  expect(blog).toBe(blogs[0])
})