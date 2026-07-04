import { OrnamentDivider } from './OrnamentDivider'

function DocIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

const PREVIEW_ICONS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    titulo: 'Objetivo',
    desc: 'Propósito principal de la investigación y su alcance académico.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    titulo: 'Metodología',
    desc: 'Enfoque y técnicas de investigación empleadas en el proyecto.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    titulo: 'Resultados',
    desc: 'Hallazgos principales y conclusiones del estudio gastronómico.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 21h12a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4z" />
        <path d="M19 17V5a2 2 0 0 0-4 0v12" />
        <path d="M8 3H5a2 2 0 0 0 0 4h3" />
        <line x1="11" y1="8" x2="16" y2="8" />
        <line x1="11" y1="12" x2="16" y2="12" />
      </svg>
    ),
    titulo: 'Conclusiones',
    desc: 'Aportaciones al conocimiento sobre la cocina barroca novohispana.',
  },
]

export function AbstractPage() {
  return (
    <article className="page-content">
      <header className="page-hero">
        <p className="section-tag">Resumen Académico</p>
        <h1 className="section-title">Abstract</h1>
        <OrnamentDivider />
      </header>

      {/* Placeholder visual */}
      <div className="abstract-placeholder">
        <div className="abstract-ornament">✦</div>
        <div className="abstract-placeholder-inner">
          <span className="abstract-icono">
            <DocIcon size={56} />
          </span>
          <h2 className="abstract-placeholder-titulo">Contenido en Preparación</h2>
          <p className="abstract-placeholder-desc">
            El abstract académico de esta investigación gastronómica está siendo 
            preparado por el equipo de la UTPH. Próximamente encontrarás aquí 
            el resumen completo del proyecto.
          </p>
          <div className="abstract-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="abstract-ornament">✦</div>
      </div>

      {/* Mock de secciones que tendrá */}
      <section className="abstract-preview-section">
        <h2 className="abstract-preview-titulo">Lo que incluirá este abstract</h2>
        <div className="abstract-preview-grid">
          {PREVIEW_ICONS.map((item) => (
            <div key={item.titulo} className="abstract-preview-card">
              <span className="abstract-preview-icono">{item.icon}</span>
              <h3 className="abstract-preview-card-titulo">{item.titulo}</h3>
              <p className="abstract-preview-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


    </article>
  )
}
