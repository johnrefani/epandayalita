import { ResCardProps } from "@/lib/props";
import Image from "next/image";
import React from "react";
import AudioPlayer from "./AudioPlayer";
import { IoSearch } from "react-icons/io5";
import { source } from "@/data";
import Link from "next/link";

const ResCard = ({
  id,
  word,
  image,
  speech,
  audio,
  definition,
  pronunciation,
}: ResCardProps) => {

  const sourceItem = source.find(item => (item.id === id))


  return (
    <section className="relative flex justify-center pt-16 mt-16">
      <div className="absolute inset-0 grid grid-rows-[50%_50%]">
        <div className="bg-blue-700"></div>
        <div className=""></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-8 py-8 rounded-lg shadow-xl bg-white">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="flex-shrink-0 w-full sm:w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 relative">
            {image ? (
              <Image
                className="border-2 border-blue-400 rounded-md object-contain bg-gray-100"
                src={image}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                alt={word}
                priority
              />
            ) : (
              <div className="w-full h-full border border-blue-400 rounded-md flex items-center justify-center text-gray-500 text-sm md:text-base">
                <IoSearch 
                  className="w-full h-auto object-contain p-6 transition-transform duration-300 group-hover:scale-105 text-blue-800"
                />
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 lg:gap-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
                {word}
              </h1>
              {audio ? (
                <AudioPlayer audioUrl={audio} />
              ) : (
                <span className="text-sm md:text-base text-gray-500">No Audio</span>
              )}
              </div>
              {
                sourceItem ? (
                  <Link href={sourceItem.link} passHref>
                    <div className="flex items-center justify-center gap-2 bg-blue-200 py-2 px-3 rounded-md">
                      <p className="text-blue-950 text-xs md:text-sm lg:text-base hidden lg:block">
                        Tignan ang pinagmulan
                      </p>
                      <Image 
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        src="/Vector.svg"
                        height={24}
                        width={24}
                        alt="source"
                      />
                    </div>
                  </Link>
                ) : (
                  <>
                  </>
                )
              }
                 
            </div>

            <h2 className="w-fit text-sm sm:text-base lg:text-lg text-blue-700 bg-blue-100 rounded-md border border-blue-300 py-1 px-3 shadow-sm">
              {pronunciation || "N/A"}
            </h2>

            <div className="border-t border-gray-200 my-2 md:my-4"></div>

            <div className="">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-800">
                {speech || "Unknown"}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mt-3 text-gray-600 leading-relaxed">
                {definition || "No definition available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResCard;