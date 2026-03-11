import { getPostData, getAllPostSlugs } from '@/lib/posts'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateStaticParams() {
    const paths = getAllPostSlugs()
    return paths
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params
    const postData = await getPostData(resolvedParams.slug)
    return {
        title: `${postData.title} | 星佳的小宇宙`,
        description: postData.description,
        keywords: postData.tags,
    }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const postData = await getPostData(resolvedParams.slug)

    return (
        <article className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors">
                    &larr; 返回首页
                </Link>
                <header className="mb-12">
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{postData.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
                        <div className="flex gap-2">
                            {postData.tags?.map((tag: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-md text-xs">{tag}</span>
                            ))}
                        </div>
                    </div>
                </header>

                {/* JSON-LD Schema For SEO FAQ or Article */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": postData.title,
                            "datePublished": postData.date,
                            "description": postData.description,
                            "author": {
                                "@type": "Person",
                                "name": "星佳"
                            }
                        })
                    }}
                />

                <div
                    className="prose prose-neutral dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-img:rounded-xl prose-img:shadow-lg"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </div>
        </article>
    )
}
