import { useState } from 'react'
import './contactform.css'

function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const submission = Object.fromEntries(formData.entries())
    submission._subject = `Portfolio contact from ${submission.name}`

    setStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/ajax/itzflash333@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(submission),
      })

      const result = await response.json()
      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || 'The email service could not accept the message.')
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus('error')
    }
  }

  return (
    <section className="inner-page contact-page page-enter">
      <div className="contact-intro">
        <p className="eyebrow">CONTACT</p>
        <h1>Let’s talk.</h1>
        <p className="contact-description">
          Have a question or want to talk about a project? Send a message using the form.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send a message</h2>

        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <label htmlFor="message">What’s on your mind?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows="4"
          required
        />

        <button
          className="button button-primary submit-button"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'success' && (
          <p className="form-notice" role="status">
            Your message was accepted. Check the inbox for the FormSubmit activation
            email and confirm it to enable delivery.
          </p>
        )}
        {status === 'error' && (
          <p className="form-error" role="alert">
            We couldn’t send your message. Please try again.
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactForm
