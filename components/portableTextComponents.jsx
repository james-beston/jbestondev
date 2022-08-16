import { urlForImage } from '@lib/sanity'

export const portableTextComponents = {
  types: {
    image: ({ value }) => <img src={urlForImage(value).url()} alt={value.alt} />,
  }
}