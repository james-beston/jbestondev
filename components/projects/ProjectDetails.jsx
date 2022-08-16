import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@components/PortableTextComponents";

export default function ProjectDetails({ project }) {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 mt-8 lg:mt-16 gap-y-4 lg:gap-y-8">
      <h1 className="text-5xl lg:text-7xl font-black">{project.title}</h1>
      <h2 className="text-2xl lg:text-4xl">{project.introduction}</h2>
      <div className="prose lg:prose-xl max-w-none" >
        <PortableText value={project.body} components={portableTextComponents} />
      </div>
    </div>
  )
}