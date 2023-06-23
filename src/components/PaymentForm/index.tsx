'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLang } from '@/contexts/langContext';
import { Button } from '../Button';
import { Input } from '../Input';

type IFormInput = {
  couponCode?: string;
  creditCardCPF: string;
  creditCardCVV: number;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: number;
  gateway?: string;
  installments: number;
  offerId: string;
  userId?: string;
};

import styles from './paymentForm.module.scss';

type PaymentFormProps = {
  onSubmit: SubmitHandler<IFormInput>;
};

export const PaymentForm = ({ onSubmit, ...restProps }: PaymentFormProps) => {
  const { lang } = useLang();
  const { register, handleSubmit, formState } = useForm<IFormInput>({});

  return (
    <form
      {...restProps}
      onSubmit={handleSubmit(onSubmit)}
      name={lang.paymentForm.title}
      title={lang.paymentForm.title}
      className={styles.container}
    >
      <Input
        className={`${styles.cardNumberField}`}
        id={lang.paymentForm.cardNumberField.id}
        label={lang.paymentForm.cardNumberField.label}
        placeholder={lang.paymentForm.cardNumberField.placeholder}
        type="number_format"
        maskKey="creditCardNumber"
        register={register('creditCardNumber', {
          required: true,
        })}
        error={formState?.errors?.creditCardNumber}
      />

      <Input
        className={`${styles.cardValidDateField}`}
        id={lang.paymentForm.cardValidDateField.id}
        label={lang.paymentForm.cardValidDateField.label}
        placeholder={lang.paymentForm.cardValidDateField.placeholder}
        type="number_format"
        maskKey="creditCardExpirationDate"
        register={register('creditCardExpirationDate', {
          required: true,
        })}
        error={formState?.errors?.creditCardExpirationDate}
      />

      <Input
        className={`${styles.cardCvvField}`}
        id={lang.paymentForm.cardCvvField.id}
        label={lang.paymentForm.cardCvvField.label}
        placeholder={lang.paymentForm.cardCvvField.placeholder}
        type="number_format"
        maskKey="creditCardCVV"
        register={register('creditCardCVV', {
          required: true,
        })}
        error={formState?.errors?.creditCardCVV}
      />

      <Input
        className={`${styles.cardUserNameField}`}
        id={lang.paymentForm.cardUserNameField.id}
        label={lang.paymentForm.cardUserNameField.label}
        placeholder={lang.paymentForm.cardUserNameField.placeholder}
        type="text"
        register={register('creditCardHolder', {
          required: true,
        })}
        error={formState?.errors?.creditCardHolder}
      />

      <Input
        className={`${styles.cardUserCpfField}`}
        id={lang.paymentForm.cardUserCpfField.id}
        label={lang.paymentForm.cardUserCpfField.label}
        placeholder={lang.paymentForm.cardUserCpfField.placeholder}
        type="number_format"
        maskKey="creditCardCPF"
        register={register('creditCardCPF', {
          required: true,
        })}
        error={formState?.errors?.creditCardCPF}
      />

      <Input
        className={`${styles.couponField}`}
        id={lang.paymentForm.couponField.id}
        label={lang.paymentForm.couponField.label}
        placeholder={lang.paymentForm.couponField.placeholder}
        type="number_format"
        register={register('couponCode', {})}
      />

      <Button
        type="submit"
        className={styles.submitButton}
        disabled={!formState.isValid}
      >
        {lang.paymentForm.submitButton.label}
      </Button>
    </form>
  );
};
