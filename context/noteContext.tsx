import { createContext, useState } from 'react';
import type INote from '../types/note';
import type { INoteContext, INoteContextProps } from '../types/note';

export const NoteContext = createContext<INoteContext>({
  initialNotes: [],
  handleSetInitialNotes: () => {},
  addNote: (_note: INote) => {},
});

function NoteProvider({ children }: INoteContextProps) {
  const [initialNotes, setInitialNotes] = useState<INote[]>([]);

  const handleSetInitialNotes = (notes: INote[]) => {
    setInitialNotes(notes);
  };

  const addNote = (note: INote) => {
    console.log(initialNotes);
    setInitialNotes((prevNotes) => [...prevNotes, note]);
  };

  // const deleteNote = (note: INote) => {
  //   const filteredNotes = notes.filter((n) => n.id !== note.id);
  //   setInitialNotes(filteredNotes);
  // };

  return (
    <NoteContext.Provider
      value={{ initialNotes, handleSetInitialNotes, addNote }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export { NoteProvider };
