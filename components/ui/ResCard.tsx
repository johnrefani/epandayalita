import { ResCardProps } from "@/data/props";
import Image from "next/image";
import React from "react";
import { HiSpeakerWave } from "react-icons/hi2";


const ResCard = ({ title, pic, speech, phonetic, description } : ResCardProps) => {
  return (
    <section className="relative flex-center pt-16 mt-20">
      <div className="absolute inset-0 grid grid-rows-[60%_40%]">
        <div className="bg-green-700"></div>
        <div className="bg-white"></div>
      </div>

      <div className="relative z-10 w-xl md:w-2xl lg:w-3xl xl:w-5xl flex px-16 py-14 rounded-md shadow-lg bg-white mb-10">
        <div className="min-h-[250] max-w-[300px]">
          <Image
            className="border border-green-900 object-cover"
            src={pic}
            width={300}
            height={300}
            alt={title}
          />
        </div>

        <div className="py-2 px-4 flex flex-col">
          <div className="gap-6 flex">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <HiSpeakerWave size={30} className="self-center" />
          </div>
          <h2 className="w-fit mt-2 rounded-md border shadow py-2 px-4 text-base">
            {phonetic}
          </h2>
          <div className="mt-8">
            <h2 className="text-xl font-bold">{speech}</h2>
            <p className="text-sm opacity-75 mt-4">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResCard;
