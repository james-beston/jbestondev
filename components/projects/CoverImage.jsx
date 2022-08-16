import Image from 'next/image';
import { urlForImage } from '@lib/sanity'

export default function CoverImage({ image, title }) {
  return (
    <div className="w-full bg-slate-100">
      <div className="flex max-w-7xl mx-auto px-4 py-16">
        <Image
          src={urlForImage(image).width(1600).height(980).url()}
          alt={title}
          width={1600}
          height={980}
        />
      </div>
    </div>
  )
}