import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 p-8 sm:p-20 transition-colors duration-300">
      <main className="max-w-4xl mx-auto flex flex-col gap-12">
        <header className="flex flex-col gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">星佳的小宇宙</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">关于香港身份与生活的100个答案与实操指南。</p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-8">最新文章</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allPostsData.map(({ slug, date, title, description, tags }) => (
              <li key={slug} className="group relative rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Link href={`/posts/${slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {title}</span>
                </Link>
                <div className="flex flex-col h-full justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <time dateTime={date}>{new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <div className="flex gap-2">
                      {tags?.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
