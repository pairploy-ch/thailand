"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { Header } from "@/components/headerDark"
import { Footer } from "@/components/footer"

// กำหนด interface สำหรับ Blog ให้ตรงกับโครงสร้างจาก Supabase
interface BlogPost {
  id: number
  Title: string
  Content: string
  created_at: string
  Tags: string | null
  cover: string
  [key: string]: any
}

// ฟังก์ชันสำหรับแปลงวันที่
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  const blogId = params.id as string

  useEffect(() => {
    async function fetchBlogData() {
      try {
        setLoading(true)

        // ดึงข้อมูล blog ที่ต้องการ
        const { data: blogData, error: blogError } = await supabase
          .from("Blogs")
          .select("*")
          .eq("id", blogId)
          .single()

        if (blogError) {
          console.error("Error fetching blog:", blogError)
          setBlog(null)
          return
        }

        setBlog(blogData)

        // ดึงบทความที่เกี่ยวข้อง (ไม่รวมบทความปัจจุบัน)
        const { data: relatedData, error: relatedError } = await supabase
          .from("Blogs")
          .select("*")
          .neq("id", blogId)
          .order("created_at", { ascending: false })
          .limit(2)

        if (!relatedError && relatedData) {
          setRelatedBlogs(relatedData)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()
  }, [blogId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <Link href="/blogs" className="text-primary hover:underline">
              Back to Articles
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Header Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto container px-4 md:px-8 lg:px-16 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <article className="mx-auto container px-4 md:px-8 lg:px-16 py-12">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.cover || "/placeholder.svg"}
            alt={blog.Title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.created_at)}</span>
          </div>
          {blog.Tags && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {blog.Tags}
              </span>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
          {blog.Title}
        </h1>

        {/* Content */}
        <div className="max-w-3xl prose prose-lg text-gray-700 leading-relaxed mb-12">
          {blog.Content.split('\n').map((paragraph, index) => {
            // ตรวจสอบว่าเป็น heading หรือไม่
            if (paragraph.trim().startsWith('–') || paragraph.trim().startsWith('-')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-black mt-8 mb-4">
                  {paragraph.replace(/^[–-]\s*/, '')}
                </h2>
              )
            }
            // ตรวจสอบว่าเป็นบรรทัดว่างหรือไม่
            if (paragraph.trim() === '') {
              return <br key={index} />
            }
            // แสดงเป็น paragraph ปกติ
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Share Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-12">
          <h3 className="text-lg font-semibold text-black mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: blog.Title,
                    url: window.location.href,
                  })
                }
              }}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Share
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map(post => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.cover || "/placeholder.svg"}
                      alt={post.Title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    {post.Tags && (
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.Tags}
                      </span>
                    )}
                    <h3 className="font-semibold text-lg text-black group-hover:text-primary transition line-clamp-2">
                      {post.Title}
                    </h3>
                    <p className="text-sm text-gray-600">{formatDate(post.created_at)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            View All Articles
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}