type PlanDTO = {
  id: string | number;
  title: string;
  description: string;
  order: number;
  discountPercentage: number;
  fullPrice: number;
  discountAmmount: number;
  installments: number;
};

type PurchaseBody = {
  couponCode?: string;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: number;
  offerId: number;
  userId: number;
};

type PurchaseResponse = PurchaseBody & {
  id: number;
};
