import React from "react";
import CatCard from "./ui/CatCard";

const Category = () => {
  return (
    <section className="flex flex-col h-screen">
      <div className="flex-center py-9 bg-green-800">
        <h1 className="text-3xl font-bold text-white uppercase">Tools</h1>
      </div>
      <div className="place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9 place-items-center">
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
        </div>
      </div>
    </section>
  );
};

export default Category;
