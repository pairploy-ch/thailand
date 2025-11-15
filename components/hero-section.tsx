"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      image: "/bg/bg-1.jpg",
      title: "Thailand Prestige",
      subtitle: "Premium Real Estate in Thailand and Australia",
      description: "Private Sales • Luxury Homes & Condominiums • Investment Opportunities"
    },
    {
      image: "/bg/bg-2.png",
     title: "Thailand Prestige",
      subtitle: "Premium Real Estate in Thailand and Australia",
      description: "Private Sales • Luxury Homes & Condominiums • Investment Opportunities"
    },
    {
      image: "/bg/bg-3.jpeg",
      title: "Thailand Prestige",
      subtitle: "Premium Real Estate in Thailand and Australia",
      description: "Private Sales • Luxury Homes & Condominiums • Investment Opportunities"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-20">
              <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight text-white">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-3">
                  {slide.subtitle}
                </p>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 md:w-16 h-1.5 bg-white'
                : 'w-8 md:w-10 h-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-20 text-white/80 text-sm md:text-base font-light">
        <span className="text-xl md:text-2xl font-bold text-white">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        {' / '}
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  )
}