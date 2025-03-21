"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Award, ChevronDown, ChevronRight, Menu, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FreePalestineBadge } from "./free-palestine-badge"

// Update the navItems array to remove the certificate section
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    dropdown: true,
    items: [
      { name: "About Us", path: "/about" },
      { name: "Committee", path: "/committee" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    name: "Activities",
    dropdown: true,
    items: [
      { name: "Events", path: "/events" },
      { name: "Workshops", path: "/workshops" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
  {
    name: "Faculty",
    dropdown: true,
    items: [
      { name: "Directory", path: "/faculty" },
      { name: "Research", path: "/faculty/research" },
      { name: "Publications", path: "/faculty/publications" },
      { name: "Dashboard", path: "/faculty/dashboard" },
    ],
  },
  {
    name: "Alumni",
    dropdown: true,
    items: [
      { name: "Directory", path: "/alumni" },
      { name: "Events", path: "/alumni/events" },
      { name: "Dashboard", path: "/alumni/dashboard" },
    ],
  },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const isDropdownOpen = (name: string) => openDropdowns.includes(name)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Award className="h-6 w-6" />
              <span className="font-bold text-xl hidden md:inline-block">ECE Club</span>
              <span className="font-bold text-xl md:hidden">ECE</span>
            </Link>
            <div className="hidden sm:block">
              <FreePalestineBadge />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 text-sm font-medium">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.path} asChild>
                        <Link
                          href={subItem.path}
                          className={cn(pathname === subItem.path ? "text-primary" : "text-muted-foreground")}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
                    pathname === item.path ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/register">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user/achievements">My Achievements</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
          </nav>

          <div className="flex md:hidden items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/register">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user/profile">My Profile</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu with collapsible sections */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="mb-3">
              <FreePalestineBadge />
            </div>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left font-medium text-sm p-2 rounded-md hover:bg-muted"
                    >
                      <span>{item.name}</span>
                      {isDropdownOpen(item.name) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>

                    {isDropdownOpen(item.name) && (
                      <div className="pl-4 space-y-2 border-l-2 border-muted">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={cn(
                              "text-sm font-medium transition-colors hover:text-primary block p-2 rounded-md",
                              pathname === subItem.path ? "bg-muted text-primary" : "text-muted-foreground",
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                      pathname === item.path ? "bg-muted text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

