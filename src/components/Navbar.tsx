import React, { useEffect, useState } from 'react'
import { TbFileDownload } from 'react-icons/tb'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <span className="nav-logo">jd.dev</span>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
          <li><a href="#experience" onClick={(e) => scrollTo(e, 'experience')}>Experience</a></li>
          <li><a href="#skills" onClick={(e) => scrollTo(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a></li>
          <li>
            <a href="/Jaydip_resume.pdf" target="_blank" className="nav-resume">
              <TbFileDownload style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
