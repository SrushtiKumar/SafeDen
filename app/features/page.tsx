import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowUp } from "lucide-react"

export default function Features() {
  return (
    <div className="font-poppins">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
          <img src="JJJJ.jpg" height={'50px'} width={'50px'}></img>
            <span className="ml-2 text-xl font-bold text-gray-800">SafeDen</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-purple-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-purple-500 transition">
              About
            </Link>
            <Link href="/features" className="text-purple-500 border-b-2 border-purple-500 transition">
              Features
            </Link>
            <Link href="/community" className="text-gray-800 hover:text-purple-500 transition">
              Community
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-purple-500 transition">
              Contact
            </Link>
          </div>
          <Link
            href="/download"
            className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition shadow-md hover:shadow-lg"
          >
            Download
          </Link>
          <button id="mobile-menu-button" className="md:hidden text-gray-800">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-white absolute w-full left-0 py-4 shadow-md">
          <div className="container mx-auto flex flex-col space-y-4 px-6">
            <Link href="/" className="text-gray-800 hover:text-purple-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-purple-500 transition">
              About
            </Link>
            <Link href="/features" className="text-purple-500 transition">
              Features
            </Link>
            <Link href="/community" className="text-gray-800 hover:text-purple-500 transition">
              Community
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-purple-500 transition">
              Contact
            </Link>
            <Link
              href="/download"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition text-center shadow-md"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              SafeDen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Features
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how SafeDen is revolutionizing women's safety with our innovative features.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Map Section */}
      <section id="safety-map" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Safety Map with Dynamic Risk Assessment
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-8">
                Our real-time safety mapping combines official crime data, user reports, and infrastructure quality to
                provide you with the safest routes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Real-time safety mapping with official crime data</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Safety scores that update based on time of day</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Machine learning algorithm that predicts safety variations</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <Image
                src="10.jpg"
                alt="SafeDen Safety Map"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Guardian Section */}
      <section id="journey-guardian" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Journey Guardian</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-8">
                Our Journey Guardian feature ensures your safety throughout your commute with pre-journey planning, live
                tracking, and smart deviation detection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Pre-journey planning with expected routes and arrival times</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Live journey tracking with automated check-ins</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    Voice-activated safety mode that continuously monitors surroundings
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <Image
                src="5.JPG"
                alt="Journey Guardian Feature"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Verification Section */}
      <section id="community-verification" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Community Verification System</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-8">
                Our community verification system creates a network of trusted SafeSpots and verified volunteers to
                ensure your safety.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Network of verified "SafeSpots" (businesses, community centers)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Community escort service with background-checked volunteers</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Reputation system for businesses and public spaces</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <Image
                src="8.JPG"
                alt="Community Verification System"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section id="emergency-response" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Multi-Modal Emergency Response</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-8">
                Our emergency response system provides multiple options for getting help when you need it most.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Customizable panic system with varying alert levels</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">One-tap emergency services connection with location sharing</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Contextual emergency responses that adapt based on situation</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <Image
                src="11.jpg"
                alt="Emergency Response System"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Safety Section */}
      <section id="transport-safety" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Transport Safety Integration</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-8">
                Our transport safety integration ensures your safety across all modes of transportation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Integration with ride-sharing APIs for continuous tracking</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Verification of public transport routes and operators</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={16} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Driver/vehicle verification system for app-based transportation</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <Image
                src="12.JPG"
                alt="Transport Safety Integration"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up">Ready to Experience Safer Commutes?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.1s" }}>
            Download SafeDen today and join thousands of women who are already experiencing safer commutes.
          </p>
          <Link
            href="/download"
            className="inline-block bg-white hover:bg-gray-100 text-purple-500 px-8 py-4 rounded-xl transition shadow-md hover:shadow-lg transform hover:-translate-y-1 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Download Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
              <img src="JJJJ.jpg" height={'35px'} width={'35px'}></img>
                <span className="ml-2 text-xl font-bold">SafeDen</span>
              </div>
              <p className="text-gray-400">
                Making daily commutes safer for women through community-driven data and real-time monitoring.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-8 8m0-8l8 8" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-8 8m0-8l8 8" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-8 8m0-8l8 8" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-8 8m0-8l8 8" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-white transition">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-white transition">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-white transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} SafeDen. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition mx-3">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition mx-3">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition mx-3">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 z-50"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  )
}

// Logo Components
function SafeDenLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 10C24.536 10 12 22.536 12 38C12 53.464 24.536 66 40 66C55.464 66 68 53.464 68 38C68 22.536 55.464 10 40 10Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M40 18C28.954 18 20 26.954 20 38C20 49.046 28.954 58 40 58C51.046 58 60 49.046 60 38C60 26.954 51.046 18 40 18Z"
        fill="white"
      />
      <path
        d="M40 26C33.373 26 28 31.373 28 38C28 44.627 33.373 50 40 50C46.627 50 52 44.627 52 38C52 31.373 46.627 26 40 26Z"
        fill="url(#paint1_linear)"
      />
      <path d="M80 30H84.5L92 50H87L85.5 45H79L77.5 50H72.5L80 30ZM84 41L82.5 36.5L81 41H84Z" fill="#333333" />
      <path d="M94 30H99V45.5H106V50H94V30Z" fill="#333333" />
      <path d="M108 30H122V34.5H113V37.5H120V42H113V45.5H122V50H108V30Z" fill="#333333" />
      <path d="M124 30H129V42.5L135.5 30H140.5V50H135.5V37.5L129 50H124V30Z" fill="#333333" />
      <path d="M143 30H148V50H143V30Z" fill="#333333" />
      <path d="M151 30H156V45.5H163V50H151V30Z" fill="#333333" />
      <defs>
        <linearGradient id="paint0_linear" x1="12" y1="38" x2="68" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="28" y1="38" x2="52" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SafeDenLogoWhite({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 10C24.536 10 12 22.536 12 38C12 53.464 24.536 66 40 66C55.464 66 68 53.464 68 38C68 22.536 55.464 10 40 10Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M40 18C28.954 18 20 26.954 20 38C20 49.046 28.954 58 40 58C51.046 58 60 49.046 60 38C60 26.954 51.046 18 40 18Z"
        fill="white"
      />
      <path
        d="M40 26C33.373 26 28 31.373 28 38C28 44.627 33.373 50 40 50C46.627 50 52 44.627 52 38C52 31.373 46.627 26 40 26Z"
        fill="url(#paint1_linear)"
      />
      <path d="M80 30H84.5L92 50H87L85.5 45H79L77.5 50H72.5L80 30ZM84 41L82.5 36.5L81 41H84Z" fill="white" />
      <path d="M94 30H99V45.5H106V50H94V30Z" fill="white" />
      <path d="M108 30H122V34.5H113V37.5H120V42H113V45.5H122V50H108V30Z" fill="white" />
      <path d="M124 30H129V42.5L135.5 30H140.5V50H135.5V37.5L129 50H124V30Z" fill="white" />
      <path d="M143 30H148V50H143V30Z" fill="white" />
      <path d="M151 30H156V45.5H163V50H151V30Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear" x1="12" y1="38" x2="68" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="28" y1="38" x2="52" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}

