// app/components/WordListTest.tsx
'use client';

import { useState, useEffect } from 'react';
import { EntryType } from '@/data/props';


export default function WordListTest() {
  const [words, setWords] = useState<EntryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch('/api/words');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setWords(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading words...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        <p>Error fetching words:</p>
        <p className="font-bold">{error}</p>
        <p className="mt-2 text-sm">
          Check your console for more details and ensure your backend is running.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 h-screen">
      <h2 className="text-xl font-bold mb-4">Word List Test Component</h2>
      <p className="mb-4">Successfully fetched {words.length} words:</p>
      
      <div className="space-y-4">
        {words.slice(0, 5).map((word) => (
          <div key={word.id} className="p-3 border rounded-lg">
            <h3 className="font-bold">{word.word}</h3>
            <p>{word.definition}</p>
            <div className="text-sm text-gray-500 mt-1">
              <span>{word.pronunciation}</span> • <span>{word.speech}</span>
            </div>
          </div>
        ))}
        
        {words.length > 5 && (
          <p className="text-sm text-gray-500">
            Showing 5 of {words.length} words...
          </p>
        )}
      </div>
    </div>
  );
}