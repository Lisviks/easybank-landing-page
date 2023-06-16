import './globals.scss';

export const metadata = {
  title: 'Easybank landing page',
  description: 'Easybank landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
