import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@lib/sanity'

export default function OtherProjects({ projects }) {
  return (
    projects.map(project => 
      <Link href="/work/[slug]" as={`/work/${project.slug}`} key={project._id}>
        <div className="col-span-full md:col-span-1 text-center py-12 lg:py-24 lg:text-left hover:bg-slate-100 cursor-pointer">
          <div className="w-full px-8 sm:px-16">
            <Image
              src={urlForImage(project.headline_image).width(800).height(500).url()}
              alt={project.title}
              width={800}
              height={500}
            />
          </div>
          <div className="w-full px-4 sm:px-8 text-center">
            <h1 className="text-2xl tracking-tight font-black text-transparent bg-gradient-to-br from-pink-700 to-purple-900 bg-clip-text sm:text-3xl md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 lg:mt-6 tracking-tight text-slate-800">
              {project.introduction}
            </p>
          </div>
        </div>
      </Link>
    ))
}