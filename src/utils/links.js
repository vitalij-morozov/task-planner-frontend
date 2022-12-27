import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'all notes', path: 'all-notes', icon: <MdQueryStats /> },
  { id: 2, text: 'add note', path: 'add-note', icon: <FaWpforms /> },
  { id: 3, text: 'profile', path: 'user-profile', icon: <ImProfile /> },
  { id: 4, text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
];

export default links;
