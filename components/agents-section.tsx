"use client"

import { Facebook, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"
import Image from "next/image"

const agents = [
      {
    name: "Sabrina Sipim Piwatthongchai",
    image: "/agent/ag-5.jpg",
    position: 'Founder & Managing Director',
    text: 'Thai–Australian real estate professional with a strong background in property management, sales, and international investment. Based between Melbourne and Bangkok, she founded Thailand Prestige with a vision to connect Thai and international investors through trustworthy real estate insights and exceptional service. With years of experience in Australia’s property market and ongoing studies in MBA at RMIT University, Sipim combines global perspective with local expertise — helping clients make confident and strategic property decisions in both Thailand and Australia.',
    phone: "987-654-3210",
  },
  {
    name: "Passasi Seepangmon",
    image: "/agent/ag-2.jpg", 
    position: 'Media and Marketing Specialist',
    text: 'Thailand Prestige proudly welcomes Ms. Passasi Seepengmon, an exceptional talent whose expertise in marketing and corporate communications extends across the regional level. Known for her creativity, strategic mindset, and leadership potential, Passasi represents the new generation of professionals who combine passion with precision.',
    phone: "987-654-3210",
  },
    {
    name: "Khemcharantorn Wannasrikongsin",
    image: "/agent/ag-3.jpg",
    position: 'Interior Architec',
    text: 'Top is a passionate Interior Architect with a strong foundation from HMC, Rotterdam – The Netherlands.With his creativity and hands-on experience, Top helps clients enhance the value of their property through designs that perfectly match their lifestyle and vision.',
    phone: "987-654-3210",
  },
  {
    name: "Winny Lim",
    image: "/agent/ag-4.jpg",
    position: 'Reat Estate Agent Specialist',
    text: 'Winny Lim was born and raised in Bangkok and pursued her studies in New Zealand. After many years of experience with international real estate firms, Winny decided to join the team at Thailand Prestige to continue her passion for real estate. She specializes in property rentals in Bangkok and the sale of prime residential properties across Bangkok, Chonburi, and Pattaya. With her strong market knowledge and personalized service, Winny is committed to helping clients find their perfect home or investment property.',
    phone: "987-654-3210",
  },

    {
    name: "Kaewmanee Termrattanasuwan",
    image: "/agent/ag-1.jpg",
    position: 'Real Estate Agent Specialist',
    text: 'Every challenge is an opportunity—each solution elevates value, capability, and trust. Kaewmanee is a distinguished real estate professional based in Northern Thailand, expertly connecting premium Thai properties with discerning Myanmar investors seeking secure, high-quality investment opportunities. With a commitment to sincerity, discretion, and exceptional service, she delivers a seamless, world-class experience for clients across borders.',
    phone: "987-654-3210",
  },
]

export function AgentsSection() {
  return (
    <section className="py-16 px-4 bg-background" id="team">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Thailand prestige team</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="relative md:w-2/5 h-96 md:h-auto">
                <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover"  style={{ objectPosition: 'center top' }} />
             
       
              </div>

              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
                  <p className="text-muted-foreground mb-4">{agent.position}</p>
                  <div className="flex gap-4 mb-6">
                    <p>{agent.text}</p>
                  </div>

                  {/* <div className="flex gap-4 mb-6">
                    <div>
                      <span className="font-bold text-lg">{agent.sale}</span>
                      <span className="text-muted-foreground"> Sale</span>
                    </div>
                    <div className="border-l border-border pl-4">
                      <span className="font-bold text-lg">{agent.rent}</span>
                      <span className="text-muted-foreground"> Rent</span>
                    </div>
                  </div> */}

                  {/* <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">Operating Since {agent.operatingSince}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{agent.buyersServed} Buyers Served</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{agent.verifiedProperties} Verified Properties</span>
                    </div>
                  </div> */}

                  {/* <div className="flex items-center gap-2 mb-6">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">{agent.phone}</span>
                  </div> */}
                </div>

                {/* <Button
                  variant="outline"
                  className="w-fit border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                >
                  Contact Agent
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
