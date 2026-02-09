import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen bg-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
