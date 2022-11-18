export default function AppHeader() {
  return (
    <header className='flex flex-col gap-4 mx-6 pt-6 md:mx-0'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>QuickNotes App</h1>
        <p className='text-gray-500 text-lg'>
          Share your thoughts in a quick way!
        </p>
      </div>
      <form className='flex flex-row px-4 py-2 border rounded-md'>
        <input
          className='flex-1 outline-none'
          type='text'
          placeholder='Today i ate an apple'
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
