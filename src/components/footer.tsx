import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-black"></div>
                <div className="h-6 w-6 rounded-full bg-white border border-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-green-600"></div>
                <div className="h-6 w-6 rounded-full bg-red-600"></div>
              </div>
              <span className="font-bold text-xl">ECE Club</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-600 via-white to-red-600 text-black rounded-full">
                #FreePalestine
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Department of Electronics and Communication Engineering
              <br />
              Hajee Mohammad Danesh Science and Technology University
              <br />
              Dinajpur, Bangladesh
            </p>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} ECE Club, HSTU. All rights reserved.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-sm text-muted-foreground hover:text-primary">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-sm text-muted-foreground hover:text-primary">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/faculty/research" className="text-sm text-muted-foreground hover:text-primary">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/faculty/publications" className="text-sm text-muted-foreground hover:text-primary">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-sm text-muted-foreground hover:text-primary">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Activities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-sm text-muted-foreground hover:text-primary">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/alumni/events" className="text-sm text-muted-foreground hover:text-primary">
                  Alumni Events
                </Link>
              </li>
              <li>
                <Link href="/esl" className="text-sm text-muted-foreground hover:text-primary">
                  ESL Resources
                </Link>
              </li>
              <li>
                <Link href="/developer" className="text-sm text-muted-foreground hover:text-primary">
                  Developer Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certificate" className="text-sm text-muted-foreground hover:text-primary">
                  Certificate Generator
                </Link>
              </li>
              <li>
                <Link href="/verify" className="text-sm text-muted-foreground hover:text-primary">
                  Verify Certificate
                </Link>
              </li>
              <li>
                <Link href="/user/profile" className="text-sm text-muted-foreground hover:text-primary">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/user/achievements" className="text-sm text-muted-foreground hover:text-primary">
                  My Achievements
                </Link>
              </li>
              <li>
                <Link href="/faculty/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                  Faculty Dashboard
                </Link>
              </li>
              <li>
                <Link href="/alumni/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                  Alumni Dashboard
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-primary">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="text-sm text-muted-foreground hover:text-primary">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            <Link href="/terms" className="hover:text-primary mr-4">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary ml-4">
              Sitemap
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Contact: ececlub@hstu.ac.bd | +880 1716-239606</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

