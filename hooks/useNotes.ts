import { useContext } from 'react';
import { NoteContext } from '../context/noteContext';

export default function useNotes() {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }

  return context;
}
