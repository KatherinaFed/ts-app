import { createContext } from 'react';

interface GlobalContextInterface {
  monthIndex: number;
  setMonthIndex(index: number): void;
}

const GlobalContext = createContext({} as GlobalContextInterface);

export default GlobalContext;
