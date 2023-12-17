import React, { type FC } from 'react';
// import styles from './About.module.scss';

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <p className="footer-about">
      &copy;&nbsp;Шевчук&nbsp;Виталий 1995&nbsp;-&nbsp;2023
    </p>
  );
};
