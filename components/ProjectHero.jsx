import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@lib/sanity'

export default function ProjectHero({ project }) {
  const { headline_image, title, introduction, slug } = project
  return (
    <Link href="/work/[slug]" as={`/work/${slug}`}>
      <div className="flex flex-col md:flex-row items-center mx-auto max-w-7xl w-full text-center py-12 lg:py-24 lg:text-left hover:bg-slate-100 cursor-pointer">
        <div className="w-full lg:w-1/2 px-4 sm:px-8">
          <Image
            src={urlForImage(headline_image).url()}
            alt={title}
            width={1600}
            height={980}
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 sm:px-8">
          <h1 className="text-4xl tracking-tight font-black text-transparent bg-gradient-to-br from-pink-700 to-purple-900 bg-clip-text sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mt-4 lg:mt-6 text-lg tracking-tight text-slate-800">
            {introduction}
          </p>
        </div>
      </div>
    </Link>
  )
}