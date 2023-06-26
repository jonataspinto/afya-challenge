import { purchase } from '@/api/purchase';
import { useReducer } from 'react';

enum PurchaseActionKind {
  PURCHASE_REQUESTED = 'PURCHASE_REQUESTED',
  PAYMENT_SUCCESSFUL = 'PAYMENT_SUCCESSFUL',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
}

enum ReducerStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PurchaseAction {
  type: PurchaseActionKind;
  payload?: {
    purchase?: PurchaseResponse;
    error?: any;
  };
}

interface PurchaseState {
  status: 'idle' | 'loading' | 'success' | 'error';
  data?: PurchaseResponse;
  error?: unknown;
}

const reducer = (state: PurchaseState, action: PurchaseAction) => {
  const ACTIONS = {
    [PurchaseActionKind.PURCHASE_REQUESTED]: {
      ...state,
      status: ReducerStatus.LOADING,
    },
    [PurchaseActionKind.PAYMENT_SUCCESSFUL]: {
      ...state,
      status: ReducerStatus.SUCCESS,
      data: action.payload?.purchase,
    },
    [PurchaseActionKind.PAYMENT_FAILED]: {
      ...state,
      status: ReducerStatus.ERROR,
      error: action.payload?.error,
    },
  };

  if (!ACTIONS[action.type]) {
    return state;
  }

  return ACTIONS[action.type];
};

const initialState = {
  status: ReducerStatus.IDLE,
};

type UsePurchaseArgs = {
  onSuccess?: (response: PurchaseResponse) => void;
  onError?: (error: unknown) => void;
};

export const usePurchase = ({ onSuccess, onError }: UsePurchaseArgs = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendPurchaseOrder = async (body: PurchaseBody) => {
    dispatch({ type: PurchaseActionKind.PURCHASE_REQUESTED });

    try {
      const response = await purchase(body);

      dispatch({
        type: PurchaseActionKind.PAYMENT_SUCCESSFUL,
        payload: {
          purchase: response,
        },
      });

      onSuccess && onSuccess(response);
    } catch (error) {
      dispatch({
        type: PurchaseActionKind.PAYMENT_FAILED,
        payload: {
          error,
        },
      });
      onError && onError(error);
    }
  };

  return { state, sendPurchaseOrder };
};
