"use client";

import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div>
            <div className="mb-8">
              <Image
                src="/logo-tp.png"
                alt="Real Homes"
                width={100}
                height={60}
              />
            </div>

            <div className="space-y-4 text-gray-600">
              {/* <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1889 NW 79st St, Asheville, NC 98726</span>
              </div> */}

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+66 98 96339 63 / Thai Speaking </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+66 98 624 1805 / English Speaking </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M16.002 3.2c-7.06 0-12.8 5.739-12.8 12.8 0 2.259.589 4.461 1.717 6.403L3.2 28.8l6.55-1.69c1.883.997 3.996 1.521 6.252 1.521h.001c7.06 0 12.8-5.739 12.8-12.8 0-3.417-1.332-6.632-3.75-9.05-2.417-2.417-5.632-3.75-9.05-3.75zm0 23.466h-.001a10.57 10.57 0 01-5.383-1.475l-.385-.228-3.886 1.004 1.036-3.785-.251-.39A10.524 10.524 0 015.6 16c0-5.73 4.669-10.4 10.402-10.4 2.78 0 5.39 1.083 7.351 3.044A10.35 10.35 0 0126.4 16c0 5.732-4.669 10.4-10.398 10.4zm5.704-7.808c-.312-.156-1.853-.913-2.14-1.017-.287-.106-.497-.156-.706.156-.209.312-.807 1.017-.99 1.226-.181.209-.362.234-.674.078-.312-.156-1.318-.486-2.512-1.55-.928-.827-1.554-1.848-1.736-2.16-.181-.312-.02-.48.136-.636.14-.139.312-.362.468-.543.156-.181.207-.312.312-.521.104-.209.052-.391-.026-.543-.078-.156-.706-1.704-.967-2.334-.255-.612-.515-.53-.706-.54l-.603-.01c-.209 0-.543.078-.827.39-.287.312-1.087 1.06-1.087 2.583s1.113 2.998 1.268 3.207c.156.209 2.19 3.345 5.306 4.686.742.32 1.32.51 1.77.653.743.236 1.42.203 1.955.123.597-.089 1.853-.757 2.116-1.489.26-.732.26-1.36.182-1.489-.077-.13-.285-.208-.597-.364z" />
                </svg>

                <a
                  href="https://wa.me/66986241805"
                  target="_blank"
                  className="hover:text-green-600 transition-colors"
                >
                  +66 98 624 1805 / WhatsApp 
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Thailandprestige6@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  Properties Listing
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-gray-600 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-lg font-bold mb-6">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Talk To An Expert */}
          <div>
            <h3 className="text-lg font-bold mb-6">Talk To An Expert</h3>
            <p className="text-gray-600 mb-6">
              Get expert consultation regarding you Real Estate needs.
            </p>
            <button
              onClick={() =>
                (window.location.href = "mailto:Thailandprestige6@gmail.com")
              }
              className="px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors rounded"
            >
              Contact
            </button>

            {/* Connect With Us */}
            <div className="mt-8">
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/thattheWAY"
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a> */}
                <a
                  href="https://www.linkedin.com/company/thailand-prestige/?viewAsMember=true"
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/61466126095"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-accent hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16.002 3.2c-7.06 0-12.8 5.739-12.8 12.8 0 2.259.589 4.461 1.717 6.403L3.2 28.8l6.55-1.69c1.883.997 3.996 1.521 6.252 1.521h.001c7.06 0 12.8-5.739 12.8-12.8 0-3.417-1.332-6.632-3.75-9.05-2.417-2.417-5.632-3.75-9.05-3.75zm0 23.466h-.001a10.57 10.57 0 01-5.383-1.475l-.385-.228-3.886 1.004 1.036-3.785-.251-.39A10.524 10.524 0 015.6 16c0-5.73 4.669-10.4 10.402-10.4 2.78 0 5.39 1.083 7.351 3.044A10.35 10.35 0 0126.4 16c0 5.732-4.669 10.4-10.398 10.4zm5.704-7.808c-.312-.156-1.853-.913-2.14-1.017-.287-.106-.497-.156-.706.156-.209.312-.807 1.017-.99 1.226-.181.209-.362.234-.674.078-.312-.156-1.318-.486-2.512-1.55-.928-.827-1.554-1.848-1.736-2.16-.181-.312-.02-.48.136-.636.14-.139.312-.362.468-.543.156-.181.207-.312.312-.521.104-.209.052-.391-.026-.543-.078-.156-.706-1.704-.967-2.334-.255-.612-.515-.53-.706-.54l-.603-.01c-.209 0-.543.078-.827.39-.287.312-1.087 1.06-1.087 2.583s1.113 2.998 1.268 3.207c.156.209 2.19 3.345 5.306 4.686.742.32 1.32.51 1.77.653.743.236 1.42.203 1.955.123.597-.089 1.853-.757 2.116-1.489.26-.732.26-1.36.182-1.489-.077-.13-.285-.208-.597-.364z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© Thailandprestige. All Rights Reserved.</p>
          {/* <p>Designed by InspiryThemes</p> */}
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
    </footer>
  );
}
