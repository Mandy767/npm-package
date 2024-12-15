export interface LoaderState {
  isLoading: boolean;
  message?: string;
}

export type LoaderAction = 
  | { type: 'START_LOADING'; payload?: string }
  | { type: 'STOP_LOADING' };

export interface LoaderProps {
  /** Size of the loader in pixels */
  size?: number;
  /** Color of the loader */
  color?: string;
  /** Optional loading message */
  message?: string;
  /** Optional className for custom styling */
  className?: string;
}