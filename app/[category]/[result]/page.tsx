import { Footer, Header } from "@/lib/imports";
import React from "react";
import ResCard from "@/components/ui/ResCard";
import { Entry } from "@/lib/props";

async function fetchEntry(category: string, word: string): Promise<Entry> {
  const response = await fetch(
    `http://epandayalita.vercel.app/api/entries/category/${encodeURIComponent(category)}/${encodeURIComponent(word)}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch entry");
  }
  return response.json();
}

const Page = async ({ params }: { params: { category: string; result: string } }) => {


  let entry: Entry | null = null;

  try {
    entry = await fetchEntry(params.category, params.result);
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

      <Footer />
    </main>
  );
};

export default Page;