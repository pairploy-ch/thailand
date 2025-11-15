import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-balance leading-tight">
              Discover Thailand’s Most Exclusive Real Estate with
              ThailandPrestige.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-xl">
              At ThailandPrestige, we connect international buyers with top-tier
              properties across Thailand—starting from 5 million THB and
              carefully curated for quality, value, and long-term growth.
            </p>{" "}
            <br />
            <p>
              From luxury condos in Bangkok, high-return investment units in
              Pattaya, and beachfront villas in Phuket, to premium homes in
              Chiang Mai and Khon Kaen—we source only the best.
            </p>
            <br />
            <br />
            We offer: <br />
            • Private sales access <br />
            • One-on-one investment consultations <br />
            • Full end-to-end services for foreign buyers <br />
            • Trusted, transparent guidance throughout the entire purchase
            process <br />
            <br />
            ThailandPrestige, managed by SPW Prestige Co., Ltd., is your
            dedicated partner for secure, seamless, and profitable property
            investment in Thailand.
          </div>

          {/* Right image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/about/ab-1.jpg"
                  alt="Office meeting"
                  className="w-full h-full object-cover"
                />
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
                <img
                  src="/about/ab-3.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/about/ab-4.jpg"
                  alt="Professional woman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
