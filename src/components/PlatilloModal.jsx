import { useEffect } from 'react'

export function PlatilloModal({ platillo, onClose }) {
  // Close on ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const badgeClass = {
    platillo: 'badge-platillo',
    postre: 'badge-postre',
    bebida: 'badge-bebida',
  }[platillo.categoria]

  const badgeLabel = { platillo: 'Platillo', postre: 'Postre', bebida: 'Bebida' }[platillo.categoria]

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      id="platillo-modal"
    >
      <div className="modal-panel">
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar detalle del platillo"
          id="modal-close-btn"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="1" y1="1" x2="13" y2="13"/>
            <line x1="13" y1="1" x2="1" y2="13"/>
          </svg>
        </button>

        {/* Hero image with close button overlaid */}
        <div className="modal-hero-overlay">
          <img
            className="modal-hero-img"
            src={platillo.imagen}
            alt={platillo.nombre}
          />
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-badge-wrap">
            <span className={`platillo-categoria-badge ${badgeClass}`} style={{ position: 'static', display: 'inline-flex' }}>
              {badgeLabel}
            </span>
          </div>

          <h2 className="modal-title" id="modal-title">{platillo.nombre}</h2>

          {/* Meta chips */}
          <div className="modal-datos-row">
            <div className="modal-dato-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>{platillo.origen}</strong>
            </div>
            <div className="modal-dato-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {platillo.tiempo}
            </div>
            <div className="modal-dato-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
              {platillo.porciones}
            </div>
          </div>

          {/* Descripción */}
          <p className="modal-desc">
            {platillo.descripcion}
          </p>

          {/* Historia */}
          <div className="modal-historia">
            <h4>Leyenda & Crónica Histórica</h4>
            <p>"{platillo.historia}"</p>
          </div>

          {/* Ingredientes */}
          <div className="modal-ingredientes">
            <h4>Ingredientes Principales</h4>
            <div className="ingredientes-grid">
              {platillo.ingredientes.map((ing, i) => (
                <span key={i} className="ingrediente-item">{ing}</span>
              ))}
            </div>
          </div>

          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-gold-deep), transparent)', marginBottom: 'var(--space-xl)' }} />

          {/* Chef */}
          <div className="modal-chef">
            <img
              className="modal-chef-img"
              src={platillo.chef.foto}
              alt={`Fotografía de ${platillo.chef.nombre}`}
            />
            <div className="modal-chef-info">
              <h4>Creador del platillo</h4>
              <h3>{platillo.chef.nombre}</h3>
              <p style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                {platillo.chef.titulo}
              </p>
              <p>{platillo.chef.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
