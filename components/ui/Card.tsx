"use client";

import React, { useEffect, useRef, useState } from "react";

const Card = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.error("Error auto-playing video:", error);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.unobserve(video);
  }, []);

  return (
    <div className="group bg-green-50 flex flex-col lg:flex-row w-full max-w-7xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      {/* VIDEO SECTION */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 flex items-center justify-center relative">
        <div className="relative w-full max-w-[600px] aspect-video">
          <video
            ref={videoRef}
            loop
            controls
            playsInline
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          >
            <source
              src="https://res.cloudinary.com/dw3zuv8pb/video/upload/v1743821816/epandayalita_r65mwd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="bg-green-50 p-4 sm:p-6 lg:p-8 flex max-w-3xl flex-col justify-center space-y-4">
        <div className="space-y-3">
          <div className="space-y-2">
            <span className="bg-green-900 w-12 h-1 inline-block rounded-full"></span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Tungkol sa E-PANDAYALITA
            </h2>
          </div>

          <p className="card">
            Ang E-PANDAYALITA ay isang natatanging online na diksiyonaryo na
            nakatuon sa pagpapanatili at pagpapalawak ng kaalaman sa
            bokabularyong ginagamamit sa tradisyunal na pandayan, lalo na sa
            paggawa ng itak at iba pang kasangkapang may talim. Layunin nitong
            magbigay ng komprehensibo at madaling gamitin na plataporma kung
            saan maaaring tuklasin ng mga mag-aaral, panday, at mahilig sa
            sining ng pagpapanday ang mayamang wikang kaugnay ng metalworking.
          </p>

          {/* TOGGLE SECTION */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="card">
              Isang mahalagang bahagi ng tradisyunal na hanapbuhay sa ilang
              bahagi ng Pilipinas ang pagpapanday ng itak o blacksmithing,
              kabilang na ang Camarines Norte sa rehiyong Bikol. Ang pandayan ng
              itak ay kilala bilang isang lugar kung saan ginagamitan ng apoy
              ang mga bakal upang likhain ang iba't ibang gamit, tulad ng itak,
              kawit, gapas, talim ng araro, at iba pa. Mahalagang kasangkapan sa
              mga gawain tulad ng pagputol ng kahoy, paglilinis ng sakahan,
              pagkakatay ng mga karne, pagkakawit, at pag-aani ng palay ang mga
              kagamitang nililikha ng mga magpapanday.
            </p>
            <p className="card mt-3">
              Nagtataglay rin ang mga panday ng natatanging kaalaman at
              kasanayan sa paglikha ng mga sandatang ito na may mataas na
              kalidad at artistikong halaga. Sa proseso ng pagpapanday,
              ginagamit ang palihan, martilyo, kimpal ng bakal, at iba pang
              kagamitan upang pahiran, painitin, at pukpukin ang bakal hanggang
              sa ito'y umayon sa nais na anyo. Kadalasan, ang kaalamang ito ay
              ipinapasa mula sa henerasyon sa henerasyon, bilang bahagi ng
              pamanang kultural ng mga lokal na komunidad. Kung kaya’t masasabi
              na ang pagpapanday ng itak ay hindi lamang isang hanapbuhay kundi
              isang anyo rin ng sining at simbolo ng kasipagan, talino, at
              kakayahang Pilipino. Isa rin itong mahalagang bahagi ng
              pagkakakilanlan ng mga komunidad na patuloy na nagsusulong sa
              pagpreserba ng kanilang mga tradisyon at kasanayan sa gitna ng
              makabagong panahon.
            </p>
          </div>

          {/* TOGGLE BUTTON */}
          <button
            onClick={toggleContent}
            className="cursor-pointer text-gray-700 hover:text-green-700 hover:bg-green-100 rounded px-2 py-1 text-sm w-fit"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>

        <div className="hidden lg:block w-20 h-1 bg-green-200 rounded-full self-start"></div>
      </div>
    </div>
  );
};

export default Card;
