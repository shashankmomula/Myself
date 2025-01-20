// PublicationsInsights.js

import BackgroundNav from "./BackgroundNav";

import BooksSection from "./BooksSection";
import BlogsSection from "./BlogsSection";
import ClubSection from "./ClubSection";
import { Accordion } from "@material-tailwind/react";
import CertificateSection from "./Certificatesection";
import Testimonials from "./TestimonalSection";

const PublicationsInsights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundNav />
      {/* <Accordion/> */}
      <div id="books">
        <BooksSection />
      </div>
      <div id="blogs">
        <BlogsSection />
      </div>
      <section id="activities">
        <ClubSection />
      </section>
      <section id="activities">
        <Testimonials />
      </section>
      <section id="certifications">
        <CertificateSection />
      </section>
    </div>
  );
};

export default PublicationsInsights;
