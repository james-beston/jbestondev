import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@lib/sanity'

export default function ProjectHero({ project }) {
  const { headline_image, title, introduction, slug } = project
  return (
    <Link href="/work/[slug]" as={`/work/${slug}`}>
      <div className="flex items-center mx-auto max-w-7xl w-full text-center lg:py-24 lg:text-left hover:bg-slate-100 cursor-pointer">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <Image
            src={urlForImage(headline_image).url()}
            alt={title}
            width={1600}
            height={980}
          />
        </div>
        <div className="relative w-full lg:w-1/2 lg:h-full pr-12">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mt-4 lg:mt-6 text-lg tracking-tight text-gray-900">
            {introduction}
          </p>
        </div>
      </div>
    </Link>
  )
}