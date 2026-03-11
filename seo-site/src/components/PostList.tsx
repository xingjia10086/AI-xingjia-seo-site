"use client"
import { useState } from 'react'
import Link from 'next/link'

type PostMeta = {
    slug: string;
    date: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
}

export default function PostList({ posts, initialCount = 30 }: { posts: PostMeta[], initialCount?: number }) {
    const [visibleCount, setVisibleCount] = useState(initialCount)

    const visiblePosts = posts.slice(0, visibleCount)
    const hasMore = visibleCount < posts.length

    const loadMore = () => {
        setVisibleCount(prev => prev + 30)
    }

    return (
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visiblePosts.map(({ slug, date, title, description, tags, category }) => (
                    <li key={slug} className="group relative rounded-2xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <Link href={`/posts/${slug}`} className="absolute inset-0 z-10">
                            <span className="sr-only">View {title}</span>
                        </Link>
                        <div className="flex flex-col h-full justify-between gap-4">
                            <div>
                                <div className="mb-3">
                                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{category}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3 text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-auto">
                                <time dateTime={date}>{new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })}</time>
                                <div className="flex gap-2">
                                    {tags?.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md truncate max-w-[80px]">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {hasMore ? (
                <div className="mt-14 text-center">
                    <button
                        onClick={loadMore}
                        className="px-8 py-3 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-full font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-sm hover:shadow-md active:scale-95"
                    >
                        加载更多深度文章 (还剩 {posts.length - visibleCount} 篇)
                    </button>
                </div>
            ) : (
                <div className="mt-14 text-center text-neutral-400 text-sm">
                    <p>— 已经到底啦，期待更多新知吧 —</p>
                </div>
            )}
        </>
    )
}
