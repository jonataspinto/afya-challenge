import { availablePlansMock } from '@/mock/availablePlans';

const mockAvailablePlans = availablePlansMock;

jest.mock('@/api/hooks/usePlansQuery', () => ({
  usePlansQuery: () => ({
    data: mockAvailablePlans,
  }),
}));
