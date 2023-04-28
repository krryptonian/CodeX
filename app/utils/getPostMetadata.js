import fs from 'fs'
import matter from 'gray-matter'
import { filter, map, replace } from 'lodash'

export const getPostMetadata = () => {
  const markdowns = filter(fs.readdirSync('app/markdown/'), (file) =>
    file.endsWith('.md')
  )

  return map(markdowns, (filename) => {
    const content = fs.readFileSync(`app/markdown/${filename}`, 'utf-8')
    const result = matter(content)
    return {
      title: result.data.title,
      slug: replace(filename, '.md', ''),
      description: result.data.description,
      image: result.data.image,
      createdAt: result.data.createdAt,
    }
  })
}
