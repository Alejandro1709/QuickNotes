import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout metaTitle='QuickNotes | Home'>
      <section className='mx-6 pt-6 md:mx-0'>
        <ul className='flex flex-col gap-6' role='list'>
          <li>
            <h2 className='text-2xl font-bold'>2022-11-18 10:23 AM</h2>
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>This is a note</p>
              <div className='flex flex-row space-x-4'>
                <a href='#'>Edit</a>
                <button>Delete</button>
              </div>
            </div>
          </li>
          <li>
            <h2 className='text-2xl font-bold'>2022-11-18 10:27 AM</h2>
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>This is another note</p>
              <div className='flex flex-row space-x-4'>
                <a href='#'>Edit</a>
                <button>Delete</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
