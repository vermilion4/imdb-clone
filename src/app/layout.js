import Header from '@/components/Header';
import './globals.css';
import Head from './head';
import Providers from './Providers';

export default function RootLayout ({ children })
{
  return (
    <html lang="en">
      <Head />
      <body>
        <Providers>
        {/* Header */ }
        <Header />
        { children }
        </Providers>

      </body>
    </html>
  );
}
