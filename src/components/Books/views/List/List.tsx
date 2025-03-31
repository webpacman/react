import { FC, PropsWithChildren } from "react";

interface ListProps {}

export const List: FC<PropsWithChildren<ListProps>> = ({ children }) => {
  return <div className="books-list"></div>;
};
