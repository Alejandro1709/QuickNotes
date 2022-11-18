import { createContext, useState } from 'react';
import type INote from '../types/note';
import type { INoteContext, INoteContextProps } from '../types/note';

export const NoteContext = createContext<INoteContext>({
  notes: [],
  addNote: (_note: INote) => {},
});

function NoteProvider({ children }: INoteContextProps) {
  const [notes, setNotes] = useState<INote[]>([]);

  const addNote = (note: INote) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export { NoteProvider };
