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
            ...(matterResult.data as { date: string; title: string; description: string; tags: string[]; category: string }),
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

    // Use modern rehype ecosystem to enable proper IDs on headings
    const remark = (await import('remark')).remark
    const remarkRehype = (await import('remark-rehype')).default
    const rehypeSlug = (await import('rehype-slug')).default
    const rehypeStringify = (await import('rehype-stringify')).default
    const GithubSlugger = (await import('github-slugger')).default

    const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Extract TOC
    const slugger = new GithubSlugger()
    const toc: { level: number, text: string, id: string }[] = [];
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(matterResult.content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugger.slug(text);
        if (text && id) {
            toc.push({ level, text, id });
        }
    }

    return {
        slug,
        contentHtml,
        toc,
        ...(matterResult.data as { date: string; title: string; description: string; tags: string[] }),
    }
}
