"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type SearchResult = {
    slug: string
    title: string
    description: string
    category: string
    tags: string[]
}

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [indexData, setIndexData] = useState<SearchResult[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    // 当搜索框打开时，预先去拉取（或者从缓存拿）那1300篇文章的轻量元数据包
    useEffect(() => {
        if (isOpen && indexData.length === 0) {
            setIsLoading(true)
            fetch('/api/search')
                .then(res => res.json())
                .then(data => {
                    setIndexData(data)
                    setIsLoading(false)
                })
                .catch(() => setIsLoading(false))
        }
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [isOpen, indexData.length])

    // 当输入关键词时，在前端瞬间过滤搜索结果
    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            return
        }

        const lowerQuery = query.toLowerCase()
        const matched = indexData.filter(post => {
            const safeTitle = post.title?.toLowerCase() || ''
            const safeDesc = post.description?.toLowerCase() || ''
            const safeCat = post.category?.toLowerCase() || ''
            const safeTags = Array.isArray(post.tags) ? post.tags : []

            return safeTitle.includes(lowerQuery) ||
                safeDesc.includes(lowerQuery) ||
                safeCat.includes(lowerQuery) ||
                safeTags.some(t => t?.toLowerCase().includes(lowerQuery))
        })
        // 最多展示前 20 条，防止页面 DOM 过多卡顿
        setResults(matched.slice(0, 20))
    }, [query, indexData])

    // 绑定 ESC 关闭快捷键
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-500 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                搜索全站...
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex justify-center items-start pt-[10vh] px-4 sm:px-0">
                    {/* 毛玻璃背景遮罩 */}
                    <div
                        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* 搜索面板 */}
                    <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[80vh] border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-200">
                        {/* 搜索输入区 */}
                        <div className="flex items-center px-6 py-4 border-b border-neutral-100 dark:border-neutral-800">
                            <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input
                                ref={inputRef}
                                type="text"
                                className="flex-1 bg-transparent border-none focus:outline-none text-xl text-neutral-900 dark:text-white placeholder-neutral-400"
                                placeholder="搜索关键字、领域、标签..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="ml-4 text-xs font-semibold px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            >
                                ESC
                            </button>
                        </div>

                        {/* 结果展示区 */}
                        <div className="flex-1 overflow-y-auto p-4 bg-neutral-50/50 dark:bg-neutral-900/50">
                            {isLoading ? (
                                <div className="text-center py-12 text-neutral-400">正在构建毫秒级全站索引架构...</div>
                            ) : query && results.length === 0 ? (
                                <div className="text-center py-12 text-neutral-500">
                                    <p className="text-lg mb-2">在这1300多篇干货里没找到关于 "{query}" 的内容</p>
                                    <p className="text-sm">换个近义词试试？比如“香港”、“优才”、“副业”等</p>
                                </div>
                            ) : (
                                <ul className="space-y-2">
                                    {results.map((post) => (
                                        <li key={post.slug}>
                                            <Link
                                                href={`/posts/${post.slug}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block p-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/50 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
                                            >
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded uppercase">{post.category || '未分类'}</span>
                                                    <span className="text-xs text-neutral-400 flex gap-1">
                                                        {(Array.isArray(post.tags) ? post.tags : []).slice(0, 2).map((t: string) => <span key={t}>#{t}</span>)}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title || '无标题'}</h3>
                                                <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-1">{post.description || ''}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {!query && !isLoading && (
                                <div className="text-center py-12">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">热门搜索建议</h4>
                                    <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                                        {['香港优才', '深圳买房', '信用卡玩法', '万豪酒店', '知识星球', 'AI人工智能'].map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => setQuery(tag)}
                                                className="px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
