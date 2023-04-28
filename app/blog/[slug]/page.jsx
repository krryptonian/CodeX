import { getPostContent } from '@/utils/getPostContent'
import { getPostMetadata } from '@/utils/getPostMetadata'

import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const BlogPost = (props) => {
  const {
    params: { slug },
  } = props

  const post = getPostContent(slug)

  return (
    <section className='container mt-10'>
      <div className='prose mx-auto dark:prose-invert max-w-5xl prose-img:aspect-video prose-img:object-cover prose-img:rounded-md'>
        <h1>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </div>
    </section>
  )
}

export default BlogPost
