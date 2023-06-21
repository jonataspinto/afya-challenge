import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export const Button = ({
  className,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...restProps}
    className={`${styles.container} ${className ? className : ''}`}
  />
);
