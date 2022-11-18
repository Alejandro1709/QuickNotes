import { createContext, useState } from 'react';
import type INote from '../types/note';
import type { INoteContext, INoteContextProps } from '../types/note';

export const NoteContext = createContext<INoteContext>({
  notes: [],
  addNote: (_note: INote) => {},
  deleteNote: (_note: INote) => {},
});

function NoteProvider({ children }: INoteContextProps) {
  const [notes, setNotes] = useState<INote[]>([]);

  const addNote = (note: INote) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (note: INote) => {
    const filteredNotes = notes.filter((n) => n.id !== note.id);
    setNotes(filteredNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export { NoteProvider };
