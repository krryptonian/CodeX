export const metadata = {
  title: 'Blog',
}

const Blog = () => {
  return (
    <section className='container mt-10'>
      <div className='text-center mb-10'>
        <h1 className='inline-block text-2xl sm:text-3xl font-extrabold text-neutral-200'>
          Latest Updates
        </h1>
        <p className='mt-2 text-sm text-neutral-400'>Get in touch with us.</p>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
        <div className='border border-neutral-800/70 overflow-hidden rounded-md'>
          <img
            className='aspect-video object-cover rounded-t-md'
            src='https://source.unsplash.com/random/?night'
            alt='unsplash'
          />
          <div className='p-4 space-y-3'>
            <div className='space-y-1'>
              <h1 className='text-xl font-semibold line-clamp-1'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <p className='line-clamp-3 text-neutral-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                consectetur in molestias deleniti aliquam, officia, corrupti id
                labore animi, vitae eligendi. Itaque, vero illo accusamus vel et
                soluta enim repudiandae?
              </p>
            </div>
            <div className='text-xs text-yellow-100 flex justify-between items-center'>
              <time dateTime={new Date().toLocaleString()}>
                {new Date().toLocaleString()}
              </time>
              <span>129 views</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
