import { useMemo, useState } from 'react'
import Link from 'next/link'

const starterPrompts = [
  'Write a professional CV summary for a full-stack developer.',
  'Explain my GitHub projects in recruiter-friendly language.',
  'Create a CRM dashboard feature list for a portfolio project.',
  'Suggest improvements for a Next.js GitHub Pages portfolio.'
]

const featureCards = [
  { title: 'Portfolio-ready UI', text: 'A polished chat workspace that shows product thinking, responsive UI, and clean component structure.' },
  { title: 'Safe API posture', text: 'No API key is committed or exposed in the static GitHub Pages build.' },
  { title: 'OpenAI-ready', text: 'Designed so a server-side API route or hosted backend can be connected later with OPENAI_API_KEY.' }
]

const quickReplies = [
  'Add contact form',
  'Improve GitHub README',
  'Create CRM features',
  'Generate CV bullets'
]

function buildDemoAnswer(prompt) {
  const cleanPrompt = prompt.trim()

  if (!cleanPrompt) {
    return 'Please type a message first. I can help with portfolio copy, project descriptions, CRM ideas, and developer CV improvements.'
  }

  return `Here is a polished portfolio-focused answer for: “${cleanPrompt}”\n\n• Start with the business problem and the users you help.\n• Explain the technical solution using clear stack keywords like Next.js, React, CI/CD, GitHub Pages, automation, and API integration.\n• Add measurable impact, for example faster workflow, cleaner dashboard insights, or better recruiter visibility.\n• Finish with a next step: demo link, GitHub repository, or contact call.\n\nDemo mode note: this GitHub Pages version does not call OpenAI directly because API keys must stay private on a server.`
}

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi Rintu — I am your portfolio AI assistant demo. Ask me to improve your CV, describe a GitHub project, or plan a CRM dashboard.'
    }
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  const latestAssistantMessage = useMemo(
    () => [...messages].reverse().find((message) => message.role === 'assistant'),
    [messages]
  )

  function sendMessage(messageText = input) {
    const text = messageText.trim()
    if (!text || isThinking) return

    setMessages((current) => [...current, { role: 'user', text }])
    setInput('')
    setIsThinking(true)

    window.setTimeout(() => {
      setMessages((current) => [...current, { role: 'assistant', text: buildDemoAnswer(text) }])
      setIsThinking(false)
    }, 450)
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage()
  }

  return (
    <main className="appShell">
      <aside className="sidebar">
        <div className="brandBlock">
          <span className="brandMark">RC</span>
          <div>
            <p className="eyebrow">Rintu Chowdory</p>
            <h1>ChatGPT Clone</h1>
          </div>
        </div>

        <div className="sidePanel">
          <p className="panelLabel">Starter prompts</p>
          {starterPrompts.map((prompt) => (
            <button key={prompt} className="promptButton" type="button" onClick={() => sendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <div className="sidePanel statusPanel">
          <p className="panelLabel">Deployment</p>
          <strong>GitHub Pages ready</strong>
          <span>Static demo mode keeps secrets safe.</span>
        </div>

        <Link href="/about" className="btnSecondary">About this project</Link>
      </aside>

      <section className="chatWorkspace">
        <header className="heroBar">
          <div>
            <p className="eyebrow">AI portfolio assistant</p>
            <h2>Build, explain, and polish your developer profile.</h2>
            <p className="muted">
              A professional ChatGPT-style interface for your CV website. It demonstrates chat UX, state handling,
              deployment readiness, and a safe path for OpenAI API integration.
            </p>
          </div>
          <div className="modelBadge">Demo model</div>
        </header>

        <section className="featureGrid">
          {featureCards.map((card) => (
            <article className="card featureCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="chatPanel" aria-label="AI chat messages">
          <div className="messages">
            {messages.map((message, index) => (
              <article className={`message ${message.role}`} key={`${message.role}-${index}`}>
                <span>{message.role === 'assistant' ? 'AI' : 'You'}</span>
                <p>{message.text}</p>
              </article>
            ))}
            {isThinking && (
              <article className="message assistant">
                <span>AI</span>
                <p>Thinking about a recruiter-friendly answer...</p>
              </article>
            )}
          </div>

          <div className="replyChips" aria-label="Quick reply actions">
            {quickReplies.map((reply) => (
              <button key={reply} type="button" onClick={() => sendMessage(reply)}>{reply}</button>
            ))}
          </div>

          <form className="composer" onSubmit={handleSubmit}>
            <input
              aria-label="Message"
              placeholder="Ask about your CV, GitHub projects, CRM dashboard, or portfolio content..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" disabled={isThinking}>Send</button>
          </form>
        </section>

        <section className="apiNote card">
          <h3>Real OpenAI API integration</h3>
          <p>
            To connect live AI responses, create an OpenAI API key in your OpenAI dashboard and store it as
            <code> OPENAI_API_KEY </code> on a private server or deployment platform. Do not commit API keys to GitHub
            and do not expose them in client-side JavaScript.
          </p>
          <p className="muted">Latest demo answer: {latestAssistantMessage?.text.slice(0, 120)}...</p>
        </section>
      </section>
    </main>
  )
}
