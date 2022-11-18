import { createContext, useState } from 'react';
import type INote from '../types/note';
import type { INoteContext, INoteContextProps } from '../types/note';

export const NoteContext = createContext<INoteContext>({
  initialNotes: [],
  addNote: (_note: INote) => {},
  deleteNote: (_note: INote) => {},
});

function NoteProvider({ children, notes }: INoteContextProps) {
  const [initialNotes, setInitialNotes] = useState<INote[]>(notes);

  const addNote = (note: INote) => {
    setInitialNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (note: INote) => {
    const filteredNotes = notes.filter((n) => n.id !== note.id);
    setInitialNotes(filteredNotes);
  };

  return (
    <NoteContext.Provider value={{ initialNotes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export { NoteProvider };
