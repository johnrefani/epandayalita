import React from 'react';
import { terms } from '@/data';

const PopularTerms = () => {
  return (
    <section className="relative flex justify-center py-8 md:py-12 lg:py-16 mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem]">
      <div className="w-full max-w-5xl">
        <h1 className="text-blue-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-6 sm:my-8 text-center sm:text-left">
         Mga Tanyag na Termino
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {terms.map((term) => (
            <a
              key={term.id}
              href={term.link}
              className="border-2 border-blue-200 text-xs sm:text-sm md:text-base bg-blue-50 
                        hover:bg-blue-100 py-2 px-3 sm:px-4 rounded-lg text-blue-700 font-medium 
                        text-center transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {term.word}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTerms;