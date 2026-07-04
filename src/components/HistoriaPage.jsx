import { OrnamentDivider } from './OrnamentDivider'

const PERIODOS = [
  {
    anio: '1521–1600',
    titulo: 'La Conquista y el Sincretismo',
    desc: 'Con la llegada de los españoles al continente americano en 1492, la cultura y gastronomía de la cultura europea y indígena se unen, ingredientes como el chile, el cacao  y el maíz se juntan con el cerdo y especias del viejo mundo.',
    icono: 'cross',
  },
  {
    anio: '1601–1700',
    titulo: 'El Barroco Temprano',
    desc: 'Los conventos se convierten en laboratorios culinarios. Las monjas dominicas y clarisas de Puebla combinan técnicas europeas con ingredientes locales, creando platillos sin precedente.',
    icono: 'pillar',
  },
  {
    anio: '1701–1800',
    titulo: 'El Esplendor Barroco',
    desc: 'La cocina poblana alcanza su apogeo. El mole, el rompope y la nogada se consolidan como emblemas de una identidad culinaria mestiza, rica en ornamento y sabor.',
    icono: 'star',
  },
  {
    anio: '1800+',
    titulo: 'Legado e Influencia',
    desc: 'La cocina barroca crea las bases de la alta cocina mexicana y poblana moderna, platillos originarios se siguen vendiendo y degustando en diferentes restaurantes y hogares del país, enriqueciendo la identidad cultural del país.',
    icono: 'scroll',
  },
]

const DATOS = [
  { icono: 'pillar',   titulo: 'Movimiento', dato: 'Churrigueresco Mexicano' },
  { icono: 'calendar', titulo: 'Período',    dato: 'Siglos XVII – XVIII' },
  { icono: 'map',      titulo: 'Epicentro',   dato: 'Puebla de los Ángeles' },
  { icono: 'church',   titulo: 'Motor cultural', dato: 'Los conventos novohispanos' },
]

function BaroqueIcon({ name, size = 18 }) {
  const icons = {
    cross: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20" />
        <path d="M7 7l10 10M17 7L7 17" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    pillar: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="7" y="4" width="10" height="16" rx="1" />
        <line x1="5" y1="4" x2="19" y2="4" />
        <line x1="5" y1="20" x2="19" y2="20" />
        <line x1="10" y1="4" x2="10" y2="20" strokeWidth="0.8" opacity="0.5" />
        <line x1="14" y1="4" x2="14" y2="20" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    scroll: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 21h12a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4z" />
        <path d="M19 17V5a2 2 0 0 0-4 0v12" />
        <path d="M8 3H5a2 2 0 0 0 0 4h3" />
        <line x1="11" y1="8" x2="16" y2="8" />
        <line x1="11" y1="12" x2="16" y2="12" />
      </svg>
    ),
    calendar: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
    map: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    church: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v5M9.5 4.5h5" />
        <path d="M5 21V10l7-5 7 5v11H5z" />
        <path d="M10 21v-6h4v6" />
        <path d="M5 21h14" />
      </svg>
    ),
  }
  return icons[name] || null
}

export function HistoriaPage() {
  return (
    <article className="page-content">
      {/* Header de la página */}
      <header className="page-hero">
        <p className="section-tag">Contexto Histórico</p>
        <h1 className="section-title">Historia del Barroco</h1>
        <OrnamentDivider />
        <p className="page-lead">
          El barroco no fue solo arquitectura o pintura: fue una filosofía del exceso, 
          la ornamentación y la opulencia que permeó todos los ámbitos de la vida novohispana, 
          incluida su cocina.
        </p>
      </header>

      {/* Datos rápidos */}
      <div className="datos-rapidos-grid">
        {DATOS.map((d) => (
          <div key={d.titulo} className="dato-rapido-card">
            <span className="dato-rapido-icono">
              <BaroqueIcon name={d.icono} size={28} />
            </span>
            <p className="dato-rapido-titulo">{d.titulo}</p>
            <p className="dato-rapido-valor">{d.dato}</p>
          </div>
        ))}
      </div>

      {/* Texto principal */}
      <div className="page-text-block">
        <p>
          El nacimiento del barroco en México comenzó en la epoca colonial desde que los 
          conquistadores españoles establecieron la colonia en territorio americano que 
          al juntarse con las culturas indígenas ya presentes, formó un sincretismo que 
          marcó la estética, creencias y expresión cultural existente en ese momento de la historia.
        </p>
        <p>
          Las expresiones más influyentes del barroco fueron principalmente arquitectónicas 
          y pictóricas, pero también tuvo una gran influencia en la cocina de ese momento, 
          su tendencia a la sobre decoración y su cercana relación a la religión fueron las 
          2 bases principales del barroco.
        </p>
      </div>

      {/* Timeline */}
      <section className="timeline-section">
        <h2 className="timeline-heading">Cronología Barroca</h2>
        <div className="timeline">
          {PERIODOS.map((p, i) => (
            <div key={p.anio} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker">
                <BaroqueIcon name={p.icono} size={12} />
              </div>
              <div className="timeline-card">
                <h3 className="timeline-titulo">{p.titulo}</h3>
                <p className="timeline-desc">{p.desc}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </section>


    </article>
  )
}
