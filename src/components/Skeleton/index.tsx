import { HtmlHTMLAttributes } from 'react';
import styles from './skeleton.module.scss';

interface SkeletonProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Skeleton = ({ style, className }: SkeletonProps) => (
  <div className={`${styles.container} ${className}`} style={style}></div>
);
