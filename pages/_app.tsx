import type { AppProps } from 'next/app';
import { NoteProvider } from '../context/noteContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoteProvider>
      <Component {...pageProps} />
    </NoteProvider>
  );
}
