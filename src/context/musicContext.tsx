"use client";

import { MOCK_SONGS } from "@/app/constants";
import { MusicContextType, Song } from "@/app/types";
import { createContext, useState, type ReactNode, useCallback } from "react";

const DEFAULT_SONG_VALUE = {
  id: 0,
  title: "",
  artist: "",
  coverUrl: "",
};
export const MusicPlayerContext = createContext<MusicContextType>({
  songs: [],
  currentSong: DEFAULT_SONG_VALUE,
  isPlaying: false,
  togglePlayback: () => {},
  setCurrentSong: () => {},
  skipToNext: () => {},
  skipToPrevious: () => {},
});

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [songs] = useState<Song[]>(MOCK_SONGS);
  const [currentSong, setCurrentSong] = useState<Song>(MOCK_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const skipToNext = useCallback(() => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  }, [songs, currentSong]);

  const skipToPrevious = useCallback(() => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  }, [songs, currentSong]);

  return (
    <MusicPlayerContext.Provider
      value={{
        songs,
        currentSong,
        isPlaying,
        togglePlayback,
        setCurrentSong,
        skipToNext,
        skipToPrevious,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}
