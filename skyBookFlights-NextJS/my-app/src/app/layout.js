import './globals.css';

export const metadata = {
  title: 'SkyBook Flights',
  description: 'A simple flight booking website built with Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
