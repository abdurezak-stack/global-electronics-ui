import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const banners = [
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/laptop-banner-91d665a8-1771682321124.webp',
    title: 'New Season, New Power',
    subtitle: 'Upgrade to the latest Laptops with up to 30% off'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/mobile-phone-banner-471ac8c0-1771682320592.webp',
    title: 'Smartphones Reimagined',
    subtitle: 'Experience the future of mobile technology'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7b0c67-3d7e-4c33-a141-6a130bc060ba/desktop-pc-banner-3bf80535-1771682320899.webp',
    title: 'Gaming Masters',
    subtitle: 'Build your ultimate gaming setup today'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative h-[300px] md:h-[600px] w-full overflow-hidden group">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.url}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#eaeded] via-transparent to-transparent" />
          
          <div className="absolute top-1/4 left-8 md:left-20 max-w-lg space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {banner.title}
            </h2>
            <p className="text-lg md:text-2xl text-white drop-shadow-md">
              {banner.subtitle}
            </p>
            <Button size="lg" className="bg-[#febd69] text-black hover:bg-[#f3a847] border-none font-bold">
              Shop Now
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-full px-4 bg-transparent hover:outline hover:outline-2 outline-white text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-4 bg-transparent hover:outline hover:outline-2 outline-white text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={48} />
      </button>

      {/* Bottom overlay for Amazon look */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#eaeded] to-transparent" />
    </div>
  );
};

export default Hero;