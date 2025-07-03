import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const courseAdvantages = [
  {
    icon: 'flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler',
    title: 'The Power Of Education.',
    description: 'Empowering students with in-depth knowledge, practical skills, and critical thinking to thrive in the ever-evolving tech landscape.',
  },
  {
    icon: 'flaticon-clipboard-with-pencil',
    title: 'Best Online Education.',
    description: 'Offering top-tier, flexible online courses that blend expert instruction with hands-on experience, accessible anytime, anywhere.',
  },
  {
    icon: 'flaticon-list',
    title: 'Education For All Student.',
    description: 'Providing inclusive, affordable education tailored to meet the needs of diverse learners, ensuring everyone has the opportunity to excel.',
  },
];

const courseCategories = [
  { icon: 'flaticon-technology', title: 'EC-Council' },
  { icon: 'flaticon-app-store', title: 'Comptia' },
  { icon: 'flaticon-artist-tools', title: 'CISCO' },
  { icon: 'flaticon-business', title: 'Operating System' },
  { icon: 'flaticon-dna', title: 'Scripting Language' },
  { icon: 'flaticon-cogwheel', title: 'Cloud Computing' },
];

const AboutUsAllPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="px-4 md:px-12 py-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
          <img src="assets/img/about/class1.png" alt="" className="rounded-lg shadow-md col-span-2" />
          <img src="assets/img/about/class2.png" alt="" className="rounded-lg shadow-md" />
          <img src="assets/img/about/class3.png" alt="" className="rounded-lg shadow-md" />
        </div>

        {/* About Content */}
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            We Are <span className="text-blue-600">Best Course</span> in Bhilai Chhattishgarh
          </h2>
          <p className="text-gray-600 mb-4">
            Kian Technologies is at the forefront of cybersecurity education, dedicated to crafting the future leaders in digital security through comprehensive training programs...
          </p>
          <p className="text-gray-600 mb-4">
            Our institute stands out for its hands-on approach, where students engage directly with the latest tools and technologies under the guidance of seasoned industry professionals...
          </p>
          <p className="text-gray-600">
            Our mission is to empower aspiring cybersecurity experts with cutting-edge skills and profound knowledge...
          </p>
        </div>
      </div>

      {/* Course Advantages */}
      <div className="mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-left text-gray-800">
          Kian Technologies’s Course <span className="text-blue-600">Advantages</span>
        </h2>
        <Splide options={{ type: 'loop', perPage: 3, gap: '1rem', autoplay: true, breakpoints: { 768: { perPage: 1 } } }}>
          {courseAdvantages.map((adv, idx) => (
            <SplideSlide key={idx}>
              <div className="p-6 bg-gray-100 rounded-xl shadow-md h-full">
                <div className="text-4xl mb-4 text-blue-600">
                  <i className={adv.icon}></i>
                </div>
                <h3 className="font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Course Categories */}
      <div className="mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-left text-gray-800">
          Course <span className="text-blue-600">Categories</span>
        </h2>
        <Splide options={{ type: 'loop', perPage: 4, gap: '1rem', autoplay: true, breakpoints: { 768: { perPage: 2 } } }}>
          {courseCategories.map((cat, idx) => (
            <SplideSlide key={idx}>
              <div className="p-6 bg-white border rounded-lg shadow-md text-center">
                <div className="text-4xl text-blue-600 mb-3">
                  <i className={cat.icon}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-700">{cat.title}</h4>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default AboutUsAllPage;
