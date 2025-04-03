import { ResCardProps } from "@/data/props";
import Image from "next/image";
import React from "react";
import AudioPlayer from "./AudioPlayer";

const ResCard = ({
  id,
  word,
  image,
  speech,
  audio,
  definition,
  pronunciation,
}: ResCardProps) => {
  return (
    <section className="relative flex-center pt-16 mt-20">
      <div className="absolute inset-0 grid grid-rows-[60%_40%]">
        <div className="bg-green-700"></div>
        <div className="bg-white"></div>
      </div>

      <div className="relative z-10 w-xl md:w-2xl lg:w-3xl xl:w-5xl flex px-16 py-14 rounded-md shadow-lg bg-white mb-10">
        <div className="min-h-[250] max-w-[300px]">
          {image ? (
            <Image
              className="border border-green-900 object-cover"
              src={image}
              width={300}
              height={300}
              alt={word}
            />
          ) : (
            <div className="w-[300px] h-[300px] border border-green-900 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="py-2 px-4 flex flex-col">
          <div className="gap-6 flex items-center">
            <h1 className="text-3xl font-semibold">{word}</h1>
            {audio ? <AudioPlayer audioUrl={audio} /> : <span>No Audio</span>}
          </div>
          <h2 className="w-fit mt-2 rounded-md border shadow py-2 px-4 text-base">
            {pronunciation || "N/A"}
          </h2>
          <div className="mt-8">
            <h2 className="text-xl font-bold">{speech || "Unknown"}</h2>
            <p className="text-sm opacity-75 mt-4">{definition || "No definition available"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResCard;