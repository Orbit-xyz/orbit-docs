import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orbit-docs-eta.vercel.app'),
  title: {
    template: '%s | Orbit Docs',
    default: 'Orbit Docs',
  },
  description: 'Non-custodial pull payments and atomic batch payroll on Stellar Soroban.',
  icons: { icon: '/favicon.svg' },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
