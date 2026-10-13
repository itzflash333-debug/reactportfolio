import { Link } from 'react-router-dom'
import './homepage.css'

function HomePage() {
  return (
    <section className="home-page page-enter">
      <div className="home-hero">
        <div className="home-intro">
          <p className="eyebrow">PERSONAL PORTFOLIO</p>
          <h1>
            Hi, I’m <span>Abubakar Sadiq Mahmud.</span>
            <br />
            I build clean, simple websites.
          </h1>
          <p className="hero-description">
            I’m a front-end developer who likes clear design, smooth user experience,
            and websites that feel easy to use. This is a simple snapshot of my work
            and the kind of projects I enjoy building.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/about">About me</Link>
            <Link className="text-link" to="/contact">Contact me <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <figure className="profile-photo">
          <img
            src="/profile.jpg"
            alt="Abubakar Sadiq Mahmud"
          />
        </figure>
      </div>

      <p className="home-skills">
        <span>WHAT I WORK WITH</span>
        Front-end development <i /> React <i /> Responsive design
      </p>
    </section>
  )
}

export default HomePage
