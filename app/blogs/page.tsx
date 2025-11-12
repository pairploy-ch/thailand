import { Header } from "@/components/headerDark"
import { Footer } from "@/components/footer"

import { TrendingBlogSection } from "@/components/trending-blog-section"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
 
      <TrendingBlogSection />
    
      <Footer />
      {/* <PartnersSection /> */}
    </main>
  )
}
