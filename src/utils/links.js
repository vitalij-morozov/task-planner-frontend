import { TfiUser } from 'react-icons/tfi';
import { SlDocs, SlDoc } from 'react-icons/sl';

const links = [
  { id: 1, text: 'all notes', path: 'all-notes', icon: <SlDocs /> },
  { id: 2, text: 'add note', path: 'add-note', icon: <SlDoc /> },
  { id: 3, text: 'profile', path: 'user-profile', icon: <TfiUser /> },
];

export default links;
