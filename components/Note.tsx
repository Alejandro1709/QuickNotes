import type INote from '../types/note';
interface INoteProps {
  note: INote;
}

export default function Note({ note }: INoteProps) {
  return (
    <li>
      <h2 className='text-2xl font-bold'>{note.createdAt}</h2>
      <div className='flex flex-row justify-between'>
        <p className='text-gray-600'>{note.text}</p>
        <div className='flex flex-row space-x-4'>
          <a href='#'>Edit</a>
          <button>Delete</button>
        </div>
      </div>
    </li>
  );
}
