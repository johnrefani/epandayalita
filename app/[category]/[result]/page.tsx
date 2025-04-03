import { Footer, Header } from "@/lib/imports";
import React from "react";
import ResCard from "@/components/ui/ResCard";
import { Entry } from "@/data/props";

async function fetchEntry(category: string, word: string): Promise<Entry> {
  const response = await fetch(
    `http://localhost:3000/api/entries/category/${encodeURIComponent(category)}/${encodeURIComponent(word)}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch entry");
  }
  return response.json();
}

async function fetchPopularTerms(category: string): Promise<Entry[]> {
  const response = await fetch(
    `http://localhost:3000/api/entries/category/${encodeURIComponent(category)}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch popular terms");
  }
  return response.json();
}

const Page = async ({ params }: { params: { category: string; result: string } }) => {
  const formattedCategory = decodeURIComponent(params.category).replace(/_/g, " & ");

  let entry: Entry | null = null;
  let popularTerms: Entry[] = [];

  try {
    entry = await fetchEntry(params.category, params.result);
    popularTerms = await fetchPopularTerms(params.category);
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Result Not Found or Failed to Load
      </h1>
    );
  }

  if (!entry) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Result Not Found
      </h1>
    );
  }

  return (
    <main>
      <Header />
      <ResCard
        id={entry.id}
        word={entry.word}
        image={entry.image}
        speech={entry.speech}
        pronunciation={entry.pronunciation}
        definition={entry.definition}
        audio={entry.audio}
      />

      {/* Popular Terms Section */}
      {/* <section className="py-16 flex flex-col px-4 md:px-16 lg:px-32 xl:px-64 bg-white">
        <h1 className="text-xl font-bold mb-4">Popular Terms</h1>
        <div className="flex gap-4">
          {popularTerms.slice(0, 4).map((item) => (
            <h2
              key={item.id}
              className="rounded-md bg-green-100 py-2.5 px-3.5 shadow-md"
            >
              {item.word}
            </h2>
          ))}
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Page;