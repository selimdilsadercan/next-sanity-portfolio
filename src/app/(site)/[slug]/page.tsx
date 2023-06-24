import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      {page.title && page.content && (
        <>
          <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text drop-shadow">
            {page.title}
          </h1>

          <div className="mt-10 text-lg text-gray-700">
            <PortableText value={page.content} />
          </div>
        </>
      )}
    </div>
  );
}
