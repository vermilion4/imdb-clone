import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import './globals.css';

import Providers from './Providers';

export const metadata = {
  title: 'IMDb',
  description: 'IMDb clone using Next and Tailwind',
  viewport: 'width=device-width, initial-scale=1',
  favicon: '/favicon.ico'
};

export default function RootLayout ({ children })
{
  return (
    <html lang="en">

      <body>
        <Providers>
          {/* Header */ }
          <Header />
          {/* Navbar */ }
          <Navbar />
          { children }
        </Providers>

      </body>
    </html>
  );
}
