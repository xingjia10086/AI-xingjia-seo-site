import Link from 'next/link'
import SearchModal from './SearchModal'

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">星佳的小宇宙</Link>
                <div className="flex items-center gap-4 md:gap-6 text-sm font-medium">
                    {/* 这是刚刚加上的全站搜索模块入口 */}
                    <SearchModal />
                    <Link href="/" className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">发现全库</Link>
                    <a href="https://github.com/xingjia10086/AI-xingjia-seo-site" target="_blank" className="hidden md:block hover:text-neutral-500 transition-colors">GitHub开源</a>
                </div>
            </div>
        </nav>
    )
}
