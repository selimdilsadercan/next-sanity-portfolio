import { getProject } from "@/sanity/sanity-utils";
import { FC } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface pageProps {
  params: { project: string };
}

const page: FC<pageProps> = async ({ params }) => {
  const slug = params.project as string;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl py-20 mx-auto">
      <header className="flex justify-between">
        <h1 className="text-4xl font-extrabold text-transparent drop-shadow bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
          {project.name}
        </h1>
        <a
          className="px-4 py-3 font-bold text-gray-500 bg-gray-100 rounded-lg whitespace-nowrap hover:bg-pink-500 hover:text-pink-100"
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopenner noreferrer"
        >
          View Project
        </a>
      </header>

      {/* content */}
      <div className="mt-5 text-lg text-gray-700">
        <PortableText value={project.content} />
      </div>

      {/* image */}
      {project.image && (
        <Image
          className="object-cover mt-10 border-2 border-gray-700 rounded-xl"
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
        />
      )}
    </div>
  );
};

export default page;
