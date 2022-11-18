import { useRef } from 'react';
import useNotes from '../hooks/useNotes';
import type INote from '../types/note';

export default function AppHeader() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { initialNotes, addNote } = useNotes();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(initialNotes);

    const newNote: INote = {
      text: inputRef.current?.value || '',
    };

    try {
      fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      }).then(() => {
        addNote(newNote);

        if (inputRef.current) {
          inputRef.current.value = '';
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='flex flex-col gap-4 mx-6 pt-6 md:mx-0'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>QuickNotes App</h1>
        <p className='text-gray-500 text-lg'>
          Share your thoughts in a quick way!
        </p>
      </div>
      <form
        className='flex flex-row px-4 py-2 border rounded-md'
        onSubmit={handleSubmit}
      >
        <input
          className='flex-1 outline-none'
          type='text'
          placeholder='Today i ate an apple'
          ref={inputRef}
        />
        <button
          className='px-2 py-1 rounded-md text-white bg-blue-400 hover:bg-blue-500'
          type='submit'
        >
          Submit
        </button>
      </form>
    </header>
  );
}
