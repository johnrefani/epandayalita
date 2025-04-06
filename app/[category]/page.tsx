import CategoryPage from "@/components/CategoryPage";
import { Header, Footer } from "@/lib/imports";
import React from "react";

const Page = ({ params }: { params: { category: string } }) => {
  return (
    <main>
      <Header />
      <div className="mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem]">
        <CategoryPage params={params} />
      </div>
      <Footer />
    </main>
  );
};

export default Page;