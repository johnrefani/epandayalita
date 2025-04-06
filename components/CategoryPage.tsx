import React from "react";
import Link from "next/link";
import CatCard from "@/components/ui/CatCard";
import { Entry } from "@/lib/props";

async function fetchCategoryEntries(category: string): Promise<Entry[]> {
  const response = await fetch(
    `http://epandayalita.vercel.app/api/entries/category/${encodeURIComponent(category)}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch category entries");
  }
  return response.json();
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const formattedCategory = decodeURIComponent(params.category).replace(/_/g, " & ");

  let entries: Entry[] = [];
  try {
    entries = await fetchCategoryEntries(params.category);
  } catch (error) {
    console.error("Error fetching entries:", error);
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Category Not Found or Failed to Load
      </h1>
    );
  }

  if (entries.length === 0) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        No Words Found for {formattedCategory}
      </h1>
    );
  }

  const speech = entries[0]?.speech || "Unknown";

  return (
      <section className="flex flex-col mt-20 ">
        <div className="flex-center py-9 bg-green-800 -mx-[1rem] md:-mx-[3.75rem] lg:-mx-[6.25rem] xl:-mx-[7.5rem]">
          <h1 className="text-3xl font-bold text-green-50 uppercase">
            {formattedCategory}
          </h1>
        </div>
        <div className="place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-9 place-items-center">
            {entries.map((item) => (
              <Link
                key={item.id}
                href={`/${params.category}/${encodeURIComponent(item.word.toLowerCase())}`}
                className="w-full"
              >
                <CatCard
                  title={item.word}
                  pic={item.image}
                  speech={speech}
                  hasNoImage={!item.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
};

export default CategoryPage;
