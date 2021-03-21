import { IUser } from '../types/User'

const users: Array<IUser> = [
  {
    id: 1,
    name: 'Khoa Le',
    username: 'khoa.le',
    email: 'khoa.le@example.com',
  },
  {
    id: 2,
    name: 'Greg Rogers',
    username: 'greg.rogers',
    email: 'greg.rogers@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 3,
    name: 'Tyler Frazier',
    username: 'tyler.frazier',
    email: 'tyler.frazier@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  },
  {
    id: 4,
    name: 'Beverly Banks',
    username: 'beverly.banks',
    email: 'beverly.banks@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/71.jpg',
  },
];

export default users;