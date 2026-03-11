"use client"
import { useEffect, useState } from 'react'

type TOCItem = {
    level: number
    text: string
    id: string
}

export default function TOC({ toc }: { toc: TOCItem[] }) {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        // Find visible headings and highlight the corresponding TOC item
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '0px 0px -80% 0px' }
        )

        toc.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [toc])

    if (!toc || toc.length === 0) return null

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pl-6 border-l-2 border-neutral-200 dark:border-neutral-800 hidden xl:block w-64 flex-shrink-0">
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6 font-sans">大纲目录</h4>
            <ul className="flex flex-col gap-3 text-sm">
                {toc.map((item, i) => (
                    <li key={i} style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}>
                        <a
                            href={`#${item.id}`}
                            className={`block transition-colors line-clamp-2 ${activeId === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'}`}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                                setActiveId(item.id)
                            }}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
