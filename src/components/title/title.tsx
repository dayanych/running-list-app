import classNames from 'classnames';
import React from 'react';
import styles from 'src/components/title/title.module.scss';

type TitleProps = {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
};

export const Title: React.FC<TitleProps> = ({ size = 'medium', children }) => {
  return <h1 className={classNames(styles.title, styles[size])}>{children}</h1>;
};
