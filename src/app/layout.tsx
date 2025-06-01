// import localFont from 'next/font/local';
import './assets/style/global.scss';

import { HeroUIProvider } from '@heroui/system';
import type { Metadata } from 'next';
import Script from 'next/script';

import Alert from './components/alert';
import Modal from './components/modal';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Bioli.ink',
  description: '聚合你的所有信息',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Script id='statistics'>
        {
          `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement('script');
              hm.src = 'https://hm.baidu.com/hm.js?d539ce12bcfb3af4534989f70605f588';
              var s = document.getElementsByTagName('script')[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
        }
      </Script>

      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className='antialiased'
        >
        <HeroUIProvider>
          {children}
          
          <Modal />
          <Alert />
        </HeroUIProvider>
      </body>
    </html>
  );
}
