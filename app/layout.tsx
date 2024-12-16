import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils/styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '961 News - Breaking News Dashboard',
  description: 'Breaking news management dashboard for 961 News',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen bg-gray-50 relative overflow-hidden">
          <Sidebar />
          <main className={cn(
            "flex-1 transition-[margin] duration-300 ease-in-out",
            "ml-[var(--sidebar-width,220px)]"
          )}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}