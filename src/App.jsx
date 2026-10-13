import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import AboutPage from './component/aboutpage.jsx'
import ContactForm from './component/contactform.jsx'
import HomePage from './component/homepage.jsx'
import './App.css'

function LiveClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <time className="clock" dateTime={now.toISOString()}>
      <span className="clock-dot" aria-hidden="true" />
      {new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now)}
    </time>
  )
}

function ThemeButton({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-button"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />
        </svg>
      )}
    </button>
  )
}

function Portfolio() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('portfolio-theme', nextTheme)
      return nextTheme
    })
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <header className="site-header">
        <NavLink className="wordmark" to="/" aria-label="Abubakar Sadiq Mahmud, home">
          <span className="wordmark-mark">A.</span>
          <span>Abubakar Sadiq Mahmud</span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-tools">
          <LiveClock />
          <span className="tool-divider" aria-hidden="true" />
          <ThemeButton theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Abubakar Sadiq Mahmud</span>
        <span>Built with React</span>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  )
}

export default App
