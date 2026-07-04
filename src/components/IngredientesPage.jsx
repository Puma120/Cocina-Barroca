import { OrnamentDivider } from './OrnamentDivider'

const INGREDIENTES = [
  {
    nombre: 'Especias y Condimentos',
    categoria: 'Español',
    desc: 'Gracias a la introducción de nuevos ingredientes por parte de los colonos españoles, se incorporaron a la cocina novohispana sabores intensos.',
    usos: ['Clavo', 'Pimienta', 'Canela'],
    color: '#8a2a00',
    icono: 'spice',
  },
  {
    nombre: 'Ganado Mayor y Menor',
    categoria: 'Español',
    desc: 'Los españoles introdujeron animales de cría, siendo una de las aportaciones más significativas para la manteca y la carne en los guisos.',
    usos: ['Cerdo'],
    color: '#7a3c1a',
    icono: 'seed',
  },
  {
    nombre: 'Frutos, Verduras y Cereales',
    categoria: 'Español',
    desc: 'Otros productos traídos de Europa enriquecieron los huertos locales, transformando la panadería, repostería y los acompañamientos.',
    usos: ['Trigo', 'Caña de azúcar', 'Lechuga', 'Rábanos', 'Habas', 'Mango', 'Limón', 'Naranja', 'Manzanas'],
    color: '#6a4a00',
    icono: 'leaf',
  },
  {
    nombre: 'Hierbas Aromáticas',
    categoria: 'Español',
    desc: 'Nuevos aromas se integraron a las cazuelas virreinales para perfumar los caldos, guisos y crear infusiones.',
    usos: ['Jamaica', 'Laurel', 'Tomillo'],
    color: '#2a5c0a',
    icono: 'flower',
  },
  {
    nombre: 'Alimentos Básicos',
    categoria: 'Autóctono',
    desc: 'Presentes en la cocina prehispánica, alimentos básicos que se cultivaban y consumían desde la antigüedad, ingredientes indispensables para las culturas indígenas.',
    usos: ['Maíz', 'Chile', 'Frijol'],
    color: '#8a7000',
    icono: 'grain',
  },
  {
    nombre: 'Vegetales y Frutos Nativos',
    categoria: 'Autóctono',
    desc: 'También se contaba con una gran riqueza en los cultivos mesoamericanos, fundamentales para el color y sabor de las salsas y bebidas.',
    usos: ['Calabaza', 'Jitomate', 'Vainilla', 'Chayote', 'Cacao'],
    color: '#a32020',
    icono: 'drop',
  },
  {
    nombre: 'Carnes de Caza',
    categoria: 'Autóctono',
    desc: 'Proteínas que ayudaban a proporcionar sabor a las preparaciones precoloniales antes de la introducción del ganado.',
    usos: ['Conejo'],
    color: '#5a3800',
    icono: 'flame',
  }
]

const CATEGORIAS = ['Todos', 'Autóctono', 'Español']

import { useState } from 'react'

function IngIcon({ name, size = 32 }) {
  const stroke = 'currentColor'
  const base = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }
  const icons = {
    flame:  <svg {...base}><path d="M12 2C6.5 9 9 13 9 13c-2-1-3-3.5-1-6-4 4-3 9 0 12a6 6 0 0 0 10-5c0-4-3-7-6-12z" /></svg>,
    leaf:   <svg {...base}><path d="M12 22V12" /><path d="M12 12C12 6 7 3 3 3c0 6 4 9 9 9z" /><path d="M12 12c0-6 5-9 9-9c0 6-4 9-9 9z" /></svg>,
    spice:  <svg {...base}><line x1="12" y1="2" x2="12" y2="22" /><path d="M8 6c0 0 1 2 4 2s4-2 4-2" /><path d="M7 12c0 0 1 2 5 2s5-2 5-2" /><path d="M8 18c0 0 1 2 4 2s4-2 4-2" /></svg>,
    flower: <svg {...base}><circle cx="12" cy="12" r="3" /><path d="M12 2a4 4 0 0 1 0 8 4 4 0 0 1 0-8z" opacity=".5" /><path d="M20 12a4 4 0 0 1-8 0 4 4 0 0 1 8 0z" opacity=".5" /><path d="M12 22a4 4 0 0 1 0-8 4 4 0 0 1 0 8z" opacity=".5" /><path d="M4 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0z" opacity=".5" /></svg>,
    star:   <svg {...base}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>,
    drop:   <svg {...base}><path d="M12 2C6 10 6 14 12 22c6-8 6-12 0-20z" /></svg>,
    grain:  <svg {...base}><ellipse cx="12" cy="12" rx="4" ry="6" /><path d="M12 6c-3-4-7-2-7 2s3 4 7 4" opacity=".5" /><path d="M12 18c3 4 7 2 7-2s-3-4-7-4" opacity=".5" /></svg>,
    seed:   <svg {...base}><path d="M12 22C6 16 4 8 12 2c8 6 6 14 0 20z" /><line x1="12" y1="2" x2="12" y2="22" strokeWidth="0.8" opacity="0.4" /></svg>,
  }
  return icons[name] || null
}

export function IngredientesPage() {
  const [filtro, setFiltro] = useState('Todos')
  const filtrados = filtro === 'Todos' ? INGREDIENTES : INGREDIENTES.filter((i) => i.categoria === filtro)

  return (
    <article className="page-content">
      <header className="page-hero">
        <p className="section-tag">Despensa Novohispana</p>
        <h1 className="section-title">Ingredientes Principales de la Época</h1>
        <OrnamentDivider />
        <p className="page-lead">
          Al juntar la riqueza de estas dos gastronomías y de las otras culturas que interactuaban en el México virreinal, como los restos de la cultura arabe que todavía se encontraban presentes en el dÍa a dÍa de los españoles, las tradiciones alimentarias de la cultura africana que llegaron al territorio debido a la trata de esclavos traídos por los españoles, se logró concebir algunos de los platillos más icónicos del estado y del país, como el chile en nogada y el mole poblano.
        </p>
      </header>

      {/* Filtros */}
      <div className="categoria-tabs">
        {CATEGORIAS.map((c) => (
          <button
            key={c}
            className={`tab-btn ${filtro === c ? 'active' : ''}`}
            onClick={() => setFiltro(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid de ingredientes */}
      <div className="ingredientes-page-grid">
        {filtrados.map((ing) => (
          <div key={ing.nombre} className="ingrediente-page-card">
            <div className="ingrediente-card-header" style={{ '--ing-color': ing.color }}>
              <span className="ingrediente-icono-big">
                <IngIcon name={ing.icono} size={32} />
              </span>
              <div>
                <span className="ingrediente-badge">{ing.categoria}</span>
                <h2 className="ingrediente-nombre">{ing.nombre}</h2>
              </div>
            </div>
            <div className="ingrediente-card-body">
              <p className="ingrediente-desc">{ing.desc}</p>
              <div className="ingrediente-usos">
                <p className="ingrediente-usos-titulo">Ejemplos:</p>
                <div className="ingrediente-usos-tags">
                  {ing.usos.map((u) => (
                    <span key={u} className="ingrediente-uso-tag">{u}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </article>
  )
}
