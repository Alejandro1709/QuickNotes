import Head from 'next/head';

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
    <div className=''>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDesc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{children}</main>
    </div>
  );
}
