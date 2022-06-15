export const timeline: Array<string> = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
];

export const slots: Array<string> = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

type TypeEvents = {
  id: number;
  name: string;
  img: string;
  startOfEvent: string;
  endOfEvent: string;
  title: string;
};

export const usersTimelineEvents: TypeEvents[] = [
  {
    id: 1,
    name: 'John',
    img: 'lalala',
    startOfEvent: '12:00',
    endOfEvent: '14:00',
    title: 'Swimming in a pool',
  },
  {
    id: 2,
    name: 'Sarah',
    img: 'asas',
    startOfEvent: '11:00',
    endOfEvent: '13:00',
    title: 'Competition',
  },
  {
    id: 3,
    name: 'Lealoo',
    img: 'laladdddla',
    startOfEvent: '16:00',
    endOfEvent: '18:00',
    title: 'Relaxing in a pool',
  },
  {
    id: 4,
    name: 'Kate',
    img: 'lalaldddda',
    startOfEvent: '08:00',
    endOfEvent: '10:00',
    title: 'training',
  },
];

export const users: Array<string> = [
  'John',
  'Sarah',
  'kate',
  'Lealoo',
  'Michael',
  'John',
  'Sarah',
  'kate',
  'Lealoo',
  'Michael',
  'John',
  'Sarah',
  'kate',
  'Lealoo',
  'Michael',
];
