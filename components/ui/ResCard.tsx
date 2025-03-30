import Image from "next/image";
import React from "react";
import { HiSpeakerWave } from "react-icons/hi2";

const ResCard = () => {
  return (
    <section className="relative flex-center pt-16 mt-20">
     
      <div className="absolute inset-0 grid grid-rows-[60%_40%]">
        <div className="bg-green-700"></div>
        <div className="bg-white"></div>
      </div>

      <div className="relative z-10 w-xl md:w-2xl lg:w-3xl xl:w-5xl flex px-16 py-14 rounded-md shadow-lg bg-white mb-10">
        <Image
          className="border border-green-900"
          src="/favicon.svg"
          width={250}
          height={250}
          alt="Hammer"
        />

        <div className="py-2 px-4 flex flex-col">
          <div className="gap-6 flex">
            <h1 className="text-3xl font-semibold">Hammer</h1>
            <HiSpeakerWave size={30} className="self-center" />
          </div>
          <h2 className="w-fit mt-2 rounded-md border shadow py-2 px-4 text-base">
            /mar-tee-lyo/
          </h2>
          <div className="mt-8">
            <h2 className="text-xl font-bold">verb (Pandiwa)</h2>
            <p className="text-sm opacity-75 mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita perferendis consequuntur rerum molestiae, quia error,
              distinctio illum blanditiis iure dolores cupiditate. Illum
              dolorem atque sit, aperiam quis voluptatem ratione fugit?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResCard;
