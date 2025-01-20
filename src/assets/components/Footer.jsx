import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Jobs', url: '#jobs' },
    { name: 'Contact', url: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '#privacy' },
    { name: 'Terms of Service', url: '#terms' },
    { name: 'Cookie Policy', url: '#cookies' }
  ];

  const contactInfo = [
    { name: 'Email', value: 'support@jobportal.com' },
    { name: 'Phone', value: '+ (254) 769275595' },
    { name: 'Address', value: 'Tudor Career Street, Job City' }
  ];

  return (
    <footer className="bg-blue-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Job Portal</h3>
          <p className="text-gray-300">
            Your trusted platform for finding the best career opportunities.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-2xl hover:text-blue-300 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-300 cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-blue-300 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-blue-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            {contactInfo.map((info, index) => (
              <li key={index} className="text-gray-300">
                <strong>{info.name}:</strong> {info.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-8 pt-6 text-center">
        <p className="text-gray-300">
          © {currentYear} Job Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;