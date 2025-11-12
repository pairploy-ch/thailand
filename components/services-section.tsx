"use client"

import { Building2, Headphones, TrendingUp, Globe, Clock, LayoutGrid, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: LayoutGrid,
    title: "Property Management",
    description:
      "We provide a range of services to property owners and landlords to help them effectively manage their real estate investments.",
    color: "text-blue-500",
  },
  {
    icon: Building2,
    title: "Home Buying",
    description:
      "Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer.",
    color: "text-orange-500",
  },
  {
    icon: Headphones,
    title: "Consulting Service",
    description:
      "A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry.",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Mortgage Service",
    description:
      "We offer a range of financial and administrative activities involved in obtaining a mortgage loan to purchase real estate.",
    color: "text-emerald-500",
  },
  {
    icon: Globe,
    title: "Home Selling",
    description:
      "Whether you are an individual homeowner, real estate investor, we assist in marketing, selling, and closing the sale of a property.",
    color: "text-purple-500",
  },
  {
    icon: Clock,
    title: "Escrow Service",
    description:
      "We are serving as a neutral third party that facilitates the closing process and ensures that the terms and conditions of the sale are met.",
    color: "text-red-500",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50" id="service">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Concierge Services</h2>
           <p className="text-muted-foreground leading-relaxed mb-10 text-xl text-center">
         From legal advice to rental management, we handle every step of your investment journey.
        </p> 


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${service.color} mb-6`}>
                  <Icon className="w-10 h-10" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* <Button variant="link" className="text-accent hover:text-accent/80 p-0 h-auto font-normal">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button> */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
