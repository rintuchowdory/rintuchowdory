import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to rintuchowdory</h1>
      <p>This is a minimal Next.js site scaffolded for the repository.</p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </main>
  )
}
