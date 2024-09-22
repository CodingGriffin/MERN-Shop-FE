import type { Metadata, Viewport } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: {
    template: 'סלון מארי - נתניה',
    default: 'סלון מארי - נתניה',
  },
  description: "סלון מארי - המוסד הותיק ביותר בנתניה לתלתלים ופאות",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-pink-50 text-gray-800 font-sans">{children}</body>
    </html>
  );
}
