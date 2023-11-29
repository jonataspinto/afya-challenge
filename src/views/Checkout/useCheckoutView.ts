import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import { usePurchase } from '@/api/hooks/usePurchase';
import { IFormInput } from '@/components/PaymentForm';
import { useLang } from '@/contexts/langContext';
import { creditCardBrandMapper } from '@/utils/creditCard';
import { paymentFormSchema } from '@/components/PaymentForm/schema';
import { removeMasks } from '@/utils/removeMasks';
import { usePlansQuery } from '@/api/hooks/usePlansQuery';

export const useCheckoutView = () => {
  const { data: plans } = usePlansQuery();
  const router = useRouter();
  const { register, handleSubmit, formState, watch } = useForm<IFormInput>({
    // @ts-ignore
    resolver: yupResolver(paymentFormSchema),
    mode: 'onBlur',
  });

  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(
    undefined,
  );

  const selectedPlanData = useMemo(
    () => plans?.find(({ id }) => id === Number(selectedPlanId)),
    [plans, selectedPlanId],
  );

  const {
    lang: { purchaseErrorMessage },
  } = useLang();

  const { sendPurchaseOrder, state } = usePurchase({
    onError: () => {
      toast.error(purchaseErrorMessage);
    },
    onSuccess: () => {
      router.push('/confirmation');
    },
  });

  const onSubmit = useCallback<SubmitHandler<IFormInput>>(
    async (data: IFormInput) => {
      const payload: PurchaseBody = {
        ...data,
        offerId: Number(selectedPlanId),
        gateway: 'iugu',
        userId: 1,
      };

      sendPurchaseOrder(
        removeMasks(payload, ['.', '-', ' '], ['creditCardHolder']),
      );
    },
    [selectedPlanId, sendPurchaseOrder],
  );

  const creditCardNumberValue = watch('creditCardNumber');

  const selectedCard = useDebounce(
    creditCardBrandMapper.find(({ pattern }) =>
      new RegExp(pattern).test(
        String(creditCardNumberValue).replaceAll(' ', '').replaceAll('_', ''),
      ),
    ),
    800,
  );

  return {
    selectedPlanId,
    setSelectedPlanId,
    selectedPlanData,
    onSubmit,
    register,
    handleSubmit,
    formState,
    selectedCard,
    state,
  };
};
