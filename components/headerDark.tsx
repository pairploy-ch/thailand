import { MapPin, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      {/* <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>1889 NW 79st St, Asheville, NC 98726</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(800) 543 5432</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>inquiry@realhomes.com</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    {/* Main navigation */}
      <div className="mt-3 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                 <img src="/logo-tp.png" width={80} alt="Logo" />
              </div>
            </div>

          <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Home
              </a>
              <a
                href="/#about"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="/#realestate"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Real Estate
              </a>
              <a
                href="/#service"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Service
              </a>
              <a
                href="/#team"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Team
              </a>
              <a
                href="/#blog"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Blog
              </a>
              <a
                href="/#contact"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {/* <Button
                variant="ghost"
                size="icon"
                className= hover:text-accent hover:bg-white/10"
              >
                <User className="h-5 w-5" />
              </Button> */}
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
