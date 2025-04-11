import { ReactNode } from "react";

export interface InterestDetailProps {
  title: string;
  descriptions: ReactNode[];
  image: string;
  imageDescription: string;
  isAdult?: boolean;
}
