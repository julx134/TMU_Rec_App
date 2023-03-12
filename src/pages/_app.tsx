import NavLayout from '@/components/Navbar/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const router = useRouter();

  const getContent = () => {
    // array of all the paths that doesn't need layout
    if ([`/`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <NavLayout>
        <Component {...pageProps} />{" "}
      </NavLayout>
    );
  };

  return (
    <>{getContent()}</>
  )
}
