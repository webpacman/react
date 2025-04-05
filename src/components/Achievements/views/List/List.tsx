import { FC } from "react";

import { FullScreenPopup } from "@/common/FullScreenPopup";
import { useImagePopup } from "@/common/hooks/useImagePopup";
import { Slider } from "@/common/Slider/Slider";

import { achievements } from "./constants";
import { translator } from "./translator";

export const List: FC = () => {
  const {
    elements,
    images,
    isPopupOpen,
    handleClosePopup,
    selectedImageIndex,
  } = useImagePopup(achievements, translator);

  return (
    <>
      <Slider sliderData={elements} centered infinity withArrows />

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
