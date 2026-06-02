import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '매장 프로필 | MINKMUI · PETIT PALAIS',
  description: 'MINKMUI · PETIT PALAIS 매장 프로필 대시보드',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
