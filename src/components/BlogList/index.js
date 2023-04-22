import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(item => ({
      id: item.id,
      title: item.title,
      author: item.author,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      topic: item.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader color="#000fff" type="Tile/Spin" width={50} height={50} />
        ) : (
          blogList.map(item => <BlogItem item={item} key={item.id} />)
        )}
      </div>
    )
  }
}
export default BlogList
