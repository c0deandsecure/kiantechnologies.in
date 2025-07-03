import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsApp from './AboutUs/AboutUsApp';
import ECCouncil from './home/ECCouncil';
import Contact from './home/Contact';
import Courses from './home/Courses';
import BestEthical from './home/BestEthical';
import Internship from './home/Intership';
import EthicalHackingCourse from './home/EthicalHackingCourse';
import LatestSection from './home/LatestSection';
import PartnersSection from './home/PartnersSection';
import WhyChooseUs from './home/WhyChooseUs';
import Highlights from './home/Highlights';
import ContactUs from './home/ContactUs';
import Footer from './home/Footer';
import Header from './home/Header';
import CoursesApp from './Courses/CoursesApp';
import ContactUsApp from './Contact Us/ContactUsApp';
import RegisterApp from './Register/RegisterApp';
import PagesApp from './PagesSection/PagesApp';
import BlogApp from './blog/blogApp'
import BlogPost from './blog/BlogPost';
import AdminApp from './Admin/AdminApp';


function HomePage() {
  return (
    <>
      <Header />
      <ECCouncil />
      <Contact />
      <Courses />
      <BestEthical />
      <Internship />
      <EthicalHackingCourse />
      <LatestSection />
      <PartnersSection />
      <WhyChooseUs />
      <Highlights />
      <ContactUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsApp />} />
        <Route path="/courses" element={<CoursesApp />} />
        <Route path="/contact" element={<ContactUsApp />} />
        <Route path="/register" element={<RegisterApp />} />
        <Route path="/pages" element={<PagesApp />} />
        <Route path="/blog" element={<BlogApp />} />
        <Route path="blog/post/:slug" element={<BlogPost />} />
        <Route path='/admin/*' element={<AdminApp/>}/>


        
      </Routes>
    </Router>
  );
}

export default App;
