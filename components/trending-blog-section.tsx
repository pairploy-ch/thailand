"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    image: "/blog-dining-room.jpg",
    title: "As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
  },
  {
    id: 2,
    image: "/blog-white-kitchen.jpg",
    title: "Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
  },
  {
    id: 3,
    image: "/blog-modern-kitchen.jpg",
    title: "Here's How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up",
  },
]

export function TrendingBlogSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" id="blog">
      <div className="mx-auto container ">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">What's in Trending</h2>
          {/* <Link href="/blog" className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300">
            <span className="text-sm font-medium">View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link> */}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300"
                >
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
