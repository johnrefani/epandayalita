"use client";

import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io"; 
import { Entry } from "@/data/props";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/entries/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error("Failed to fetch results");
        const data: Entry[] = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchResults, 100);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div
      className={`w-full md:w-[600px] lg:w-[700px] shadow-lg [box-shadow:0_0_8px_2px_rgba(178,232,209,0.75)] rounded-2xl transition-all duration-300 ${
        results.length > 0 ? "bg-white border-2 border-green-200" : "bg-transparent"
      }`}
    >
      <div className="flex items-center px-4 md:px-6 h-10 md:h-12 lg:h-14">
        <input
          className="w-full h-full text-green-950 outline-none bg-transparent text-sm md:text-base px-2 md:px-4 placeholder-gray-400"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IoSearch
          className="w-6 h-6 md:w-8 md:h-8 ml-2 md:ml-4 flex-shrink-0 hover:scale-110 transition-transform text-green-300"
        />
      </div>

      {query.trim() && (
        <>
          <div className="border-t border-gray-200 mx-4 md:mx-6" />
          <div className="px-4 md:px-6 py-2 max-h-64 overflow-y-auto">
            {isLoading ? (
              <div className="py-2 text-gray-500">Loading...</div>
            ) : results.length > 0 ? (
              results.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between text-green-900 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    console.log("Selected:", entry);
                    setQuery(entry.word);
                    setResults([]); 
                  }}
                >
                  <span className="text-sm md:text-base">{entry.word}</span>
                  <IoIosArrowForward className="w-5 h-5 text-gray-400" />
                </div>
              ))
            ) : (
              <div className="py-2 text-gray-500">No results found</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Searchbar;