import { ReactNode, useCallback, useMemo, useState } from "react";

import { Translator, useLang } from "@/services/LangContext";

import { ImagePopup, ImageProps } from "../ImagePopup/ImagePopup";

export interface ImageDataProps<T extends string> {
  name: T;
  image: string;
}

export const useImagePopup = <T extends string>(
  imagesData: ImageDataProps<T>[],
  translator: Translator<T, string>
): {
  isPopupOpen: boolean;
  handleClosePopup: () => void;
  selectedImageIndex: number;
  elements: ReactNode[];
  images: ImageProps[];
} => {
  const lang = useLang();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const { elements, images } = useMemo(() => {
    const elements: ReactNode[] = [];
    const images: ImageProps[] = [];

    imagesData.forEach((data, index) => {
      elements.push(
        <ImagePopup
          key={data.name}
          src={data.image}
          description={translator[data.name][lang]}
          index={index}
          handleImageClick={handleImageClick}
        />
      );

      images.push({
        src: data.image,
        description: translator[data.name][lang],
      });
    });

    return { elements, images };
  }, [handleImageClick, imagesData, lang, translator]);

  return {
    isPopupOpen,
    handleClosePopup,
    selectedImageIndex,
    elements,
    images,
  };
};
