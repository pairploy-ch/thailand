import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-balance leading-tight">
              Welcome to <span className="font-bold">ThailandPrestige,</span>  <br /> the premium gateway for foreign investors seeking exclusive real estate in <span className="font-bold">Thailand and Australia.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-xl">
              We specialize in properties starting from <span className="font-bold">5 million THB in Thailand</span>  and  <span className="font-bold">AUD 500,000 in Australia</span>, offering <span className="font-bold">private sales</span> and <span className="font-bold">end-to-end services.</span>
            </p> 
              <p className="text-muted-foreground leading-relaxed mb-6 text-xl">
              Our mission is to connect global investors with trusted opportunities—whether it’s a luxury condo in Bangkok, a beachfront villa in Phuket, or a modern apartment in Melbourne.
            </p> 
                <p className="text-muted-foreground leading-relaxed mb-6 text-xl">
              <i>ThailandPrestige is proudly managed by <span className="font-bold">SPW Prestige Co., Ltd.</span></i> 
            </p> 
            {/* <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Read More
            </Button> */}
          </div>

          {/* Right image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/about/ab-1.jpg" alt="Office meeting" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/about/ab-2.jpg"
                  alt="Professional working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/about/ab-3.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/about/ab-4.jpg" alt="Professional woman" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
