'use client';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface Card {
  title: string;
  company?: string;
  description?: string;
  period?: string;
  tags?: string[];
  link?: string;
  logo?: string;
}

interface ScrollableCardsProps {
  title: string;
  cards: Card[];
}

export default function ScrollableCards({ title, cards }: ScrollableCardsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 300;
    if (scrollContainerRef.current) {
      const newScrollLeft = direction === 'left'
        ? Math.max(scrollContainerRef.current.scrollLeft - scrollAmount, 0)
        : Math.min(scrollContainerRef.current.scrollLeft + scrollAmount, scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">{title}</h3>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-blue-400" />
        </button>
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
        >
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex-none w-96 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1 border border-gray-700/50 hover:border-blue-500/50"
            >
              <div className="flex items-start gap-4 mb-4">
                {card.logo && (
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm"></div>
                    <Image
                      src={card.logo}
                      alt={`${card.company} logo`}
                      fill
                      className="object-contain rounded-lg relative z-10"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-blue-400">{card.company}</h4>
                  {card.title && (
                    <p className="text-gray-300 font-medium">{card.title}</p>
                  )}
                  {card.period && (
                    <p className="text-sm text-gray-400 font-medium">{card.period}</p>
                  )}
                </div>
              </div>
              {card.tags && (
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {card.link && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 group"
                >
                  <FaGithub className="text-lg group-hover:scale-110 transition-transform" /> 
                  <span className="group-hover:translate-x-1 transition-transform">View on GitHub</span>
                </a>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-blue-400" />
        </button>
      </div>
    </div>
  );
} 