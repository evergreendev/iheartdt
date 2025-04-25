"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video 
              controls 
              autoPlay
              className="w-full aspect-video"
            >
              <source src={videoSrc} type={videoSrc.endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'} />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
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
          <div className="flex justify-center mb-6">
            <Image
              src="/Downtown Rapid City_MSS-Vertical-OneColor-Light.png"
              alt="Downtown Rapid City Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">I <span className="text-blue-600">💙</span> Downtown Rapid City</h1>
          <h2 className="text-2xl md:text-3xl mb-8">Celebrate the heart of Rapid City and the people who make it truly special.</h2>
          <div className="bg-black/50 w-full p-4 mb-12">
            <p className="max-w-3xl mx-auto text-lg">
              Welcome to Downtown Rapid City — where downtown is more than just a place, it’s a vibrant community filled with unique businesses, welcoming faces, and countless reasons to love it. Whether you’re a local, a visitor, or a business owner, this campaign invites you to discover, share, and celebrate what makes our downtown so special. From charming boutiques and cozy coffee shops to delicious restaurants and unforgettable events, there’s something here for everyone. Join us in spotlighting the heart of Rapid City!            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#merchants"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Meet the Merchants
            </a>
            <a
              href="#share"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full transition-colors"
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
            Hear why local business owners <span className="text-blue-600">💙</span> being part of Downtown Rapid City. Check out our Meet the Merchants video series to discover the stories and passion behind the businesses that make our downtown a must-visit destination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* TinderBox */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div 
                className="relative aspect-video cursor-pointer group"
                onClick={() => openModal("/meet-the-merchants/tinderbox/MTM_TinderBox_Final.mp4")}
              >
                <Image 
                  src="/meet-the-merchants/tinderbox/TinderBox_2.png"
                  alt="TinderBox Video"
                  width={720}
                  height={1280}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Victoria's Garden */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div 
                className="relative aspect-video cursor-pointer group"
                onClick={() => openModal("/meet-the-merchants/victorias-garden/VG_MTM_2.mov")}
              >
                <Image 
                  src="/meet-the-merchants/victorias-garden/VG_3.png"
                  alt="Victoria's Garden Video"
                  width={720}
                  height={1280}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
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
                <span className="text-blue-600 mr-2">💙</span>
                <span><strong>Visit Downtown Businesses:</strong> Support your favorite local spots and discover new gems!</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💙</span>
                <span><strong>Share the Love:</strong> Post on social media using #IHeartDowntownRC and let everyone know what makes our downtown unique.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💙</span>
                <span><strong>Spot the Stickers:</strong> Look for &#34;I <span className="text-blue-600">💙</span> Downtown Rapid City&#34; stickers and banners around town—snap a photo and share your pride!</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💙</span>
                <span><strong>Be a Part of the Story:</strong> Check out our &#34;Meet the Merchants&#34; video series to hear why local business owners love being part of downtown Rapid City.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💙</span>
                <span><strong>Stay Tuned:</strong> Watch for more ways to share your love for downtown Rapid City on our website and social media.</span>
              </li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors"
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
                <a href="#" className="text-blue-600 font-bold hover:underline">Read Newsletter →</a>
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
                <p className="mb-4">Look back at holiday celebrations and find out what&#39;s coming up in the new year for downtown Rapid City.</p>
                <a href="#" className="text-blue-600 font-bold hover:underline">Read Newsletter →</a>
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
                <a href="#" className="text-blue-600 font-bold hover:underline">Read Newsletter →</a>
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
              <div className="flex items-center mb-4">
                <Image
                  src="/Downtown Rapid City_MSS-Vertical-OneColor-Light.png"
                  alt="Downtown Rapid City Logo"
                  width={100}
                  height={100}
                  className="object-contain mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold">I <span className="text-blue-600">💙</span> Downtown Rapid City</h2>
                  <p className="mt-2">Celebrate the heart of our city and the people who make it truly special.</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Contact Us</a>
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
