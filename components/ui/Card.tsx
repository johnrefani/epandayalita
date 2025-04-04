import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Card = () => {
  return (
    <div className="group bg-green-50 flex flex-col lg:flex-row w-full max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <div className="bg-white p-8 lg:p-12 flex items-center justify-center lg:w-2/5 relative">
        <div className="relative w-full aspect-square max-w-[300px]">
          <Image
            fill
            alt="logo"
            src={"/favicon.svg"}
            className="w-full h-auto object-contain p-6 transition-transform duration-300 group-hover:scale-105 text-green-800"
          />
        </div>
      </div>

      <div className="bg-green-50 p-8 lg:p-12 lg:w-3/5 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="bg-green-900 w-16 h-1.5 inline-block rounded-full"></span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Tungkol sa E-PANDAYALITA
            </h2>
          </div>

          <p className="text-base lg:text-lg leading-relaxed lg:leading-loose">
            Ang E-PANDAYALITA ay isang natatanging online na diksiyonaryo na
            nakatuon sa pagpapanatili at pagpapalawak ng kaalaman sa
            bokabularyong ginagamamit sa tradisyunal na pandayan, lalo na sa
            paggawa ng itak at iba pang kasangkapang may talim. Layunin nitong
            magbigay ng komprehensibo at madaling gamitin na plataporma kung
            saan maaaring tuklasin ng mga mag-aaral, panday, at mahilig sa
            sining ng pagpapanday ang mayamang wikang kaugnay ng metalworking.
          </p>
        </div>

        <div className="hidden lg:block w-24 h-1 bg-green-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card;
