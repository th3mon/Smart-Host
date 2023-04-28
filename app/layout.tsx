import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Room Occupancy Optimization',
  description: 'Create by Przemysław Szelenberger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
