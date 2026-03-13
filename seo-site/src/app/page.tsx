import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import PostList from '@/components/PostList'
import Navbar from '@/components/Navbar'

export default function Home() {
  const allPostsData = getSortedPostsData()

  // 提取所有的Category并去重
  const categories = Array.from(new Set(allPostsData.map(post => post.category).filter(Boolean)))

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300">

      {/* 顶部导航 */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

        {/* 左侧侧边栏 - 分类导航 */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">探索专栏</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold text-lg flex items-center justify-between group">
                  全部文章
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 py-0.5 px-2 rounded-full">{allPostsData.length}</span>
                </Link>
              </li>
              {categories.map((cat, i) => {
                const count = allPostsData.filter(p => p.category === cat).length
                return (
                  <li key={i}>
                    <Link href={`/category/${cat}`} className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-base flex items-center justify-between transition-colors">
                      {cat}
                      <span className="text-xs bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 py-0.5 px-2 rounded-full">{count}</span>
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
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">全部文章</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">跨越 10 年的沉淀，1379 篇深度原创新知与经验。</p>
          </header>

          <PostList posts={allPostsData} initialCount={30} />
        </section>

      </main>

      {/* 底部《星佳宝典》引流/下载入口 */}
      <footer className="mt-12 border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            下载《星佳宝典》核心精华卷
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            我将这十年间关于“财富套利、心智成长、家庭教育”的深度思考，提炼汇编成了一本数字化长销书。
            点击下方按钮，免费获取您的专属电子版，开启认知升级的复利之路。
          </p>
          <a
            href="/xingjia_almanack_full.pdf"
            target="_blank"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full text-lg hover:scale-105 active:scale-95 transition-transform shadow-xl hover:shadow-2xl ring-4 ring-neutral-900/10 dark:ring-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            立刻免费下载 PDF
          </a>
          <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
            * 下载后建议使用 iPad 或大屏设备阅读，以获得最佳排版体验。
          </p>
        </div>
      </footer>
    </div>
  )
}
