// PublicationsInsights.js

import BackgroundNav from './BackgroundNav';

import BooksSection from './BooksSection';
import BlogsSection from './BlogsSection';
import ClubSection from './ClubSection';
import { Accordion } from '@material-tailwind/react';
import CertificateSection from './Certificatesection';


const PublicationsInsights = () => {
  return (
    <div className="">
      <BackgroundNav />
     {/* <Accordion/> */}
      <div id='books'>
        <BooksSection/>
      </div>
      <div id="blogs">
       <BlogsSection/>
      </div>
      <section id="activities">
       <ClubSection/>
      </section>
      <section id="certifications">
        <CertificateSection/>
      </section>
    </div>
  );
};

export default PublicationsInsights;
