// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="blog-list-main-container">
      <ul className="blog-list-container">
        {blogsList.map(each => (
          <BlogItem blogDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
