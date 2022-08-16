import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@components/PortableTextComponents";

export default function ProjectDetails({ project }) {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 mt-8 lg:mt-16 gap-y-4 lg:gap-y-8">
      <h1 className="text-5xl lg:text-7xl font-black">{project.title}</h1>
      <h2 className="text-2xl lg:text-4xl">{project.introduction}</h2>
      <div className="bg-white border border-slate-300 overflow-hidden rounded-md">
        <ul role="list" className="divide-y divide-slate-300">
          <li className="px-6 py-4 font-semibold text-slate-900">
            Client: <span className="font-normal text-slate-700">{project.client}</span>
          </li>
          <li className="px-6 py-4 font-semibold text-slate-900 flex gap-x-2 items-center">
            Tools:{project.tools.map(tool => <span key={tool} className="text-xs bg-slate-300 rounded px-2.5 py-1 font-normal text-slate-600">{tool}</span>)}
          </li>
          <li className="px-6 py-4 font-semibold text-slate-900">
            Website: <a href={project.website} className="font-normal text-blue-600 hover:text-blue-800">{project.website}</a>
          </li>
        </ul>
      </div>
      <div className="prose lg:prose-xl max-w-none" >
        <PortableText value={project.body} components={portableTextComponents} />
      </div>
    </div>
  )
}