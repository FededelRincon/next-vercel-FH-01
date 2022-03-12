import { NextPage } from 'next';
import { AppProps } from 'next/app';
// import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  // getLayout?: (page: ReactElement) => ReactNode  //es igual al de abajo, pero abajo no importa nada
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ( (page)=>page )


  // return <Component {...pageProps} />
  
  return getLayout(
    <Component {...pageProps} />
  )
}

export default MyApp
