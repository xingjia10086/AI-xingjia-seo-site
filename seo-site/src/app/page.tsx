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
    </div>
  )
}
