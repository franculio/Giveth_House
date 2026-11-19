import { useEffect } from "react";
import PrismCycle from "./PrismCycle";

interface Photo {
  src: string;
  alt: string;
}

interface RotatingPhotoProps {
  photos: Photo[];
  interval?: number;
  startDelay?: number;
  directionOffset?: number;
}

/**
 * A photograph block that turns on itself through several photos. Photos are
 * never cropped (object-fit: contain).
 */
export default function RotatingPhoto({ photos, interval, startDelay, directionOffset }: RotatingPhotoProps) {
  // Load every photo ahead of time so a turn never shows a half loaded image.
  useEffect(() => {
    photos.forEach((p) => {
      const img = new Image();
      img.src = p.src;
    });
  }, [photos]);

  const faces = photos.map((p) => ({
    key: p.src,
    content: (
      <img
        src={p.src}
        alt={p.alt}
        className="block w-full h-full"
        style={{ objectFit: "contain" }}
        loading="lazy"
      />
    ),
  }));

  return <PrismCycle faces={faces} interval={interval} startDelay={startDelay} directionOffset={directionOffset} />;
}
