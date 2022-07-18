import Head from 'next/head'
import Navigation from '@components/Navigation'
import { projectQuery } from '@lib/queries'
import { getClient, overlayDrafts } from '@lib/sanity.server'
import ProjecHero from '@components/ProjectHero'

export default function Work({ allProjects, preview }) {
  const heroProject = allProjects[0]
  const otherProjects = allProjects.slice(1)
  return (
    <div>
      <Head>
        <title>James Beston - Work</title>
        <meta name="description" content="Welcome to the website fo James Beston - full-stack web designer and designer based in Norfolk, UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation current="work" />

      <main className="lg:relative">
        <ProjecHero project={heroProject} />
      </main>

     
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(projectQuery))
  return {
    props: { allProjects, preview },
  }
}
