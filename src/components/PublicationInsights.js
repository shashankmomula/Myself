// PublicationsInsights.js

import BackgroundNav from "./BackgroundNav";
import BooksSection from "./BooksSection";
import BlogsSection from "./BlogsSection";
import ClubSection from "./ClubSection";
import CertificateSection from "./Certificatesection";
import Testimonials from "./TestimonalSection";

const PublicationsInsights = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 w-full">
      {/* Navigation */}
      <BackgroundNav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          {/* <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Publications & Insights
          </h2> */}
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my publications, blog posts, and professional journey
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          {/* Books Section */}
          <section id="books" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <BooksSection />
            </div>
          </section>

          {/* Blogs Section */}
          <section id="blogs" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <BlogsSection />
            </div>
          </section>

          {/* Club Activities Section */}
          <section id="activities" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <ClubSection />
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <Testimonials />
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <CertificateSection />
            </div>
          </section>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4 rounded-full shadow-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PublicationsInsights;
