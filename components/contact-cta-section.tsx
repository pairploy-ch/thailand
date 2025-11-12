"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative bg-gradient-to-br from-[#344453] to-[#344453] py-20 lg:py-32" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
           
             
                <img
                  src="/modern-apartment-building.jpg"
                  alt="Modern apartment building"
                  className="w-full h-auto rounded-2xl"
                />
              
          
          </div>

          {/* Right Column - Form */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Are you looking for a dream home?</h2>
            <p className="text-lg mb-8 text-white/90">We can help you relize your dream of a new home</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />

              <textarea
                name="message"
                placeholder="What are you looking for"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                required
              />

              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg rounded-lg">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
