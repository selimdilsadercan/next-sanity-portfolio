import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Selim Dilşad Ercan",
  description: "İnanılmaz bir portfolyo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl py-10 mx-auto">
        <header>
          <Link
            className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600"
            href="/"
          >
            Selim
          </Link>
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
