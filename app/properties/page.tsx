import { Header } from "@/components/headerDark"
import { Footer } from "@/components/footer"
import { FeaturedPropertiesSection } from "@/components/featured-properties-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
   
      <FeaturedPropertiesSection />

      <Footer />
      {/* <PartnersSection /> */}
    </main>
  )
}
