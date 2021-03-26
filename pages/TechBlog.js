// module

// component
import Layout from '../components/Layout'
import PostList from '../components/PostList'


const TechBlog = ({ posts }) => {
  return (
    <Layout pageTitle = "Tech">
      <h1>TechBlog</h1>
      <PostList posts={posts} />
    </Layout>
  )
}

// export async function getStaticPaths() {
  
// }

export default TechBlog