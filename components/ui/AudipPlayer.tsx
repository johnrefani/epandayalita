import { useState, useRef, useEffect } from 'react';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const AudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const soundWaveVariants = {
    playing: {
      opacity: [0.4, 1, 0.4],
      scaleY: [1, 1.5, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    paused: {
      opacity: 1,
      scaleY: 1
    }
  };

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
      className="flex items-center justify-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={isPlaying ? "Stop audio" : "Play audio"}
    >
      {isPlaying ? (
        <div className="flex items-end h-8 gap-1">
          <motion.div
            className="w-1 bg-green-500 h-1 rounded-full"
            variants={soundWaveVariants}
            animate="playing"
          />
          <motion.div
            className="w-1 bg-green-500 h-2 rounded-full"
            variants={soundWaveVariants}
            animate="playing"
            style={{ animationDelay: '0.2s' }}
          />
          <motion.div
            className="w-1 bg-green-500 h-3 rounded-full"
            variants={soundWaveVariants}
            animate="playing"
            style={{ animationDelay: '0.4s' }}
          />
          <HiSpeakerWave size={30} className="text-green-500 ml-1" />
        </div>
      ) : (
        <HiSpeakerXMark size={30} className="text-gray-500" />
      )}
    </button>
  );
};

export default AudioPlayer;