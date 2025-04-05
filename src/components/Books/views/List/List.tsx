import { FC } from "react";

import { FullScreenPopup } from "@/common/FullScreenPopup";
import { useImagePopup } from "@/common/hooks/useImagePopup";
import { Slider } from "@/common/Slider/Slider";

import { books } from "./constants";
import { translator } from "./translator";

export const List: FC = () => {
  const {
    elements,
    images,
    isPopupOpen,
    handleClosePopup,
    selectedImageIndex,
  } = useImagePopup(books, translator);

  return (
    <>
      <Slider
        sliderData={elements}
        centered
        autoplay
        infinity
        countInView={4}
      />

      {isPopupOpen && (
        <FullScreenPopup
          images={images}
          initialIndex={selectedImageIndex}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};
