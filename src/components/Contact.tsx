import { useInView } from '../hooks/useInView'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa6'
import { TbFileDownload } from 'react-icons/tb'
import { FormEvent, useState } from 'react'

const Contact = () => {
  const { ref, inView } = useInView()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    const body = `From: ${name} <${email}>\n\n${message}`
    window.location.href = `mailto:dungarani.j@northeastern.edu?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className={`reveal ${inView ? 'visible' : ''}`} ref={ref}>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-heading">Let's <span>connect</span></h2>
        </div>
        <div className="contact-inner">
          <div className={`reveal ${inView ? 'visible' : ''} d1`}>
            <p className="contact-desc">
              Whether you have a data center project, an infrastructure role, or just
              want to talk shop — I'm always open to a conversation.
            </p>
            <div className="contact-links">
              <a href="mailto:dungarani.j@northeastern.edu" className="contact-link">
                <MdEmail />
                dungarani.j@northeastern.edu
              </a>
              <a href="https://linkedin.com/in/jaydipdungarani" target="_blank" className="contact-link">
                <FaLinkedinIn />
                linkedin.com/in/jaydipdungarani
              </a>
              <a href="/Jaydip_resume.pdf" target="_blank" className="contact-link">
                <TbFileDownload />
                Download Resume
              </a>
              <span className="contact-link" style={{ cursor: 'default' }}>
                <MdLocationOn />
                Boston, MA
              </span>
            </div>
          </div>
          <div className={`contact-form reveal ${inView ? 'visible' : ''} d2`}>
            {sent ? (
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '0.9rem' }}>
                ✓ Opening your email client...
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="form-title">Send a message</p>
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="What's on your mind?" required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="footer-bar">
          © 2026 Jaydip Dungarani · Boston, MA
        </div>
      </div>
    </section>
  )
}

export default Contact
