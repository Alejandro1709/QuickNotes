import Note from './Note';
import type INote from '../types/note';

interface INotesListProps {
  notes: INote[];
}

export default function NotesList({ notes }: INotesListProps) {
  return (
    <ul className='flex flex-col gap-6' role='list'>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
}
