import fs from 'fs'
import matter from 'gray-matter'

export const getPostContent = (slug) => {
  return matter(fs.readFileSync(`app/markdown/${slug}.md`, 'utf8'))
}
