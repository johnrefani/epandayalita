import React from "react";
import Image from "next/image";
import { InfoCardProps } from "@/lib/props";

const InfoCard = ({ id, name, pic, description }: InfoCardProps) => {
  return (
    <section className="flex-center -mx-[1rem] md:-mx-[3.75rem] lg:-mx-[6.25rem] xl:-mx-[7.5rem]">
      <div className={`bg-blue-100 flex flex-col xl:flex-row ${id === 2 ? "xl:flex-row-reverse" : ""} p-1 rounded-md`}>
        <div className="relative w-[300px] md:w-[400px] min-h-[400px] mx-auto">
          <Image
            src={pic}
            alt={name}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="w-xs sm:w-sm md:w-2xl lg:w-3xl xl:w-4xl bg-blue-100 p-2 sm:p-4 md:p-8 flex flex-col justify-center">
          <div className="space-y-3">
            <div className="space-y-2">
              <span className="bg-blue-900 w-12 h-1 inline-block rounded-full"></span>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                {name}
              </h2>
            </div>
            <p className="text-justify text-xs sm:text-base">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
