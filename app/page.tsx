import Image from "next/image"
import Link from "next/link"
import { MapPin, Shield, Users, CheckCircle, Star, ArrowUp } from "lucide-react"

export default function Home() {
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
            <Link href="/features" className="text-gray-800 hover:text-purple-500 transition">
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
            <Link href="/features" className="text-gray-800 hover:text-purple-500 transition">
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
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Discover the Path to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Safer Commutes
              </span>{" "}
              with SafeDen
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              SafeDen is a cutting-edge women's safety platform that empowers you to navigate the city with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/download"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/features"
                className="border border-gray-300 hover:border-purple-500 text-gray-800 hover:text-purple-500 px-8 py-3 rounded-full transition text-center shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
            <Image
              src="1.JPG"
              alt="Women using SafeDen app"
              width={600}
              height={500}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About SafeDen</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our all-in-one platform is designed specifically to make daily commutes safer for women through
              community-driven data and real-time monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Safety Map</h3>
              <p className="text-gray-600">
                Real-time safety mapping with dynamic risk assessment based on time of day, recent incidents, and crowd
                density.
              </p>
              <Link
                href="/features#safety-map"
                className="mt-6 inline-block text-purple-500 hover:text-purple-600 transition"
              >
                Learn more →
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Journey Guardian</h3>
              <p className="text-gray-600">
                Pre-journey planning with live tracking, automated check-ins, and smart deviation detection for your
                safety.
              </p>
              <Link
                href="/features#journey-guardian"
                className="mt-6 inline-block text-purple-500 hover:text-purple-600 transition"
              >
                Learn more →
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community Verification</h3>
              <p className="text-gray-600">
                Network of verified "SafeSpots" and community escort service with background-checked volunteers.
              </p>
              <Link
                href="/features#community-verification"
                className="mt-6 inline-block text-purple-500 hover:text-purple-600 transition"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Revolutionize Your Daily Commute with SafeDen
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-8">
                SafeDen is a game-changer for women's safety, offering a comprehensive solution that combines advanced
                technology, community engagement, and emergency response.
              </p>
              <Link
                href="/features"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Features
              </Link>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <div className="relative">
                <Image
                  src="map.jpg"
                  alt="SafeDen Safety Map"
                  width={600}
                  height={450}
                  className="w-full rounded-xl shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium">High Safety</span>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm font-medium">Moderate Safety</span>
                  </div>
                </div>
                <div className="absolute bottom-1/4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm font-medium">Low Safety</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowered Journeys Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 fade-in-left">
                <h2 className="text-3xl font-bold text-white mb-6">Empowered Journeys</h2>
                <p className="text-white text-lg mb-8">
                  "Every woman deserves to feel safe and confident during her daily commute. SafeDen is committed to
                  making this a reality."
                </p>
                <Link
                  href="/about"
                  className="bg-white text-purple-500 hover:bg-gray-100 px-8 py-3 rounded-full transition inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </div>
              <div className="md:w-1/2 fade-in-right">
                <Image
                  src="2.JPG"
                  alt="Woman using SafeDen"
                  width={600}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Verification Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Community Verification</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              SafeDen's community verification system ensures that every user is in a verified network.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0">
            <div className="md:w-1/2 fade-in-left">
              <Image
                src="4.JPG"
                alt="SafeDen Community Map"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 fade-in-right">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={24} />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Verified SafeSpots</h3>
                    <p className="text-gray-600">
                      Network of businesses and community centers that have been verified as safe spaces.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users className="text-purple-500" size={24} />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Community Escorts</h3>
                    <p className="text-gray-600">
                      Request verified volunteers with background checks to accompany you for short distances.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Star className="text-purple-500" size={24} />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Reputation System</h3>
                    <p className="text-gray-600">
                      Businesses and public spaces are rated based on verified user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up">Download SafeDen Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.1s" }}>
            Join thousands of women who are already experiencing safer commutes with SafeDen
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="#"
              className="flex items-center justify-center bg-white hover:bg-gray-100 text-purple-500 px-8 py-4 rounded-xl transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-8-8m8 8l8-8" />
              </svg>
              <span>App Store</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center bg-white hover:bg-gray-100 text-purple-500 px-8 py-4 rounded-xl transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Google Play Store</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center bg-white hover:bg-gray-100 text-purple-500 px-8 py-4 rounded-xl transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span>Web App Version</span>
            </Link>
          </div>
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

