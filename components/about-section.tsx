import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-balance leading-tight">
              Welcome to Thailand Prestige, a premium, executive-level real
              estate service dedicated to clients who value privacy, precision,
              and personalised attention.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-xl">
              As your Executive Private Real Estate Agent, our commitment is
              simple: to represent your interests with absolute discretion,
              refined professionalism, and deep market expertise.
            </p>{" "}
            <br />
            <p>
              Whether you are searching for a luxury residence, evaluating an
              investment property, or exploring Thailand’s emerging
              opportunities, Thailand Prestige delivers a seamless, high-touch
              experience from consultation to handover.
            </p>
            <br />
            Here, every client is treated as a long-term partner. Every
            transaction is managed with care. And every property is selected
            with purpose.
            <br />
            Thailand Prestige — Luxury guidance, trusted expertise, and a truly
            personalised real estate journey.
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
