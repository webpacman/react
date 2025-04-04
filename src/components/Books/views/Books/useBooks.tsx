import { ReactNode } from "react";

import { Flex } from "@/common/Flex";
import { useLang } from "@/services/LangContext";

import CSSImage from "./assets/7skills.png";
import HTMLImage from "./assets/clear-code.png";
import JSImage from "./assets/patterns.png";
import PHPImage from "./assets/perfect-code.png";
import styles from "./Books.module.scss";
import { BooksKeys } from "./constants";
import { translator } from "./translator";

interface Book {
  name: BooksKeys;
  image: string;
}

const books: Book[] = [
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
];

export const useBooks = (): ReactNode[] => {
  const lang = useLang();

  return books.map((book) => (
    <Flex
      tag="img"
      center
      key={book.name}
      src={book.image}
      alt={translator[book.name][lang]}
      className={styles.image}
    />
  ));
};
