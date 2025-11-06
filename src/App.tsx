import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load route components for code splitting
const Portfolio = lazy(() => import('./pages/Main/Portfolio.tsx'))
const Blog = lazy(() => import('./pages/Blog/Blog.tsx'))
const BlogPost = lazy(() => import('./pages/Blog/BlogPost.tsx'))
const BlogAdmin = lazy(() => import('./pages/Blog/BlogAdmin.tsx'))

// Loading fallback component
function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-muted-foreground">Loading...</div>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/post/:id" element={<BlogPost />} />
                    <Route path="/blog/admin" element={<BlogAdmin />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
