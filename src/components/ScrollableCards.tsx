'use client';

import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Card {
  title: string;
  description: string;
  period?: string;
  tags?: string[];
  link?: string;
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
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
        >
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex-none w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h4 className="font-bold text-lg mb-2">{card.title}</h4>
              {card.period && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{card.period}</p>
              )}
              <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
              {card.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
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
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
} 