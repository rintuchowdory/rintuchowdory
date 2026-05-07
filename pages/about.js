import Link from 'next/link'

export default function About() {
  return (
    <main className="layout">
      <section className="card aboutCard">
        <p className="eyebrow">Project overview</p>
        <h1>Own ChatGPT-style portfolio assistant</h1>
        <p>
          This project turns the portfolio into a professional AI chat product demo. It is built with Next.js and React,
          designed for GitHub Pages, and structured to show recruiters that Rintu can ship clean user interfaces,
          product-focused workflows, and deployment-ready web applications.
        </p>
        <h2>What it demonstrates</h2>
        <ul>
          <li>ChatGPT-style messaging UI with stateful React interactions.</li>
          <li>Prompt shortcuts for CV writing, CRM planning, and GitHub project storytelling.</li>
          <li>Static GitHub Pages deployment without leaking private API keys.</li>
          <li>A clear upgrade path for server-side OpenAI API integration.</li>
        </ul>
        <h2>API key safety</h2>
        <p>
          API keys must be created in the OpenAI dashboard by the account owner and stored only as private environment
          variables on a server or trusted deployment platform. This repository intentionally does not include a real key.
        </p>
        <Link href="/" className="btnPrimary">Open chat demo</Link>
      </section>
    </main>
  )
}
