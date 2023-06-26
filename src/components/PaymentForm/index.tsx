'use client';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLang } from '@/contexts/langContext';
import { formatPlanInstallment } from '@/utils/formatters';
import { Button } from '../Button';
import { Input } from '../Input';

import styles from './paymentForm.module.scss';

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

type PaymentFormProps = {
  onSubmit: SubmitHandler<IFormInput>;
  selectedPlan?: PlanDTO;
  isLoading?: boolean;
};

export const PaymentForm = ({
  onSubmit,
  selectedPlan,
  isLoading,
  ...restProps
}: PaymentFormProps) => {
  const { lang } = useLang();
  const { register, handleSubmit, formState } = useForm<IFormInput>({});
  const installments = useMemo(
    () =>
      selectedPlan
        ? Array(selectedPlan?.installments)
            .fill({ fullPrice: selectedPlan?.fullPrice })
            .map(
              (
                data,
                index,
              ): { istallmentValue: number; installmentLabel: string } => ({
                ...data,
                istallmentValue: index + 1,
                installmentLabel: formatPlanInstallment({
                  ...selectedPlan,
                  installments: index + 1,
                }),
              }),
            )
        : [],
    [selectedPlan],
  );

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
          // required: true,
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
          // required: true,
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
          // required: true,
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
          // required: true,
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
          // required: true,
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

      <div className={`${styles.formField} ${styles.installmentsField} }`}>
        <label
          htmlFor={lang.paymentForm.installmentsNumberField.id}
          title={lang.paymentForm.installmentsNumberField.label}
        >
          {lang.paymentForm.installmentsNumberField.label}
        </label>
        <select
          title={lang.paymentForm.installmentsNumberField.label}
          id={lang.paymentForm.installmentsNumberField.id}
          placeholder={lang.paymentForm.installmentsNumberField.placeholder}
          {...register('installments', {
            // required: true,
          })}
        >
          {installments?.map((installmentOption) => (
            <option
              key={installmentOption.installmentLabel}
              value={installmentOption.istallmentValue}
            >
              {installmentOption.installmentLabel}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        className={styles.submitButton}
        disabled={!formState.isValid || isLoading}
      >
        {isLoading ? 'Enviando...' : lang.paymentForm.submitButton.label}
      </Button>
    </form>
  );
};
