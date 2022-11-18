import { createContext, useState } from 'react';
import type INote from '../types/note';
import type { INoteContext, INoteContextProps } from '../types/note';

export const NoteContext = createContext<INoteContext>({
  notes: [],
});

function NoteProvider({ children }: INoteContextProps) {
  const [notes, setNotes] = useState<INote[]>([
    { id: 1, text: 'This is my first note', createdAt: '2022-11-18 10:23 AM' },
    { id: 2, text: 'This is my second note', createdAt: '2022-11-18 10:34 AM' },
  ]);

  return (
    <NoteContext.Provider value={{ notes }}>{children}</NoteContext.Provider>
  );
}

export { NoteProvider };
