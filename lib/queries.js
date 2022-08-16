const projectFields = `
  _id,
  title,
  headline_image,
  introduction,
  "slug": slug.current,
`

export const projectQuery = `
  *[_type == "project"] | order(date desc, _updatedAt desc) {
    ${projectFields}
  }
`

export const singleProjectQuery = `
{ "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    body,
    ${projectFields}
  }
}
`

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`