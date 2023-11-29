import '@testing-library/jest-dom';
import './src/mock/queries/usePlansQuery.mock';
import './src/mock/queries/usePurchaseQuery.mock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
