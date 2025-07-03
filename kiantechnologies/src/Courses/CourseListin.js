import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './CourseListing.css';

const CourseListing = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const coursesData = [
    {
      id: 1,
      title: 'Certified Ethical Hacking (CEH)',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      provider: 'EC-Council',
      students: '77 Students',
      duration: '4 Months',
      price: '$120.25',
      starts: '04-11-2024',
      category: 'IT Security',
      popularity: 95,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'IT Security and Ethical Hacking',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      provider: 'CISCO',
      students: '96 Students',
      duration: '4 Months',
      price: '$120.25',
      starts: '04-11-2024',
      category: 'IT Security',
      popularity: 88,
      rating: 4.6,
    },
    {
      id: 3,
      title: 'Computer Hacking Forensic Investigator (CHFI)',
      image: 'https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      provider: 'EC-Council',
      students: '20 Students',
      duration: '3 Months',
      price: '$110.50',
      starts: '05-01-2024',
      category: 'Forensics',
      popularity: 82,
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Linux Operating System',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      provider: 'Linux Foundation',
      students: '120 Students',
      duration: '2 Months',
      price: '$90.00',
      starts: '04-11-2024',
      category: 'Operating Systems',
      popularity: 78,
      rating: 4.7,
    },
    {
      id: 5,
      title: 'Advanced Penetration Testing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      provider: 'Offensive Security',
      students: '65 Students',
      duration: '6 Weeks',
      price: '$150.00',
      starts: '05-15-2024',
      category: 'IT Security',
      popularity: 90,
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Network Security Fundamentals',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      provider: 'CISCO',
      students: '110 Students',
      duration: '8 Weeks',
      price: '$95.75',
      starts: '04-01-2024',
      category: 'Networking',
      popularity: 85,
      rating: 4.4,
    },
  ];

  const filteredCourses = coursesData
    .filter((course) =>
      category === 'All' || course.category === category
    )
    .filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="course-listing">
      <div className="controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="All">All Categories</option>
          <option value="IT Security">IT Security</option>
          <option value="Forensics">Forensics</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Networking">Networking</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="popularity">Sort by Popularity</option>
          <option value="rating">Sort by Rating</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
