import { purchaseDataMock } from '@/mock/purchase';

const mockPurchase = purchaseDataMock;

jest.mock('@/api/hooks/usePurchaseQuery', () => ({
  usePurchaseQuery: () => ({
    data: mockPurchase,
  }),
}));
