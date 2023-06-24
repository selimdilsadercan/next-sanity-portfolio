import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Selim Dilşad Ercan",
  description: "Portfolyo Sitesi",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-4xl p-10 mx-auto">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text"
          >
            Selim Dilşad Ercan
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
