import { HTMLAttributes } from 'react';
import { QuestionMark } from '../icons/QuestionMark';
import styles from './tooltip.module.scss';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const Tooltip = ({ label, className, ...restProps }: TooltipProps) => {
  return (
    <div
      role="tooltip"
      className={`${styles.container} ${className}`}
      {...restProps}
    >
      {label} <QuestionMark />
    </div>
  );
};
