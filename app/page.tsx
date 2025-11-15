import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedPropertiesSection } from "@/components/featured-properties-section"
import { FeaturedPropertiesAus } from "@/components/featured-properties-aus"
import { ServicesSection } from "@/components/services-section"
import { AgentsSection } from "@/components/agents-section"
import { TrendingBlogSection } from "@/components/trending-blog-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { PartnersSection } from "@/components/partners-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedPropertiesSection />
      <FeaturedPropertiesAus />
      <ServicesSection />
      <AgentsSection />
      <TrendingBlogSection />
      <ContactCtaSection />
      <Footer />
      {/* <PartnersSection /> */}
    </main>
  )
}
