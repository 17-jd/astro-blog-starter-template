import { useInView } from '../hooks/useInView'

const jobs = [
  {
    role: 'Linux Infrastructure Teaching Assistant',
    company: 'Khoury College of Computer Sciences, Northeastern University · Boston, MA',
    date: 'Aug 2024 – Present',
    bullets: [
      'Support 50+ students with Linux server management, system administration, and hardware troubleshooting',
      'Guide students through log analysis, file system management, and command-line diagnostics',
      'Troubleshoot connectivity issues and assist with network configuration in lab environments',
    ],
  },
  {
    role: 'Founder & Lead Technician',
    company: 'D-InfoTech Pvt Ltd · Gujarat, India',
    date: 'Sep 2021 – Aug 2024',
    bullets: [
      'Led team of 4 technicians delivering IT infrastructure services to 30+ business clients',
      'Installed and configured Dell PowerEdge servers; performed component replacements (CPU, RAM, PSU, storage)',
      'Built rack-mounted servers, managed cable routing, and maintained structured cabling systems',
      'Ran and terminated fiber optic and Cat6 cabling; installed patch panels and cable management systems',
      'Configured Layer 2/Layer 3 network equipment including Cisco switches and routers',
      'Maintained documentation of installations, configurations, asset inventory, and service reports',
    ],
  },
  {
    role: 'Security Engineer',
    company: 'Astha Technology Solutions Private Limited · Gujarat, India',
    date: 'Jun 2020 – Aug 2021',
    bullets: [
      'Installed data cabinets, rack systems, and supporting infrastructure at client sites',
      'Performed hardware diagnostics and replaced failed components in servers and workstations',
      'Terminated and tested network cables; followed safety protocols during deployments',
    ],
  },
]

const Experience = () => {
  const { ref, inView } = useInView()

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className={`reveal ${inView ? 'visible' : ''}`} ref={ref}>
          <p className="section-eyebrow">Professional Experience</p>
          <h2 className="section-heading">Where I've <span>worked</span></h2>
          <p className="section-sub">A track record of keeping infrastructure running across three roles.</p>
        </div>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`timeline-item reveal ${inView ? 'visible' : ''} d${i + 1}`}
            >
              <div className="timeline-header">
                <span className="timeline-role">{job.role}</span>
                <span className="timeline-date">{job.date}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
