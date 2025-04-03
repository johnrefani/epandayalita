import { Footer, Header } from "@/lib/imports";
import React from "react";
import { categoryLists } from "@/data";
import ResCard from "@/components/ui/ResCard";

const Page = ({ params }: { params: { category: string; result: string } }) => {
  const formattedCategory = decodeURIComponent(params.category).replace(/_/g, " & ");

  const category = categoryLists.find(
    (cat) => cat.title.toLowerCase() === formattedCategory.toLowerCase()
  );

  const result = category?.items?.find(
    (item) => item.title.toLowerCase() === decodeURIComponent(params.result).toLowerCase()
  );


  if (!category || !result) {
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
        word={result.title}
        image={result.pic}
        speech={category.speech}
        pronunciation={result.phonetic}
        definition={result.description}
        audio={result.audio}
        
      />

      {/* Popular Terms Section */}
      <section className="py-16 flex flex-col px-4 md:px-16 lg:px-32 xl:px-64 bg-white">
        <h1 className="text-xl font-bold mb-4">Popular Terms</h1>
        <div className="flex gap-4">
          {category.items.slice(0, 4).map((item) => (
            <h2 key={item.id} className="rounded-md bg-green-100 py-2.5 px-3.5 shadow-md">
              {item.title}
            </h2>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
