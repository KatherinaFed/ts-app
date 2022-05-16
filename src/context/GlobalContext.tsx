import { createContext } from 'react';

interface GlobalContextInterface {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  showEventModal: boolean;
  setShowEventModal: (prop: boolean) => any;
  daySelected: any;
  setDaySelected: (index: number) => void;
  selectedEvent: any;
  setSelectedEvent: (prop: any) => void;
}

const GlobalContext = createContext({} as GlobalContextInterface);

export default GlobalContext;
