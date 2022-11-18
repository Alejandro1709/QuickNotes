import Note from './Note';
import type INote from '../types/note';

interface INotesListProps {
  notes: INote[];
}

export default function NotesList({ notes }: INotesListProps) {
  return (
    <ul className='flex flex-col gap-6' role='list'>
      {notes && notes.length > 0
        ? notes.map((note) => <Note key={note.id} note={note} />)
        : null}
    </ul>
  );
}
