import { LabelHTMLAttributes } from 'react';
import styles from './emailTag.module.scss';

interface EmailTagProps extends LabelHTMLAttributes<HTMLLabelElement> {
  email: string;
}

export const EmailTag = ({
  email,
  className,
  ...restProps
}: EmailTagProps) => {
  return (
    <label
      className={`${styles.container} ${className ? className : ''}`}
      {...restProps}
    >
      {email}
    </label>
  );
};
