import CategoryPage from "@/components/CategoryPage";
import { Footer, Header } from "@/lib/imports";
import React from "react";

const Page = ({ params }: { params: { category: string } }) => {
  return (
    <main>
      <Header />
      <CategoryPage params={params} />
      <Footer />
    </main>
  );
};

export default Page;
