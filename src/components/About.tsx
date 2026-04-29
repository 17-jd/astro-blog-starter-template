import { useInView } from '../hooks/useInView'

const About = () => {
  const { ref, inView } = useInView()

  return (
    <section className="about" id="about">
      <div className="container" ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <div className="about-text">
            <p className="section-eyebrow">About Me</p>
            <h2 className="section-heading">Building the backbone<br />of <span>digital infrastructure</span></h2>
          </div>
        </div>
        <div>
          <div className={`about-text reveal ${inView ? 'visible' : ''} d1`}>
            <p>
              I'm a data center technician with 4+ years of hands-on experience keeping
              critical IT infrastructure running. From racking and stacking Dell PowerEdge servers
              to terminating fiber optic cabling and configuring Cisco switches — I've done it all.
            </p>
            <p>
              I founded D-InfoTech Pvt Ltd in India, where I led a team of 4 technicians
              serving 30+ business clients. Now based in Boston, MA, I'm completing my
              M.S. in Electrical and Computer Engineering at Northeastern University while
              working as a Linux Infrastructure Teaching Assistant.
            </p>
            <p>
              I thrive in fast-paced environments where uptime matters, documentation is
              essential, and every cable run has to be perfect.
            </p>
          </div>
          <div className={`edu-cards reveal ${inView ? 'visible' : ''} d2`}>
            <p className="section-eyebrow">Education</p>
            <div className="edu-card">
              <div className="edu-card-top">
                <span className="edu-degree">M.S. Electrical &amp; Computer Engineering</span>
                <span className="edu-year">Expected Dec 2026</span>
              </div>
              <p className="edu-school">Northeastern University · Boston, MA</p>
            </div>
            <div className="edu-card">
              <div className="edu-card-top">
                <span className="edu-degree">B.E. Computer Engineering</span>
                <span className="edu-year">May 2020</span>
              </div>
              <p className="edu-school">Gujarat Technological University · India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
