'use client';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return;

  return (
    <html lang="en">
      <body>
        <Head>
          <title>A random app with random staffs</title>
        </Head>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex h-full w-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
