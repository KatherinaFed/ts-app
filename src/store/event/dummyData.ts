import basketballImg from '../../assets/activities/basketball-img.png';
import swimmingImg from '../../assets/activities/swimming-img.png';
import tennisImg from '../../assets/activities/tennis-img.png';
import cyclingImg from '../../assets/activities/cycling-img.png';
import yogaImg from '../../assets/activities/yoga-img.png';
import user1 from '../../assets/friends/user1.png';
import user2 from '../../assets/friends/user2.png';
import user3 from '../../assets/friends/user3.png';
import user4 from '../../assets/friends/user4.png';

export type EventT = {
  id: number;
  theme: string;
  activity: string;
  date: string;
  time: string;
  location: string;
  creator: string;
  img: string;
};

export type FriendT = {
  id: number;
  username: string;
  location: string;
  img: string;
  // isFriend: boolean;
};

export const dummyDataAllEvents: EventT[] = [
  {
    id: 1,
    theme: 'Let`s go to play with me!',
    activity: 'Basketball',
    date: '08/06/2022',
    time: '16:00 - 19:00',
    location: 'Mauer Park',
    creator: 'Alex',
    img: basketballImg,
  },
  {
    id: 2,
    theme: 'I`m going to swim in an open pool',
    activity: 'Swimming',
    date: '08/06/2022',
    time: '17:00',
    location: 'Kreuzberg',
    creator: 'Sarah',
    img: swimmingImg,
  },
  {
    id: 3,
    theme: 'Who wants to play with me?',
    activity: 'Tennis',
    date: '08/06/2022',
    time: '20:00 - 21:30',
    location: 'Prenzlauer Berg',
    creator: 'Jessica',
    img: tennisImg,
  },
  {
    id: 4,
    theme: 'Gravel trip',
    activity: 'Cycling',
    date: '12/06/2022',
    time: '12:00 - 19:00',
    location: 'Rummelsburg Bucht',
    creator: 'Ekaterina',
    img: cyclingImg,
  },
  {
    id: 5,
    theme: 'Yoga time, girls!',
    activity: 'Yoga',
    date: '13/06/2022',
    time: '09:00 - 10:30',
    location: 'Stralau',
    creator: 'Sindy',
    img: yogaImg,
  },
  {
    id: 6,
    theme: 'Yoga time, girls!',
    activity: 'Yoga',
    date: '13/06/2022',
    time: '09:00 - 10:30',
    location: 'Stralau',
    creator: 'Sindy',
    img: yogaImg,
  },
];

export const dummyDataMyEvents: EventT[] = [
  {
    id: 6,
    theme: 'Gravel trip',
    activity: 'Cycling',
    date: '12/06/2022',
    time: '12:00 - 19:00',
    location: 'Rummelsburg Bucht',
    creator: 'Ekaterina',
    img: cyclingImg,
  },
  {
    id: 2,
    theme: 'Yoga time, girls!',
    activity: 'Yoga',
    date: '13/06/2022',
    time: '09:00 - 10:30',
    location: 'Stralau',
    creator: 'Sindy',
    img: yogaImg,
  },
];

export const friendsData: FriendT[] = [
  {
    id: 1,
    username: 'Alexander',
    location: 'Berlin',
    img: user1,
  },
  {
    id: 2,
    username: 'Sandra',
    location: '',
    img: user2,
  },
  {
    id: 3,
    username: 'Sophia',
    location: 'Lichtenberg',
    img: user3,
  },
  {
    id: 4,
    username: 'John',
    location: 'Prenzlauer Berg',
    img: user4,
  },
];
