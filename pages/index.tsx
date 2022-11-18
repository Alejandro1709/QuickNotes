import NotesList from '../components/Noteslist';
import PageLayout from '../components/PageLayout';
import useNotes from '../hooks/useNotes';

export default function Home() {
  const { notes } = useNotes();
  return (
    <PageLayout metaTitle='QuickNotes | Home'>
      <section className='mx-6 pt-6 md:mx-0'>
        <NotesList notes={notes} />
      </section>
    </PageLayout>
  );
}
