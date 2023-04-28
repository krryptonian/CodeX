import { map } from 'lodash'

import BlogCard from '@/blog/components/BlogCard'
import { getPostMetadata } from '@/utils/getPostMetadata'

export const metadata = {
  title: 'Blog',
}

const Blog = () => {
  const posts = getPostMetadata()

  return (
    <section className='container mt-10'>
      <div className='text-center mb-10'>
        <h1 className='subtitle'>Latest Updates</h1>
        <p className='mt-2 description'>Get in touch with us.</p>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
        {map(posts, (post, index) => (
          <BlogCard
            key={index}
            slug={post.slug}
            title={post.title}
            description={post.description}
            image={post.image}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </section>
  )
}

export default Blog
