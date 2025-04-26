import { Card, Footer, Header } from "@/lib/imports";
import React from "react";

const page = () => {
  return (
    <main id="tungkol">
      <Header />
      <div className="mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem] mt-20 py-20">
        <Card />
      </div>
      <Footer />
    </main>
  );
};

export default page;
