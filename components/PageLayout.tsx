import Head from 'next/head';
import AppWrapper from './AppWrapper';

interface IPageLayoutProps {
  metaTitle: string;
  metaDesc?: string;
  children: React.ReactNode;
}

export default function PageLayout({
  children,
  metaTitle = 'QuickNotes',
  metaDesc = 'QuickNotes is a simple note-taking app.',
}: IPageLayoutProps) {
  return (
    <AppWrapper>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDesc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{children}</main>
    </AppWrapper>
  );
}
