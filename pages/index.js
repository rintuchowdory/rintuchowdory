import Link from 'next/link'

const metrics = [
  { label: 'Revenue Growth', value: '+34%', note: 'Quarter over quarter' },
  { label: 'Qualified Leads', value: '1,248', note: 'Last 30 days' },
  { label: 'Client Retention', value: '94%', note: 'SaaS accounts' },
  { label: 'Projects Delivered', value: '52', note: 'Cross-functional teams' }
]

const deals = [
  { company: 'Nordic Payments', stage: 'Proposal', value: '$86K', owner: 'Rintu Chowdory' },
  { company: 'Atlas Logistics', stage: 'Negotiation', value: '$140K', owner: 'Sales + DevOps' },
  { company: 'Berlin Mobility', stage: 'Discovery', value: '$48K', owner: 'Product Team' }
]

const projects = [
  { name: 'arm64-dev-boost', stack: 'Shell + Performance', impact: 'Faster ARM onboarding and benchmarking workflows.' },
  { name: 'tasbih-counter-app', stack: 'TypeScript + UI', impact: 'Modernized UX with reusable components and tests.' },
  { name: 'devops-portfolio-website', stack: 'Astro + CI/CD', impact: 'Deployed static portfolio with pipeline automation.' }
]

export default function Home() {
  return (
    <main className="layout">
      <header className="topbar">
        <div>
          <p className="eyebrow">Rintu Chowdory • Portfolio Dashboard</p>
          <h1>Professional CRM & Engineering Overview</h1>
        </div>
        <Link href="/about" className="btnSecondary">About Me</Link>
      </header>

      <section className="metricsGrid">
        {metrics.map((item) => (
          <article key={item.label} className="card metricCard">
            <p>{item.label}</p>
            <h3>{item.value}</h3>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="contentGrid">
        <article className="card">
          <h2>CRM Pipeline</h2>
          <p className="muted">A snapshot of active opportunities and ownership.</p>
          <div className="table">
            <div className="row head"><span>Account</span><span>Stage</span><span>Value</span><span>Owner</span></div>
            {deals.map((deal) => (
              <div className="row" key={deal.company}>
                <span>{deal.company}</span><span>{deal.stage}</span><span>{deal.value}</span><span>{deal.owner}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card codeCard">
          <h2>Engineering Highlights</h2>
          <p className="muted">Selected repositories that showcase full-stack and DevOps experience.</p>
          {projects.map((project) => (
            <div key={project.name} className="projectItem">
              <h4>{project.name}</h4>
              <p><strong>Stack:</strong> {project.stack}</p>
              <p>{project.impact}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  )
}
