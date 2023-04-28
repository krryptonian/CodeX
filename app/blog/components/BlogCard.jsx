'use client'
import Link from 'next/link'
import styled from 'styled-components'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'

const BlogCard = ({ image, title, description, slug, createdAt, views }) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      property={title}
      id={slug}
      className='border-color group relative w-full overflow-hidden rounded-md border bg-neutral-50 dark:bg-neutral-950'
      onMouseMove={handleMouseMove}
    >
      <>
        <img
          className='aspect-video rounded-t-md object-cover'
          src={image}
          alt={title}
        />
        <div className='space-y-1 p-4'>
          <Link href={`/blog/${slug}`}>
            <span className='sr-only'>{title}</span>
            <h1 className='line-clamp-2 text-xl font-semibold'>{title}</h1>
          </Link>
          <p className='line-clamp-2 text-sm text-neutral-400'>{description}</p>
        </div>
      </>
      <Gradient
        x={mouseX}
        y={mouseY}
        className='pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100'
      />
    </div>
  )
}

export default BlogCard

const Gradient = styled(motion.div).attrs((props) => ({
  style: {
    background: useMotionTemplate`radial-gradient(600px circle at ${props.x}px ${props.y}px, rgba(37, 99, 235, .20), transparent 40%)`,
  },
}))``
