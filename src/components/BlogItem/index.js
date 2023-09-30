// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item-container">
      <div className="title-and-date-container">
        <h1 className="blog-item-title">{title}</h1>
        <p className="blog-item-date">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
