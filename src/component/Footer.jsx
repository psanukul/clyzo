import { Facebook, Instagram, Twitter, Linkedin, Youtube,  ArrowUpRight  } from "lucide-react"
import logo from '../assets/flogo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Search Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Clyzo"
                  className="opacity-80 h-8"
                />
              </a>
            </div>
            <div className="mb-6">
              <p className="text-xs text-white mb-2">Search & find specific products, raw materials</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white border-0 text-gray-700 text-sm rounded-sm pl-3 pr-10 py-1 w-full focus:outline-none focus:ring-0 focus:border-gray-600"
                />
                <ArrowUpRight className="absolute right-3 bg-gray-500 rounded-full top-1/2 transform -translate-y-1/2 h-4 w-4 text-white"/>
              </div>
            </div>
          </div>

          {/* clyzo Column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Clyzo</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  DUNS Number: 84-159-7637
                </a>
              </li>
              
            </ul>
          </div>
          {/* categories column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Directory
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Functions
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Dosage Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Labeling Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Value Added Services Column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Value Added Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  INSTANT Quotes
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Billings
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Fillbuy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Customer Review
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Become Supplier
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold uppercase mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Cancellation & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-white">
                  Grievances
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          <div className="text-xs text-gray-400">© 2023 Clyzo, Inc</div>
        </div>
      </div>
    </footer>
  )
}

