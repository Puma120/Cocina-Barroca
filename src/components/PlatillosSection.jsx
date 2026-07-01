import { useState } from 'react'
import { PLATILLOS } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { OrnamentDivider } from './OrnamentDivider'
import { PlatilloCard } from './PlatilloCard'

export function PlatillosSection({ onPlatilloClick }) {
  const [filtro, setFiltro] = useState('todos')
  const ref = useReveal()
  const gridRef = useReveal()
  const tabsRef = useReveal()

  const filtrados = filtro === 'todos'
    ? PLATILLOS
    : PLATILLOS.filter(p => p.categoria === filtro)

  return (
    <section className="platillos-section" id="platillos" aria-labelledby="platillos-heading">
      <div className="platillos-inner">
        <p className="section-tag">Menú de Presentación</p>
        <h2 className="section-title reveal" id="platillos-heading" ref={ref}>
          Platillos & Bebidas
        </h2>
        <OrnamentDivider />

        <div className="categoria-tabs reveal" ref={tabsRef} role="group" aria-label="Filtrar por categoría">
          {[
            { key: 'todos', label: 'Todos' },
            { key: 'platillo', label: 'Platillos' },
            { key: 'postre', label: 'Postres' },
            { key: 'bebida', label: 'Bebidas' },
          ].map(tab => (
            <button
              key={tab.key}
              className={`tab-btn ${filtro === tab.key ? 'active' : ''}`}
              onClick={() => setFiltro(tab.key)}
              aria-pressed={filtro === tab.key}
              id={`tab-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="platillos-grid reveal-stagger" ref={gridRef}>
          {filtrados.map(platillo => (
            <PlatilloCard
              key={platillo.id}
              platillo={platillo}
              onClick={onPlatilloClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
