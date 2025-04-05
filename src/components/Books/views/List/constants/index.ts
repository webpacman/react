import { ImageDataProps } from "@/common/hooks/useImagePopup";

import CSSImage from "../assets/7skills.png";
import HTMLImage from "../assets/clear-code.png";
import JSImage from "../assets/patterns.png";
import PHPImage from "../assets/perfect-code.png";

export enum BooksKeys {
  HTML = "html",
  CSS = "css",
  JS = "js",
  PHP = "php",
}

export const books: ImageDataProps<BooksKeys>[] = [
  {
    name: BooksKeys.HTML,
    image: HTMLImage,
  },
  {
    name: BooksKeys.CSS,
    image: CSSImage,
  },
  {
    name: BooksKeys.JS,
    image: JSImage,
  },
  {
    name: BooksKeys.PHP,
    image: PHPImage,
  },
  {
    name: BooksKeys.PHP,
    image: PHPImage,
  },
];
