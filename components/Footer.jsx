export default function Footer() {
  return (
    <footer className="mt-4 lg:mt-8 bg-slate-900 text-white p-4 text-center font-semibold">
      <p>
        &copy; {new Date().getFullYear()} &ndash; James Beston
      </p>
    </footer>
  )
}