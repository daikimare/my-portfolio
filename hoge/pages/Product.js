// module
import Link from 'next/link';

// component
import Layout from '../components/Layout'

export default function Product() {

  return(
    <Layout>
      <h1>成果物</h1>
      <h3><Link href="/">Home</Link></h3>
    </Layout>
  )
}