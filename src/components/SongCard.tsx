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
          "rounded-full shadow-[0_15px_25px_rgba(8,_112,_184,_0.3)] hover:shadow-[0_20px_30px_rgba(8,_112,_184,_0.4)] transition-shadow duration-300"
        }`}
      >
        {!isImageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 animate-pulse"></div>
        )}

        <Image
          src={song.coverUrl}
          width={150}
          height={150}
          alt={song.title}
          className={`w-[145.16px] h-[145.16px] object-cover rounded-lg transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={handleImageLoad}
        />
      </div>

      {/* Song Title and Artist */}
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
