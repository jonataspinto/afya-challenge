import userEvent from '@testing-library/user-event';
import { FormEventHandler } from 'react';
import { FormState } from 'react-hook-form';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LangProvider, ptBR } from '@/contexts/langContext';
import { availablePlansMock } from '@/mock/availablePlans';
import { IFormInput, PaymentForm } from '.';

const mockUserData = {
  cardNumber: '0200 0000 4000 0000',
  cardValidDate: '12/05',
  cardCvv: '056',
  cardUserName: 'Kent C. Dodds',
  cardUserCpf: '82321814608',
  coupon: 'meioameio',
  installment: '',
};

const handleSubmitMock = jest.fn((e) => e.preventDefault());
const registerMock = jest.fn();

const renderPaymentForm = ({
  handleSubmit,
  isLoading = false,
}: {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
}) => (
  <LangProvider>
    <PaymentForm
      onSubmit={handleSubmit}
      selectedPlan={availablePlansMock[0]}
      register={registerMock}
      formState={{ isValid: true } as FormState<IFormInput>}
      isLoading={isLoading}
    />
  </LangProvider>
);

describe('PaymentForm', () => {
  it('should render a form with title equals paymentForm.title', async () => {
    render(renderPaymentForm({ handleSubmit: handleSubmitMock }));

    expect(
      screen.getByRole('form', {
        name: ptBR.paymentForm.title,
      }),
    ).toBeInTheDocument();
  });

  it('should enter values and call props.onSubmit() when form is submitted', async () => {
    render(renderPaymentForm({ handleSubmit: handleSubmitMock }));

    const submitButton = screen.getByRole('button', {
      name: new RegExp(ptBR.paymentForm.submitButton.label),
    });

    const cardNumberField = screen.getByRole('textbox', {
      name: new RegExp(ptBR.paymentForm.cardNumberField.label, 'i'),
    });

    const cardValidDateField = screen.getByRole('textbox', {
      name: new RegExp(ptBR.paymentForm.cardValidDateField.label, 'i'),
    });

    const cardCvvField = screen.getByRole('textbox', {
      name: new RegExp(ptBR.paymentForm.cardCvvField.label, 'i'),
    });

    const cardUserNameField = screen.getByRole('textbox', {
      name: new RegExp(ptBR.paymentForm.cardUserNameField.label, 'i'),
    });

    const cardUserCpfField = screen.getByRole('textbox', {
      name: new RegExp(ptBR.paymentForm.cardUserCpfField.label, 'i'),
    });

    const couponField = screen.getByRole('textbox', {
      name: new RegExp(ptBR.paymentForm.couponField.label, 'i'),
    });

    const installment1 = screen.getByText('1x de R$ 540,00');

    await userEvent.type(cardNumberField, mockUserData.cardNumber);
    await userEvent.type(cardValidDateField, mockUserData.cardValidDate);
    await userEvent.type(cardCvvField, mockUserData.cardCvv);
    await userEvent.type(cardUserNameField, mockUserData.cardUserName);
    await userEvent.type(cardUserCpfField, mockUserData.cardUserCpf);
    await userEvent.type(couponField, mockUserData.coupon);
    await userEvent.click(installment1);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    await waitFor(async () => {
      await fireEvent.click(submitButton);
    });

    expect(handleSubmitMock).toBeCalled();
  });

  it('should submit button with loading label', async () => {
    render(
      renderPaymentForm({ handleSubmit: handleSubmitMock, isLoading: true }),
    );

    const submitButton = screen.getByRole('button', {
      name: /Enviando.../i,
    });
  });
});
