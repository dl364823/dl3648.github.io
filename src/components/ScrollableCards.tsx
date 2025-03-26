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
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</h3>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
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
              className="flex-none w-96 bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-start gap-4 mb-4">
                {card.logo && (
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={card.logo}
                      alt={`${card.company} logo`}
                      fill
                      className="object-contain rounded-lg"
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
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium"
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
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4"
                >
                  <FaGithub className="text-lg" /> View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-blue-400" />
        </button>
      </div>
    </div>
  );
} 