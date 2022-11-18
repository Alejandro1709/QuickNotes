import { useState, useRef } from 'react';
import useNotes from '../hooks/useNotes';
import type INote from '../types/note';
interface INoteProps {
  note: INote;
}

export default function Note({ note }: INoteProps) {
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { initialNotes, deleteNote } = useNotes();

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
  };

  const handleConfirmUpdate = () => {
    const noteToUpdate = initialNotes.find((n) => n.id === note.id);

    if (!noteToUpdate) return;

    noteToUpdate.text = inputRef.current?.value || '';

    setIsEditing(false);
  };

  const handleCancelUpdate = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    const noteToDelete = initialNotes.find((n) => n.id === note.id);

    if (!noteToDelete) return;

    deleteNote(noteToDelete);
  };

  return (
    <li>
      <h2 className='text-2xl font-bold'>{note.createdAt}</h2>
      <div className='flex flex-row gap-2 justify-between'>
        {isEditing ? (
          <input
            className='flex-1 border p-1 mr-4'
            type='text'
            value={inputRef.current?.value}
            ref={inputRef}
            onChange={handleInputChange}
          />
        ) : (
          <p>{note.text}</p>
        )}
        {isEditing ? (
          <div className='flex flex-row space-x-4'>
            <button onClick={handleConfirmUpdate}>Update</button>
            <button onClick={handleCancelUpdate}>Cancel</button>
          </div>
        ) : (
          <div className='flex flex-row space-x-4'>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}
      </div>
    </li>
  );
}
