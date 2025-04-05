"use client"

import React, { useEffect, useRef } from "react";

const Card = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className="group bg-green-50 flex flex-col lg:flex-row w-full max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <div className="bg-white p-4 sm:p-6 lg:p-8 flex items-center justify-center lg:w-3/5 relative">
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

      <div className="bg-green-50 p-4 sm:p-6 lg:p-8 lg:w-2/5 flex flex-col justify-center space-y-4">
        <div className="space-y-3">
          <div className="space-y-2">
            <span className="bg-green-900 w-12 h-1 inline-block rounded-full"></span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Tungkol sa E-PANDAYALITA
            </h2>
          </div>

          <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
            Ang E-PANDAYALITA ay isang natatanging online na diksiyonaryo na
            nakatuon sa pagpapanatili at pagpapalawak ng kaalaman sa
            bokabularyong ginagamamit sa tradisyunal na pandayan, lalo na sa
            paggawa ng itak at iba pang kasangkapang may talim. Layunin nitong
            magbigay ng komprehensibo at madaling gamitin na plataporma kung
            saan maaaring tuklasin ng mga mag-aaral, panday, at mahilig sa
            sining ng pagpapanday ang mayamang wikang kaugnay ng metalworking.
          </p>
        </div>

        <div className="hidden lg:block w-20 h-1 bg-green-200 rounded-full self-start"></div>
      </div>
    </div>
  );
};

export default Card;