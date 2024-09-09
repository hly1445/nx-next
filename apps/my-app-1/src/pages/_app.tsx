import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BlofinComponent } from '@nx-next/blofin-component';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-app-1!</title>
      </Head>
      <main className="app">
        <BlofinComponent/>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
