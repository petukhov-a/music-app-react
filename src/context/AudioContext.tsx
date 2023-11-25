import { FC, ReactNode, createContext, useState } from "react"
import { TrackItem, tracklist } from "../assets/tracklist";

type AudioContextType = {
  currentTrack: TrackItem;
  isPlaying: boolean;
  handleToggleAudio: (track: TrackItem) => void;
  audio: HTMLAudioElement;
}

type AudioProviderProps = {
  children: ReactNode;
}

const audio = new Audio();

export const AudioContext = createContext<AudioContextType | null>(null);

const AudioProvider: FC<AudioProviderProps> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracklist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = (track: TrackItem) => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setIsPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();

      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  const value = { audio, currentTrack, isPlaying, handleToggleAudio }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

export default AudioProvider;