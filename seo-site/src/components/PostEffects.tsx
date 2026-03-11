"use client"
import { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

export default function PostEffects() {
    useEffect(() => {
        // Select all images inside the prose container
        mediumZoom('.prose img', {
            margin: 24,
            background: 'rgba(0, 0, 0, 0.85)',
        })
    }, [])

    return null
}
