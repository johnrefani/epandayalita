"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Entry } from "@/lib/props";
import Link from "next/link";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const resultRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/entries/search?q=${encodeURIComponent(query)}`, {
          cache: "force-cache",
        });
        if (!response.ok) throw new Error("Failed to fetch results");
        const data: Entry[] = await response.json();
        setResults(data);
        setSelectedIndex(-1);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.min(selectedIndex + 1, results.length - 1);
      setSelectedIndex(newIndex);
      scrollToResult(newIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.max(selectedIndex - 1, -1);
      setSelectedIndex(newIndex);
      if (newIndex >= 0) scrollToResult(newIndex);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      const selectedItem = results[selectedIndex];
      setQuery(selectedItem.word);
      setResults([]);
      window.location.href = `/${selectedItem.category}/${encodeURIComponent(selectedItem.word.toLowerCase())}`;
    }
  };

  const scrollToResult = (index: number) => {
    const element = resultRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div
      className={`w-full md:w-[600px] lg:w-[700px] shadow-lg [box-shadow:0_0_8px_2px_rgba(178,232,209,0.75)] rounded-2xl transition-all duration-300 ${
        results.length > 0 ? "bg-white border-2 border-blue-200" : "bg-transparent"
      }`}
    >
      <div className="flex items-center px-4 md:px-6 h-10 md:h-12 lg:h-14">
        <input
          ref={inputRef}
          className="w-full h-full text-blue-950 outline-none bg-transparent text-sm md:text-base px-2 md:px-4 placeholder-gray-400"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IoSearch
          className="w-6 h-6 md:w-8 md:h-8 ml-2 md:ml-4 flex-shrink-0 hover:scale-110 transition-transform text-blue-300"
        />
      </div>

      {query.trim() && (
        <>
          <div className="border-t border-gray-200 mx-4 md:mx-6" />
          <div className="px-4 md:px-6 py-2 max-h-64 overflow-y-auto">
            {isLoading ? (
              <div className="py-2 text-gray-500">Loading...</div>
            ) : results.length > 0 ? (
              results.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/${item.category}/${encodeURIComponent(item.word.toLowerCase())}`}
                  ref={(el) => {
                    resultRefs.current[index] = el;
                  }}
                  className={`flex items-center justify-between text-blue-900 py-2 hover:bg-gray-100 cursor-pointer w-full ${
                    selectedIndex === index ? "bg-gray-200" : ""
                  }`}
                  prefetch={true}
                  onClick={(e) => {
                    if (e.defaultPrevented) return;
                    setQuery(item.word);
                    setResults([]);
                  }}
                >
                  <span className="text-sm md:text-base">{item.word}</span>
                  <IoIosArrowForward className="w-5 h-5 text-gray-400" />
                </Link>
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