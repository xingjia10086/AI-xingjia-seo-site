import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import PostList from '@/components/PostList'

export async function generateStaticParams() {
    const allPostsData = getSortedPostsData()
    const categories = Array.from(new Set(allPostsData.map(post => post.category).filter(Boolean)))
    return categories.map((cat) => ({
        cat: cat,
    }))
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
    const resolvedParams = await params
    const decodedCat = decodeURIComponent(resolvedParams.cat)
    const allPostsData = getSortedPostsData()
    const categoryPosts = allPostsData.filter(post => post.category === decodedCat)
    const categories = Array.from(new Set(allPostsData.map(post => post.category).filter(Boolean)))

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">

            {/* 顶部导航 */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight">星佳的小宇宙</Link>
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">发现全库</Link>
                        <a href="https://github.com/xingjia10086/AI-xingjia-seo-site" target="_blank" className="hover:text-neutral-500 transition-colors">GitHub开源</a>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

                {/* 左侧侧边栏 - 分类导航 */}
                <aside className="md:w-64 flex-shrink-0 hidden md:block">
                    <div className="sticky top-24">
                        <Link href="/" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 mb-6 flex items-center transition-colors">
                            &larr; 返回全库频道
                        </Link>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6 mt-8">探索专栏</h2>
                        <ul className="flex flex-col gap-3">
                            {categories.map((cat, i) => {
                                const count = allPostsData.filter(p => p.category === cat).length
                                const isActive = cat === decodedCat
                                return (
                                    <li key={i}>
                                        <Link href={`/category/${cat}`} className={`font-medium text-base flex items-center justify-between transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-blue-600'}`}>
                                            {cat}
                                            <span className={`text-xs py-0.5 px-2 rounded-full ${isActive ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}>{count}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </aside>

                {/* 右侧列表区域 */}
                <section className="flex-1 min-w-0">
                    <header className="mb-10">
                        <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
                            {decodedCat}
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg">当前频道共有 {categoryPosts.length} 篇深度内容。</p>
                    </header>

                    <PostList posts={categoryPosts} initialCount={30} />
                </section>

            </main>
        </div>
    )
}
