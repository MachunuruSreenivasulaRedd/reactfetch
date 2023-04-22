import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container" data-testId="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
