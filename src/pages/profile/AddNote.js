import React from 'react';
import { useState } from 'react';

function AddNote() {
  const [text, setText] = useState(``);

  const handleKeyDown = () => {};
  console.log('text ===', text);
  return <div></div>;
}

export default AddNote;
