export function PartnersSection() {
  const partners = [
    { name: "Kyan", logo: "kyan" },
    { name: "Nirastate", logo: "nirastate" },
    { name: "Kanba", logo: "kanba" },
    { name: "Ztos", logo: "ztos" },
    { name: "Treva", logo: "treva" },
    { name: "Goldline", logo: "goldline" },
    { name: "Amara", logo: "amara" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            Trusted by <span className="text-accent font-semibold">2000+</span> businesses
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img
                src={`/.jpg?height=40&width=120&query=${partner.logo}+company+logo`}
                alt={partner.name}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
