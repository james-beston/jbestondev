export default function ProjectDetails({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.introduction}</p>
    </div>
  )
}