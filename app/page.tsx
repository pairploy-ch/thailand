"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturedPropertiesSection } from "@/components/featured-properties-section";
import { FeaturedPropertiesAus } from "@/components/featured-properties-aus";
import { ServicesSection } from "@/components/services-section";
import { AgentsSection } from "@/components/agents-section";
import TrendingBlogSection  from "@/components/trending-blog-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { PartnersSection } from "@/components/partners-section";
import { supabase } from "../lib/supabaseClient";

// กำหนด interface สำหรับ Blog
interface Blog {
  id: number;
  Title: string;
  Content: string;
  created_at: string;
  Tags: string | null;
  cover: string;
  [key: string]: any;
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  async function fetchCourses() {
    const { data: Blogs, error } = await supabase
      .from("Blogs")
      .select("*");

    // จัดการข้อผิดพลาดและ State
    if (error) {
      console.error("Error fetching blogs:", error);
      return;
    }

    setBlogs(Blogs || []);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedPropertiesSection />
      <FeaturedPropertiesAus />
      <ServicesSection />
      <AgentsSection />
      <TrendingBlogSection blogs={blogs} />
      <ContactCtaSection />
      <Footer />
      {/* <PartnersSection /> */}
    </main>
  );
}