import React, { type FC } from 'react';

export const Books: FC = () => {
  return (
    <>
      <div className="scroll_id" id="books"></div>
      <section
        className="books section-grey block-center observer-section"
        data-id="books"
      >
        <h2 className="second-title">Прочитанные книги</h2>

        <p className="section-description">
          Тут указаны не все прочитанные мной книги, а только те книги, которые
          произвели на меня наибольшее впечатление.
        </p>

        <div className="books-list"></div>
      </section>
    </>
  );
};
