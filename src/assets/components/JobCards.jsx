import React from 'react';

const jobListings = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    location: 'Remote',
    description: 'Looking for a skilled Frontend Developer with React experience to join our team.',
  },
  {
    title: 'React Developer',
    company: 'Innovatech',
    location: 'Nairobi, Kenya',
    description: 'Join our dynamic team as a React Developer and work on exciting projects.',
  },
  {
    title: 'Software Engineer',
    company: 'CodeCrafters',
    location: 'San Francisco, CA',
    description: 'Seeking a Software Engineer with strong React skills to develop innovative applications.',
  },
  {
    title: 'Full Stack Developer',
    company: 'WebWorks',
    location: 'Mombasa, TX',
    description: 'Full Stack Developer needed with expertise in React and Node.js.',
  },
];

function JobCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16 py-12">
      {jobListings.map((job, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-800 mb-2">{job.title}</h2>
          <h3 className="text-lg text-gray-600 mb-1">{job.company}</h3>
          <p className="text-gray-500 mb-4">{job.location}</p>
          <p className="text-gray-700 mb-6">{job.description}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobCards;