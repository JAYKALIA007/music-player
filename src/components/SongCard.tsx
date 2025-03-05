import { Song } from "@/app/types";
import { MusicPlayerContext } from "@/context/musicContext";
import Image from "next/image";
import { useContext, useState } from "react";

export const SongCard = ({ song }: { song: Song }) => {
  const { setCurrentSong } = useContext(MusicPlayerContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className="flex flex-col gap-[10px] cursor-pointer"
      onClick={() => setCurrentSong(song)}
    >
      <div
        className={`relative ${
          isImageLoaded &&
          ` rounded-full transition-shadow duration-300 ${getShadowClass(
            song.id
          )}`
        }`}
      >
        {!isImageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 animate-pulse"></div>
        )}
        <Image
          src={song.coverUrl}
          width={150}
          height={150}
          alt={`${song.title} by ${song.artist}`}
          className={`object-cover w-full h-[145px] rounded-l transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          } `}
          onLoadingComplete={handleImageLoad}
        />
      </div>

      <div className="flex flex-col gap-1 text-center">
        <p className="text-sm">{song.title}</p>
        <p
          style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          className="tracking-wide text-[#A5C0FFB2] text-[10px]"
        >
          {song.artist}
        </p>
      </div>
    </div>
  );
};

// Helper function to get shadow color based on song,
// although that this is not a feasible solution when there are more number of songs.
// Will be using a library then to get the main color from the image and then use it as a shadow.
const getShadowClass = (songId: number) => {
  switch (songId) {
    case 1:
      return "shadow-[0_10px_20px_rgba(6,182,212,0.5)] hover:shadow-[0_10px_20px_rgba(6,182,212,0.6)]"; // cyan
    case 2:
      return "shadow-[0_10px_20px_rgba(234,88,12,0.5)]  hover:shadow-[0_10px_20px_rgba(234,88,12,0.6)]"; // orange
    case 3:
      return "shadow-[0_10px_20px_rgba(220,38,38,0.5)] hover:shadow-[0_10px_20px_rgba(220,38,38,0.6)]"; // red
    case 4:
      return "shadow-[0_10px_20px_rgba(22,163,74,0.5)] hover:shadow-[0_10px_20px_rgba(22,163,74,0.6)]"; // green
    case 5:
      return "shadow-[0_10px_20px_rgba(147,51,234,0.5)] hover:shadow-[0_10px_20px_rgba(147,51,234,0.6)]"; // purple
    case 6:
      return "shadow-[0_10px_20px_rgba(234,179,8,0.5)] hover:shadow-[0_10px_20px_rgba(234,179,8,0.6)]"; // yellow
    default:
      return "shadow-[0_10px_20px_rgba(255,255,255,0.5)] hover:shadow-[0_10px_20px_rgba(255,255,255,0.6)]"; // default white
  }
};
