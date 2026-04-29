import { useInView } from '../hooks/useInView'

const projects = [
  {
    name: 'Data Center Build-Out',
    category: 'Infrastructure Setup',
    desc: 'Managed end-to-end infrastructure setup including rack installation, structured cabling (fiber and copper), power distribution, and cooling assessment. Completed full equipment inspections and documented all installations per TIA/EIA-942 standards.',
    tags: ['Rack Installation', 'Fiber & Copper', 'Power Distribution', 'Cooling', 'Documentation'],
  },
  {
    name: 'Server Deployment',
    category: 'Server Infrastructure',
    desc: 'Led deployment of 15 Dell PowerEdge servers including physical installation, cable management, firmware updates, and OS configuration. Managed parts ordering and inventory tracking throughout the project lifecycle.',
    tags: ['Dell PowerEdge', 'Firmware Updates', 'OS Configuration', 'Cable Management', 'Inventory'],
  },
  {
    name: 'Network Infrastructure Upgrade',
    category: 'Network Engineering',
    desc: 'Replaced legacy equipment with Cisco switches, ran Cat6 cabling throughout the facility, terminated patch panels, and performed cable testing. Created detailed network topology documentation for the client.',
    tags: ['Cisco Switches', 'Cat6 Cabling', 'Patch Panels', 'Cable Testing', 'Network Topology'],
  },
]

const Projects = () => {
  const { ref, inView } = useInView()

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className={`reveal ${inView ? 'visible' : ''}`} ref={ref}>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-heading">Infrastructure I've <span>built</span></h2>
          <p className="section-sub">Real-world deployments from planning through completion.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`project-card reveal ${inView ? 'visible' : ''} d${i + 1}`}
            >
              <p className="project-num">PROJECT / 0{i + 1}</p>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-category">{p.category}</p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
