import { LoaderState, LoaderAction } from './types';

export const initialState: LoaderState = {
  isLoading: false,
  message: undefined,
};

export function loaderReducer(state: LoaderState, action: LoaderAction): LoaderState {
  switch (action.type) {
    case 'START_LOADING':
      return {
        isLoading: true,
        message: action.payload,
      };
    case 'STOP_LOADING':
      return {
        isLoading: false,
        message: undefined,
      };
    default:
      return state;
  }
}