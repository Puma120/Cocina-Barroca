export function PlatilloCard({ platillo, onClick }) {
  const badgeClass = {
    platillo: 'badge-platillo',
    postre: 'badge-postre',
    bebida: 'badge-bebida',
  }[platillo.categoria]

  const badgeLabel = {
    platillo: 'Platillo',
    postre: 'Postre',
    bebida: 'Bebida',
  }[platillo.categoria]

  return (
    <article
      className="platillo-card"
      onClick={() => onClick(platillo)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(platillo)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${platillo.nombre}`}
      id={`card-${platillo.id}`}
    >
      <div className="platillo-img-wrap">
        <img
          src={platillo.imagen}
          alt={platillo.nombre}
          loading="lazy"
        />
        <span className={`platillo-categoria-badge ${badgeClass}`}>{badgeLabel}</span>
      </div>
      <div className="platillo-info">
        <h3>{platillo.nombre}</h3>
        <p>{platillo.descripcionCorta}</p>
      </div>
      <div className="platillo-card-footer">
        <div className="chef-mini">
          <img
            className="chef-mini-avatar"
            src={platillo.chef.foto}
            alt={platillo.chef.nombre}
          />
          <span className="chef-mini-name">{platillo.chef.nombre.replace('Chef ', '').trim().split(' ').slice(0, 2).join(' ')}</span>
        </div>
        <span className="ver-mas-btn">
          Ver más <span className="ver-mas-arrow">→</span>
        </span>
      </div>
    </article>
  )
}
