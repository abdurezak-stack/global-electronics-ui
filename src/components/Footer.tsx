import React from 'react';
import { Globe, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      title: 'Get to Know Us',
      links: ['Careers', 'Blog', 'About EXPRESS', 'Investor Relations', 'EXPRESS Devices', 'EXPRESS Science']
    },
    {
      title: 'Make Money with Us',
      links: ['Sell products on EXPRESS', 'Sell on EXPRESS Business', 'Sell apps on EXPRESS', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us']
    },
    {
      title: 'EXPRESS Payment Products',
      links: ['EXPRESS Business Card', 'Shop with Points', 'Reload Your Balance', 'EXPRESS Currency Converter']
    },
    {
      title: 'Let Us Help You',
      links: ['EXPRESS and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Manage Your Content and Devices', 'EXPRESS Assistant', 'Help']
    }
  ];

  return (
    <footer className="w-full mt-10 bg-[#232f3e] text-white">
      <button 
        onClick={scrollToTop}
        className="w-full py-4 bg-[#37475a] hover:bg-[#485769] transition-colors text-sm font-bold flex items-center justify-center gap-2"
      >
        <ChevronUp size={16} /> Back to top
      </button>

      <div className="max-w-[1000px] mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold mb-4 text-base">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-300 hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 py-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-10">
          <span className="text-2xl font-bold">EXPRESS</span>
          <div className="flex items-center gap-2 border border-gray-500 rounded px-3 py-1 text-sm text-gray-300">
            <Globe size={14} />
            <span>English</span>
          </div>
          <div className="flex items-center gap-2 border border-gray-500 rounded px-3 py-1 text-sm text-gray-300">
            <span>$ USD - U.S. Dollar</span>
          </div>
        </div>
      </div>

      <div className="bg-[#131a22] py-8 px-4 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-xs mb-4">
          <a href="#" className="hover:underline">Conditions of Use</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Your Ads Privacy Choices</a>
        </div>
        <p className="text-xs text-gray-400">© 1996-2024, Express.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;