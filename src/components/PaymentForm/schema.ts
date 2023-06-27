import * as yup from 'yup';

export const paymentFormSchema = yup.object({
  couponCode: yup.string(),
  creditCardCPF: yup.string().required().min(11),
  creditCardCVV: yup.string().required().min(3),
  creditCardExpirationDate: yup.string().required().min(5),
  creditCardHolder: yup.string().required().min(3),
  creditCardNumber: yup.string().required().min(10, ''),
  installments: yup.string().required(),
});
