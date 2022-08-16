import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head'
import Navigation from '@components/Navigation'
import { singleProjectQuery, projectSlugsQuery } from '@lib/queries'
import { sanityClient, getClient, overlayDrafts } from '@lib/sanity.server'
import { usePreviewSubscription } from '@lib/sanity';
import CoverImage from '@components/projects/CoverImage';
import ProjectDetails from '@components/projects/ProjectDetails';

export default function Project({ data = {}, preview }) {
  const router = useRouter()

  const slug = data?.project?.slug

  const {
    data: { project, moreProjects },
  } = usePreviewSubscription(singleProjectQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <Head>
        <title>James Beston - {project.title}</title>
        <meta name="description" content="Welcome to the website fo James Beston - full-stack web designer and designer based in Norfolk, UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation current="work" />

      <main>
        <CoverImage image={project.headline_image} altText={project.title} />
        <ProjectDetails project={project} />
      </main>     
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { project, moreProjects } = await getClient(preview).fetch(singleProjectQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        project,
        moreProjects: overlayDrafts(moreProjects),
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}