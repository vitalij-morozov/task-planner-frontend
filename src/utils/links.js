import { IoStatsChartOutline } from 'react-icons/io5';
import { TfiUser } from 'react-icons/tfi';
import { SlDocs, SlDoc } from 'react-icons/sl';

const links = [
  { id: 1, text: 'all notes', path: 'all-notes', icon: <SlDocs /> },
  { id: 2, text: 'add note', path: 'add-note', icon: <SlDoc /> },
  { id: 3, text: 'profile', path: 'user-profile', icon: <TfiUser /> },
  { id: 4, text: 'stats', path: 'stats', icon: <IoStatsChartOutline /> },
];

export default links;
