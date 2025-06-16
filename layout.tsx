export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-amber-50 text-emerald-900 p-4 md:p-12 font-serif">
        {children}
      </body>
    </html>
  );
}