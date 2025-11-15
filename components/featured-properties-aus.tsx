"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from 'next/link';

type Property = {
  id: number;
  title: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  price: string;
  image: string;
  type: "rent" | "sale";
}

const properties: Property[] = [

]

export function FeaturedPropertiesAus() {
  const [activeTab, setActiveTab] = useState<"all" | "rent" | "sale">("all")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredProperties = properties.filter((property) => {
    if (activeTab === "all") return true
    return property.type === activeTab
  })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth / 3 // แสดง 3 cards ในหน้าจอใหญ่
      const scrollAmount = cardWidth + 24 // 24px = gap
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-gray-50" id="realestate">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">Australia Prestige Listings</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 text-xl text-center">
          Discover investment-ready apartments, townhouses, and homes in Melbourne, Sydney, and Brisbane.
        </p> 

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeTab === "all" ? "text-accent border-accent" : "text-gray-600 border-transparent hover:text-gray-900"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("rent")}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeTab === "rent"
                ? "text-accent border-accent"
                : "text-gray-600 border-transparent hover:text-gray-900"
            }`}
          >
            For Rent
          </button>
          <button
            onClick={() => setActiveTab("sale")}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeTab === "sale"
                ? "text-accent border-accent"
                : "text-gray-600 border-transparent hover:text-gray-900"
            }`}
          >
            For Sale
          </button>
        </div>

        {/* Properties Slider */}
        <div className="relative">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-500">No property</p>
            </div>
          ) : (
            <>
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProperties.map((property) => (
              <Card 
                key={property.id} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{property.address}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      <span>{property.sqft} sq ft</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${property.price.toLocaleString()}</span>
                    <Link href={`/${property.id}`}>
                        <Button
                      variant="outline"
                      className="text-accent border-accent hover:bg-accent hover:text-white bg-transparent"
                    >
                      View Details
                    </Button>
                    </Link>
                
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
            </>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  )
}