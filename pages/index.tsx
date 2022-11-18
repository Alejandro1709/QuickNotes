import PageLayout from '../components/PageLayout';
import useNotes from '../hooks/useNotes';

export default function Home() {
  const { notes } = useNotes();
  return (
    <PageLayout metaTitle='QuickNotes | Home'>
      <section className='mx-6 pt-6 md:mx-0'>
        <ul className='flex flex-col gap-6' role='list'>
          {notes.map((note) => (
            <li key={note.id}>
              <h2 className='text-2xl font-bold'>{note.createdAt}</h2>
              <div className='flex flex-row justify-between'>
                <p className='text-gray-600'>{note.text}</p>
                <div className='flex flex-row space-x-4'>
                  <a href='#'>Edit</a>
                  <button>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
