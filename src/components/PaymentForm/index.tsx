'use client';
import { FormHTMLAttributes } from 'react';
import { useLang } from '@/contexts/langContext';
import { Button } from '../Button';

import styles from './paymentForm.module.scss';

interface PaymentFormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const PaymentForm = ({ onSubmit, ...restProps }: PaymentFormProps) => {
  const { lang } = useLang();

  return (
    <form
      {...restProps}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
      name={lang.paymentForm.title}
      title={lang.paymentForm.title}
      className={styles.container}
    >
      <div className={`${styles.formField} ${styles.cardNumberField}`}>
        <label
          htmlFor={lang.paymentForm.cardNumberField.id}
          title={`label: ${lang.paymentForm.cardNumberField.label}`}
        >
          {lang.paymentForm.cardNumberField.label}
        </label>
        <input
          title={lang.paymentForm.cardNumberField.label}
          id={lang.paymentForm.cardNumberField.id}
          placeholder={lang.paymentForm.cardNumberField.placeholder}
          type="number_format"
          maxLength={16}
        />
      </div>

      <div className={`${styles.formField} ${styles.cardValidDateField}`}>
        <label
          htmlFor={lang.paymentForm.cardValidDateField.id}
          title={`label: ${lang.paymentForm.cardValidDateField.label}`}
        >
          {lang.paymentForm.cardValidDateField.label}
        </label>
        <input
          title={lang.paymentForm.cardValidDateField.label}
          id={lang.paymentForm.cardValidDateField.id}
          placeholder={lang.paymentForm.cardValidDateField.placeholder}
          type="text"
        />
      </div>

      <div className={`${styles.formField} ${styles.cardCvvField}`}>
        <label
          htmlFor={lang.paymentForm.cardCvvField.id}
          title={`label: ${lang.paymentForm.cardCvvField.label}`}
        >
          {lang.paymentForm.cardCvvField.label}
        </label>
        <input
          title={lang.paymentForm.cardCvvField.label}
          id={lang.paymentForm.cardCvvField.id}
          placeholder={lang.paymentForm.cardCvvField.placeholder}
          type="number_format"
        />
      </div>

      <div className={`${styles.formField} ${styles.cardUserNameField}`}>
        <label
          htmlFor={lang.paymentForm.cardUserNameField.id}
          title={`label: ${lang.paymentForm.cardUserNameField.label}`}
        >
          {lang.paymentForm.cardUserNameField.label}
        </label>
        <input
          title={lang.paymentForm.cardUserNameField.label}
          id={lang.paymentForm.cardUserNameField.id}
          placeholder={lang.paymentForm.cardUserNameField.placeholder}
          type="text"
        />
      </div>

      <div className={`${styles.formField} ${styles.cardUserCpfField}`}>
        <label
          htmlFor={lang.paymentForm.cardUserCpfField.id}
          title={`label: ${lang.paymentForm.cardUserCpfField.label}`}
        >
          {lang.paymentForm.cardUserCpfField.label}
        </label>
        <input
          title={lang.paymentForm.cardUserCpfField.label}
          id={lang.paymentForm.cardUserCpfField.id}
          placeholder={lang.paymentForm.cardUserCpfField.placeholder}
          type="number_format"
        />
      </div>

      <div className={`${styles.formField} ${styles.couponField}`}>
        <label
          htmlFor={lang.paymentForm.couponField.id}
          title={`label: ${lang.paymentForm.couponField.label}`}
        >
          {lang.paymentForm.couponField.label}
        </label>
        <input
          title={lang.paymentForm.couponField.label}
          id={lang.paymentForm.couponField.id}
          placeholder={lang.paymentForm.couponField.placeholder}
          type="text"
        />
      </div>

      <Button type="submit" className={styles.submitButton}>
        {lang.paymentForm.submitButton.label}
      </Button>
    </form>
  );
};
