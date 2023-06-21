import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PaymentForm } from '.';
import { LangProvider, ptBR } from '@/contexts/langContext';

const mockUserData = {
  cardNumber: '0200 0000 4000 0000',
  cardValidDate: '12/05',
  cardCvv: '056',
  cardUserName: 'Kent C. Dodds',
  cardUserCpf: '82321814608',
  coupon: 'meioameio',
  installment: '',
};

const handleSubmitMock = jest.fn();

const renderPaymentForm = ({ handleSubmit }: { handleSubmit: () => void }) => (
  <LangProvider>
    <PaymentForm onSubmit={handleSubmit} />
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

    // TODO: test this case when implement react-hook-form
    expect(submitButton).not.toBeDisabled();

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

    await userEvent.type(cardNumberField, mockUserData.cardNumber);
    await userEvent.type(cardValidDateField, mockUserData.cardValidDate);
    await userEvent.type(cardCvvField, mockUserData.cardCvv);
    await userEvent.type(cardUserNameField, mockUserData.cardUserName);
    await userEvent.type(cardUserCpfField, mockUserData.cardUserCpf);
    await userEvent.type(couponField, mockUserData.coupon);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    await fireEvent.click(submitButton);

    expect(handleSubmitMock).toBeCalled();
  });
});
