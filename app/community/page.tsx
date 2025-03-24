import Image from "next/image"
import Link from "next/link"
import { Users, Star, MapPin, ArrowUp } from "lucide-react"

export default function Community() {
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
            <Link href="/community" className="text-purple-500 border-b-2 border-purple-500 transition">
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
            <Link href="/community" className="text-purple-500 transition">
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
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Community
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we can make commutes safer for women everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Community Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Community</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4"></div>
              <p className="text-lg text-gray-600 mb-6">
                The SafeDen community is made up of users, volunteers, businesses, and safety advocates all working
                together to create safer commutes for women.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By joining our community, you become part of a movement dedicated to transforming how women navigate
                their daily journeys.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're using the app, volunteering as an escort, registering your business as a SafeSpot, or
                spreading awareness, every contribution makes a difference.
              </p>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 fade-in-right">
              <Image
                src="6.JPG"
                alt="SafeDen Community"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ways to Get Involved</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to contribute to the SafeDen community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Become a Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our network of verified volunteers who provide escort services for short distances in your
                community.
              </p>
              <Link
                href="/volunteer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition shadow-md hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Register as a SafeSpot</h3>
              <p className="text-gray-600 mb-6">
                Register your business or community center as a verified SafeSpot where women can seek assistance if
                needed.
              </p>
              <Link
                href="/safespot"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition shadow-md hover:shadow-lg"
              >
                Register Now
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Spread Awareness</h3>
              <p className="text-gray-600 mb-6">
                Help us spread the word about SafeDen and our mission to make commutes safer for women everywhere.
              </p>
              <Link
                href="/awareness"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition shadow-md hover:shadow-lg"
              >
                Get Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Community Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from members of our community about their experiences with SafeDen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="f1.JPG"
                  alt="Oh Ahen Yang"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">Emily Chen</h3>
                  <p className="text-purple-500">SafeDen User</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "SafeDen has completely transformed my evening commutes. I used to feel anxious taking the subway late
                at night, but now with the safety map and journey guardian features, I feel much more confident."
              </p>
              <div className="flex text-yellow-400">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="f2.JPG"
                  alt="Michael Johnson"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">Nobara Chan</h3>
                  <p className="text-purple-500">Community Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Being a SafeDen volunteer has been incredibly rewarding. I've met amazing people in my community and
                knowing that I'm helping women feel safer during their commutes is the best feeling."
              </p>
              <div className="flex text-yellow-400">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="f3.JPG"
                  alt="Sarah Rodriguez"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">Mai Zenin</h3>
                  <p className="text-purple-500">SafeSpot Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Registering my café as a SafeSpot was a no-brainer. We've always tried to create a welcoming
                environment, and now we're officially part of a network that helps women feel safe in our neighborhood."
              </p>
              <div className="flex text-yellow-400">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="f4.JPG"
                  alt="Jessica Kim"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">Becky Johnson</h3>
                  <p className="text-purple-500">Safety Advocate</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As someone who's been advocating for women's safety for years, I'm impressed by SafeDen's comprehensive
                approach. The combination of technology, community engagement, and emergency response is exactly what we
                need."
              </p>
              <div className="flex text-yellow-400">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Community Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for upcoming events and connect with other members of the SafeDen community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-500">15</span>
                  <span className="block text-purple-500">June</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">SafeDen Community Meetup</h3>
              <p className="text-gray-500 mb-4">San Francisco, CA</p>
              <p className="text-gray-600 mb-6">
                Join us for our monthly community meetup where you can connect with other SafeDen users, volunteers, and
                team members.
              </p>
              <Link href="/events/meetup" className="inline-block text-purple-500 hover:text-purple-600 transition">
                Learn More →
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-500">22</span>
                  <span className="block text-purple-500">June</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safety Workshop</h3>
              <p className="text-gray-500 mb-4">Online Webinar</p>
              <p className="text-gray-600 mb-6">
                Learn practical safety tips and strategies for navigating your daily commute with confidence in this
                interactive workshop.
              </p>
              <Link href="/events/workshop" className="inline-block text-purple-500 hover:text-purple-600 transition">
                Learn More →
              </Link>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition fade-in-up transform hover:-translate-y-2 duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-500">30</span>
                  <span className="block text-purple-500">June</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Volunteer Training</h3>
              <p className="text-gray-500 mb-4">Multiple Locations</p>
              <p className="text-gray-600 mb-6">
                Interested in becoming a SafeDen volunteer? Join our training session to learn about the role and
                responsibilities.
              </p>
              <Link href="/events/training" className="inline-block text-purple-500 hover:text-purple-600 transition">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up">Join the Movement</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "0.1s" }}>
            Together, we can create a world where every woman feels safe during her daily commute.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="/download"
              className="bg-white hover:bg-gray-100 text-purple-500 px-8 py-4 rounded-xl transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Download SafeDen
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white hover:bg-white hover:text-purple-500 text-white px-8 py-4 rounded-xl transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Become a Volunteer
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

