export type Coin = 'H' | 'T';

export interface State {
  columns: string[][];
  charMap: string[];
}

export type Action = { type: 'ADD_COIN'; payload: Coin } | { type: 'RESET' };
