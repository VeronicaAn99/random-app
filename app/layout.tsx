'use client';

import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>A random app with random staffs</title>
        </Head>
        {/*<SidebarProvider>*/}
        <main className="flex h-full w-full">{children}</main>
        {/*</SidebarProvider>*/}
      </body>
    </html>
  );
}
