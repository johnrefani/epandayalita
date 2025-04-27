import { Information } from "@/data";
import { Footer, Header, InfoCard } from "@/lib/imports";
import React from "react";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="flex-center py-9 bg-blue-800 -mx-[1rem] md:-mx-[3.75rem] lg:-mx-[6.25rem] xl:-mx-[7.5rem] mt-16 md:mt-20">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-50 text-center">Impormasyon ng mga Mananaliksik</h1>
      </div>

      {Information.filter((person) => person.id === 1 || person.id === 2).map((person) => (
        <div key={person.id} className="py-8 mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem]">
          <InfoCard
            id={person.id}
            name={person.name}
            pic={person.pic}
            description={person.description}
          />
        </div>
      ))}

      <Footer />
    </main>
  );
};

export default Page;
