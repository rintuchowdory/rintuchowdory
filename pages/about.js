import Link from 'next/link'

export default function About() {
  return (
    <main className="layout">
      <section className="card aboutCard">
        <p className="eyebrow">About</p>
        <h1>Rintu Chowdory</h1>
        <p>
          I am a builder focused on modern web platforms, DevOps automation, and business-facing dashboards.
          This portfolio site is designed as a CV-ready showcase with product thinking, CRM structure, and clean UI delivery.
        </p>
        <ul>
          <li>Full-stack web development with React / Next.js</li>
          <li>Cloud and CI/CD workflows</li>
          <li>Customer-centric product execution</li>
        </ul>
        <p>
          Explore the dashboard on the home page to review metrics, pipeline examples, and project highlights.
        </p>
        <Link href="/" className="btnPrimary">Back to Dashboard</Link>
      </section>
    </main>
  )
}
