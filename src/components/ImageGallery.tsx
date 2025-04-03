import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGalleryProps {
  images?: string[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const lightboxImages = images.map(src => ({ src }));

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 theme-text force-black dark:force-white">
        <span className="text-red-500">⌐◨-◨</span> Galería de imágenes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div 
            key={src}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity bg-gray-100 dark:bg-gray-800"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxImages}
      />
    </div>
  );
};
