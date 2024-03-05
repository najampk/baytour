import Layout from '../components/layout'
import '../styles/globals.css'

import { Inter } from '@next/font/google'
 
const inter = Inter({ subsets: ["latin"] });
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
