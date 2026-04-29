import { useInView } from '../hooks/useInView'

const skillsets = [
  {
    icon: '🖥️',
    category: 'Server Hardware',
    tags: ['Dell PowerEdge', 'HP ProLiant', 'Server Builds', 'CPU / RAM / PSU / GPU / NIC', 'Hardware Diagnostics', 'Firmware Upgrades', 'Parts Management'],
  },
  {
    icon: '🌐',
    category: 'Networking',
    tags: ['Layer 2 / Layer 3', 'Cisco IOS', 'TCP/IP', 'DHCP', 'DNS', 'VLAN', 'Cable Testing', 'Structured Cabling', 'Patch Panel Termination'],
  },
  {
    icon: '🔌',
    category: 'Cabling & Infrastructure',
    tags: ['Fiber Optic Installation', 'Cat5e / Cat6 Termination', 'Cable Management', 'Basket Trays', 'Rack Mounting', 'Data Cabinet Installation'],
  },
  {
    icon: '🐧',
    category: 'Operating Systems',
    tags: ['Linux / Unix', 'Log Analysis', 'File System Management', 'Hardware Interrogation', 'Windows Server', 'Command-Line Diagnostics'],
  },
  {
    icon: '🔧',
    category: 'Tools & Equipment',
    tags: ['Server Lifts', 'Cable Testers', 'Crimpers', 'Punch-Down Tools', 'Wire Strippers', 'Multimeters', 'Hand Tools'],
  },
  {
    icon: '📋',
    category: 'Standards & Compliance',
    tags: ['OSHA Protocols', 'TIA/EIA-942', 'BICSI Guidelines', 'Equipment Inspection Checklists', 'Lockout/Tagout', 'Safety Protocols'],
  },
]

const Skills = () => {
  const { ref, inView } = useInView()

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className={`reveal ${inView ? 'visible' : ''}`} ref={ref}>
          <p className="section-eyebrow">Technical Skills</p>
          <h2 className="section-heading">Tools of the <span>trade</span></h2>
          <p className="section-sub">Built from years of real-world infrastructure work, not just coursework.</p>
        </div>
        <div className="skills-grid">
          {skillsets.map((s, i) => (
            <div
              key={i}
              className={`skill-card reveal ${inView ? 'visible' : ''} d${(i % 5) + 1}`}
            >
              <div className="skill-icon">{s.icon}</div>
              <p className="skill-category">{s.category}</p>
              <div className="skill-tags">
                {s.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
