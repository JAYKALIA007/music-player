export interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

export interface MusicContextType {
  songs: Song[];
  currentSong: Song;
  isPlaying: boolean;
  togglePlayback: () => void;
  setCurrentSong: (song: Song) => void;
  skipToNext: () => void;
  skipToPrevious: () => void;
}
