import { MdArrowOutward } from 'react-icons/md'
import { TbFileDownload } from 'react-icons/tb'

const RackVisual = () => (
  <div className="hero-visual">
    <div className="rack">
      <div className="rack-header">DELL POWEREDGE R740</div>
      {[
        { label: 'WEB-SRV-01', active: true },
        { label: 'DB-CLUSTER', active: true },
        { label: 'STORAGE-NAS', active: true, amber: true },
        { label: 'BACKUP-01', active: false },
        { label: 'CISCO-SW-48', active: true },
        { label: 'FW-ASA5516', active: true },
        { label: 'KVM-SWITCH', active: false },
        { label: 'UPS-MONITOR', active: true, amber: true },
      ].map((unit, i) => (
        <div className="rack-unit" key={i}>
          <div className={`rack-led${unit.amber ? ' amber' : unit.active ? '' : ' off'}`} />
          <span className="rack-label">{unit.label}</span>
          {unit.active && (
            <div className="rack-activity">
              <div className="rack-bar" />
              <div className="rack-bar" />
              <div className="rack-bar" />
              <div className="rack-bar" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div>
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">
          Jaydip<br /><span>Dungarani</span>
        </h1>
        <p className="hero-title">Data Center Technician &amp; IT Infrastructure Engineer</p>
        <p className="hero-desc">
          4+ years hands-on experience in server hardware, network infrastructure, and
          structured cabling. Currently pursuing M.S. ECE at Northeastern University, Boston.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in Touch <MdArrowOutward />
          </a>
          <a href="/Jaydip_resume.pdf" target="_blank" className="btn btn-outline">
            Download Resume <TbFileDownload />
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">4+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div>
            <div className="hero-stat-num">30+</div>
            <div className="hero-stat-label">Business Clients</div>
          </div>
          <div>
            <div className="hero-stat-num">15+</div>
            <div className="hero-stat-label">Servers Deployed</div>
          </div>
        </div>
      </div>
      <RackVisual />
    </div>
  </section>
)

export default Hero
