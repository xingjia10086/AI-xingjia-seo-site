import { NextResponse } from 'next/server'
import { getSortedPostsData } from '@/lib/posts'

export async function GET() {
    const allPostsData = getSortedPostsData()
    // 精简字段，仅提取搜索需要的元数据，极大地减小网络传输包体积
    const searchIndex = allPostsData.map(post => ({
        slug: post.slug,
        title: post.title,
        description: post.description,
        category: post.category,
        tags: post.tags || []
    }))

    // 返回 JSON 数据给予前端 Client Component
    return NextResponse.json(searchIndex)
}
