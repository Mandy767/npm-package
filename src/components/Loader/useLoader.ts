import { useReducer, useCallback } from 'react';
import { loaderReducer, initialState } from './reducer';

export const useLoader = () => {
  const [state, dispatch] = useReducer(loaderReducer, initialState);

  const startLoading = useCallback((message?: string) => {
    dispatch({ type: 'START_LOADING', payload: message });
  }, []);

  const stopLoading = useCallback(() => {
    dispatch({ type: 'STOP_LOADING' });
  }, []);

  return {
    isLoading: state.isLoading,
    message: state.message,
    startLoading,
    stopLoading,
  };
};