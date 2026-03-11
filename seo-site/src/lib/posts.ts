import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
            slug,
            ...(matterResult.data as { date: string; title: string; description: string; tags: string[] }),
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
    }))
}

export async function getPostData(slug: string) {
    const decodedSlug = decodeURIComponent(slug);
    const fullPath = path.join(postsDirectory, `${decodedSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const remark = (await import('remark')).remark
    const html = (await import('remark-html')).default

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; description: string; tags: string[] }),
    }
}
