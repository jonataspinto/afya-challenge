import { HTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import { masks } from '../PaymentForm/masks';

import styles from './input.module.scss';
import { FieldError } from 'react-hook-form';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  register?: any;
  maskKey?: keyof typeof masks;
  error?: FieldError;
}

export const Input = ({
  id,
  label,
  placeholder,
  className,
  maskKey,
  register,
  type,
  error,
  ...restProps
}: InputProps) => {
  return (
    <div
      className={`${styles.formField} ${className} ${
        error ? styles.hasError : ''
      }`}
    >
      <label htmlFor={id} title={label}>
        {label}
      </label>
      {maskKey ? (
        <InputMask
          mask={masks[maskKey]}
          title={label}
          id={id}
          placeholder={placeholder}
          type={type}
          {...restProps}
          {...register}
        />
      ) : (
        <input
          title={label}
          id={id}
          placeholder={placeholder}
          type={type}
          {...restProps}
          {...register}
        />
      )}
    </div>
  );
};
