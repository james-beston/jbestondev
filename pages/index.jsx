import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>James Beston - Developer & Designer</title>
        <meta name="description" content="Welcome to the website fo James Beston - full-stack web designer and designer based in Norfolk, UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="colorchange h-screen w-screen flex">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            <div className="text-white text-8xl font-black">
              <h1 className="text-white text-9xl text-center lg:text-left lg:text-huge">James<br />Beston</h1>
            </div>
            <nav className="mt-12 lg:mt-0 lg:ml-24 flex flex-col items-center lg:items-end text-white text-4xl space-y-6">
              <Link href="/work" passHref>
                <a className="h-14 border-b-2 border-spacing-y-14 border-transparent hover:border-white hover:transition-all hover:duration-700">Work</a>
              </Link>
              <Link href="/about" passHref>
                <a className="h-14 border-b-2 border-spacing-y-14 border-transparent hover:border-white hover:transition-all hover:duration-700">About</a>
              </Link>
              {/* <Link href="/blog" passHref>
                <a className="h-14 border-b-2 border-spacing-y-14 border-transparent hover:border-white hover:transition-all hover:duration-700">Blog</a>
              </Link> */}
              <Link href="/contact" passHref>
                <a className="h-14 border-b-2 border-spacing-y-14 border-transparent hover:border-white hover:transition-all hover:duration-700">Contact</a>
              </Link>
            </nav>
          </div>
        </div>
      </main>

     
    </div>
  )
}
