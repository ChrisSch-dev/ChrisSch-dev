export function calculateReadTime(content: string): number {
    const wordsPerMinute = 200
    const trimmedContent = content.trim()
    
    if (trimmedContent.length === 0) {
        return 1
    }
    
    const wordCount = trimmedContent.split(/\s+/).length

    return Math.ceil(wordCount / wordsPerMinute)
}
