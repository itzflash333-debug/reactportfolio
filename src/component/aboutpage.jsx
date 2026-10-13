import { Link } from 'react-router-dom'
import './aboutpage.css'

const skills = ['React', 'JavaScript', 'HTML & CSS', 'Responsive design']

function AboutPage() {
  return (
    <section className="inner-page about-page page-enter">
      <div className="page-heading">
        <p className="eyebrow">ABOUT</p>
        <h1>A little about me</h1>
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p className="about-lead">
            I’m Abubakar Sadiq Mahmud, a front-end developer based in Yola,
            Adamawa State. I enjoy building clean, useful websites.
          </p>
          <p>
            I like working on projects that are clear, simple, and easy to use.
            My focus is on putting good design and strong user experience together
            in a way that feels natural.
          </p>
          <p>
            Outside of work, I enjoy learning, improving my skills, and exploring
            new ideas that make digital products better. If you want to work
            together, I’m happy to hear from you.
          </p>
        </div>

        <div className="skills-block">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          <Link className="text-link about-contact-link" to="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
