"use client"

import Image from "next/image"
import Link from "next/link"

// กำหนด interface สำหรับ Blog ให้ตรงกับโครงสร้างจาก Supabase
interface Blog {
  id: number;
  Title: string;
  Content: string;
  created_at: string;
  Tags: string | null;
  cover: string;
  [key: string]: any;
}

// กำหนด Props interface
interface TrendingBlogSectionProps {
  blogs: Blog[]
}

// ฟังก์ชันสำหรับแปลงวันที่
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// ฟังก์ชันสำหรับสร้าง excerpt จาก Content
const getExcerpt = (content: string, maxLength: number = 150) => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength).trim() + '...';
}

// แก้ไข component ให้รับ props
export default function TrendingBlogSection({ blogs }: TrendingBlogSectionProps) {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Articles and News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real Estate News and Market Insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs && blogs.length > 0 ? (
            blogs.slice(0, 6).map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={blog.cover || "/placeholder.svg"}
                    alt={blog.Title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  {blog.Tags && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                      {blog.Tags}
                    </span>
                  )}
                  <h3 className="font-bold text-xl text-black mb-2 group-hover:text-primary transition line-clamp-2">
                    {blog.Title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {getExcerpt(blog.Content)}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatDate(blog.created_at)}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No Articles Available</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {blogs && blogs.length > 6 && (
          <div className="text-center mt-12">
            <Link
              href="/blogs"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}