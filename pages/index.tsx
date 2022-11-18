import { GetServerSideProps } from 'next';
import { prisma } from '../lib/prisma';
import NotesList from '../components/Noteslist';
import PageLayout from '../components/PageLayout';
import type INote from '../types/note';

export default function Home({ notes }: { notes: INote[] }) {
  return (
    <PageLayout metaTitle='QuickNotes | Home'>
      <section className='mx-6 pt-6 md:mx-0'>
        <NotesList notes={notes} />
      </section>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let notes = await prisma.note.findMany();
  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes)),
    },
  };
};
