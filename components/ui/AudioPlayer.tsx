"use client"

import { useState, useRef, useEffect } from 'react';
import { HiSpeakerWave } from 'react-icons/hi2';

const AudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', () => {});
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={isPlaying ? "Stop audio" : "Play audio"}
    >
      <HiSpeakerWave  
        className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${isPlaying ? "text-green-500" : "text-green-950"}`} 
      />
    </button>
  );
};

export default AudioPlayer;