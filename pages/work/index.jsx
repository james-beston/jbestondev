import Head from 'next/head'
import Navigation from '@components/Navigation'
import { projectQuery } from '@lib/queries'
import { getClient, overlayDrafts } from '@lib/sanity.server'
import ProjectHero from '@components/ProjectHero'
import OtherProjects from '@components/OtherProjects'
import Footer from '@components/Footer'

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

      <main className="lg:relative min-h-screen">
        <ProjectHero project={heroProject} />
        {otherProjects.length > 0 && (
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
            <OtherProjects projects={otherProjects} />
          </div>
        )}
      </main>

      <Footer />
     
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(projectQuery))
  return {
    props: { allProjects, preview },
  }
}
