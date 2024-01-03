import classNames from 'classnames';
import React from 'react';
import styles from 'src/components/title/title.module.scss';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'large' | 'medium' | 'small';
};

export const Title: React.FC<TitleProps> = ({
  size = 'medium',
  children,
  className,
}) => {
  return (
    <h1 className={classNames(styles.title, styles[size], className)}>
      {children}
    </h1>
  );
};
