import React from 'react';

const JobApplicationSection = () => {
  const steps = [
    {
      icon: '📋',
      title: 'Review Job Requirements',
      description: 'Carefully read and understand the job description, qualifications, and responsibilities.'
    },
    {
      icon: '👔',
      title: 'Prepare Your Application',
      description: 'Update your resume, craft a compelling cover letter, and gather all necessary documents.'
    },
    {
      icon: '📧',
      title: 'Submit Application',
      description: 'Apply through our online portal, ensuring all required information is complete and accurate.'
    },
    {
      icon: '✅',
      title: 'Follow Up',
      description: 'Track your application status and be prepared for potential interviews.'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          How to Apply for Jobs
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Additional Application Tips
          </h3>
          <ul className="max-w-2xl mx-auto text-gray-700 space-y-3">
            <li>• Tailor your resume to each specific job application</li>
            <li>• Use keywords from the job description</li>
            <li>• Proofread all application materials</li>
            <li>• Prepare for potential video or in-person interviews</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobApplicationSection;