import React from "react";
import { categoryLists } from "@/data";
import CatCard from "@/components/ui/CatCard";
import { Header } from "@/lib/imports";
import Link from "next/link";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  // Convert "tools-and-materials" back to "Tools & Materials"
  const formattedCategory = decodeURIComponent(params.category).replace(/_/g, " & ");

  const category = categoryLists.find(
    (cat) => cat.title.toLowerCase() === formattedCategory.toLowerCase()
  );

  if (!category) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Category Not Found
      </h1>
    );
  }

  return (
    <main>
      <Header />
      <section className="flex flex-col mt-20">
        <div className="flex-center py-9 bg-green-800">
          <h1 className="text-3xl font-bold text-green-50 uppercase">
            {category.title}
          </h1>
        </div>
        <div className="place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-9 place-items-center">
            {category.items.map((item) => (
              <Link
                key={item.id}
                href={`/${params.category}/${encodeURIComponent(item.title)}`}
                className="w-full"
              >
                <CatCard
                  title={item.title}
                  pic={item.pic}
                  speech={category.speech}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
