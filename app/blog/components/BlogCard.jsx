import Link from 'next/link'

const BlogCard = ({ image, title, description, slug, createdAt, views }) => {
  return (
    <div className='border border-color overflow-hidden rounded-md'>
      {!image ? null : (
        <img
          className='aspect-video object-cover rounded-t-md'
          src={image}
          alt={title}
        />
      )}
      <div className='p-4 space-y-3'>
        <div className='space-y-1'>
          <Link href={`/blog/${slug}`}>
            <span className='sr-only'>{title}</span>
            <h1 className='line-clamp-2 text-xl font-semibold'>{title}</h1>
          </Link>
          <p className='line-clamp-3 text-neutral-600 text-sm'>{description}</p>
        </div>
        {createdAt || views ? (
          <div className='text-xs flex justify-between items-center'>
            {!createdAt ? null : <time dateTime={createdAt}>{createdAt}</time>}
            {!views ? null : <span>{`${views} views`}</span>}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default BlogCard
