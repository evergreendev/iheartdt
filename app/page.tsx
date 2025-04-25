import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <Image
          src="/Downtown-Fall-Images-15.jpg"
          alt="Downtown Rapid City"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="relative z-10  mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">I ❤️ Downtown Rapid City</h1>
          <h2 className="text-2xl md:text-3xl mb-8">Celebrate the heart of Rapid City and the people who make it truly special.</h2>
          <div className="bg-black/50 w-full p-4 mb-12">
            <p className="max-w-3xl mx-auto mb-10 text-lg">
              Downtown Rapid City is more than just a place — it’s a vibrant community filled with unique businesses, welcoming faces, and countless reasons to love it. Our “I ❤️ Downtown Rapid City” campaign celebrates the heart of our city and the people who make it truly special.
            </p>
            <p className="max-w-3xl mx-auto mb-10 text-lg">
              Whether you’re a loyal local, a visitor exploring for the first time, or a business owner, this campaign invites you to share what you love most about downtown Rapid City. From charming boutiques and cozy coffee shops to delicious restaurants and unforgettable events, there’s something here for everyone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#merchants"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Meet the Merchants
            </a>
            <a
              href="#share"
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-full transition-colors"
            >
              Share the Love
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Merchants Video Series */}
      <section id="merchants" className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Meet the Merchants</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Hear why local business owners ❤️ being part of Downtown Rapid City. Check out our Meet the Merchants video series to discover the stories and passion behind the businesses that make our downtown a must-visit destination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video thumbnails would go here - using images as placeholders */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/IMG_5322.jpg"
                  alt="Merchant 1"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Local Boutique Owner</h3>
                <p>Discover why this boutique owner loves being part of Downtown Rapid City's vibrant community.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/IMG_8393.jpg"
                  alt="Merchant 2"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Restaurant Chef</h3>
                <p>Learn about the culinary inspiration behind one of Downtown Rapid City's favorite restaurants.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/IMG_8400.jpg"
                  alt="Merchant 3"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Art Gallery Owner</h3>
                <p>Explore the artistic side of Downtown Rapid City through the eyes of a local gallery owner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Engagement & Community Participation */}
      <section id="share" className="py-20 bg-gray-100 text-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Share the Love</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Love Downtown Rapid City? Join the fun by sharing your experiences and pride with our community!
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">How to Join the Fun:</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❤️</span>
                <span><strong>Visit Downtown Businesses:</strong> Support your favorite local spots and discover new gems!</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❤️</span>
                <span><strong>Share the Love:</strong> Post on social media using #IHeartDowntownRC and let everyone know what makes our downtown unique.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❤️</span>
                <span><strong>Spot the Stickers:</strong> Look for "I ❤️ Downtown Rapid City" stickers and banners around town—snap a photo and share your pride!</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❤️</span>
                <span><strong>Be a Part of the Story:</strong> Check out our "Meet the Merchants" video series to hear why local business owners love being part of downtown Rapid City.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❤️</span>
                <span><strong>Stay Tuned:</strong> Watch for more ways to share your love for downtown Rapid City on our website and social media.</span>
              </li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors"
              >
                Submit Your Story
              </a>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Community Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/IMG_5267.jpg" alt="Community Photo 1" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/IMG_5334.jpg" alt="Community Photo 2" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/IMG_6343.jpeg" alt="Community Photo 3" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/IMG_6655.jpeg" alt="Community Photo 4" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/IMG_8390.jpg" alt="Community Photo 5" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/IMG_8611-Enhanced-NR (1).jpg" alt="Community Photo 6" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/Downtown-Fall-Images-18.jpg" alt="Community Photo 7" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/Downtown-Fall-Images-19.jpg" alt="Community Photo 8" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Beat Newsletters */}
      <section className="py-20 bg-white text-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Downtown Beat</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Stay connected with the latest news, events, and highlights from the heart of Rapid City.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/Downtown-Fall-Images-16.jpg"
                  alt="Newsletter 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Spring 2025 Newsletter</h3>
                <p className="mb-4">Discover upcoming events, new business openings, and seasonal highlights in downtown Rapid City.</p>
                <a href="#" className="text-red-600 font-bold hover:underline">Read Newsletter →</a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/Downtown-Fall-Images-20.jpg"
                  alt="Newsletter 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Winter 2024 Newsletter</h3>
                <p className="mb-4">Look back at holiday celebrations and find out what's coming up in the new year for downtown Rapid City.</p>
                <a href="#" className="text-red-600 font-bold hover:underline">Read Newsletter →</a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/Sunset-Images-4.jpg"
                  alt="Newsletter 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fall 2024 Newsletter</h3>
                <p className="mb-4">Explore autumn activities, seasonal specials, and community events happening in downtown Rapid City.</p>
                <a href="#" className="text-red-600 font-bold hover:underline">Read Newsletter →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">I ❤️ Downtown Rapid City</h2>
              <p className="mt-2">Celebrate the heart of our city and the people who make it truly special.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400">Facebook</a>
              <a href="#" className="hover:text-red-400">Instagram</a>
              <a href="#" className="hover:text-red-400">Twitter</a>
              <a href="#" className="hover:text-red-400">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Downtown Rapid City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
