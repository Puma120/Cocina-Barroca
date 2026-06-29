import { useState, useEffect, useRef } from 'react'
import './App.css'

// ============================================================
// DATA — Mock content for the Cocina Barroca Poblana sample
// ============================================================

const CHEFS = {
  maria: {
    id: 'maria',
    nombre: 'Chef María Ríos',
    titulo: 'Maestra de la Cocina Conventual',
    foto: '/chef_mujer.avif',
    bio: 'Nacida en los callejones de Analco, Puebla, María lleva más de 30 años preservando y reinventando las recetas conventuales del siglo XVIII. Formada en la tradición oral de las cocinas oaxaqueñas y poblanas, hoy dirige el taller gastronómico del Centro Histórico.',
  },
  carlos: {
    id: 'carlos',
    nombre: 'Chef Carlos Esteban Villanueva',
    titulo: 'Cronista Culinario & Chef Investigador',
    foto: '/chef_hombre.avif',
    bio: 'Egresado del Instituto Culinario de México, Carlos dedicó 10 años a estudiar el mestizaje gastronómico del virreinato. Especialista en técnicas de fermentación prehispánica y en el uso de chiles endémicos de la Mixteca-Popoloca.',
  },
}

const PLATILLOS = [
  {
    id: 'mole-poblano',
    nombre: 'Mole Poblano',
    categoria: 'platillo',
    imagen: '/mole_poblano_mio.jpg',
    descripcionCorta: 'La obra maestra de la cocina barroca. Una sinfonía de más de 30 ingredientes que conquista el alma.',
    descripcion: `El Mole Poblano es considerado la joya máxima de la gastronomía mexicana y arquetipo perfecto de la cocina barroca: complejo, exuberante y profundamente espiritual en su elaboración. La leyenda lo ubica en el Convento de Santa Rosa, donde Sor Andrea de la Asunción lo creó como ofrenda para la visita del Virrey Tomás Antonio de la Cerda en el siglo XVII.\n\nSu color oscuro y brillante, casi obsidiana dorada, esconde una arquitectura de sabores que incluye chiles mulato, ancho, chipotle y pasilla; semillas de ajonjolí y pepita; especias de Oriente como canela, clavo y pimienta negra; y el sutil toque final del chocolate criollo que le confiere profundidad y equilibrio.`,
    historia: 'Según la crónica del cronista Miguel de Torres (1700), las monjas del Convento de Santa Catalina de Siena molieron durante tres días todos los ingredientes en metates de basalto, cantando himnos mientras trabajaban. El resultado fue tan extraordinario que el Virrey lloró al probarlo.',
    ingredientes: ['Chile mulato', 'Chile ancho', 'Chile chipotle', 'Chile pasilla', 'Chocolate criollo', 'Ajonjolí', 'Pepita de calabaza', 'Cacahuate', 'Cebolla asada', 'Ajo tatemado', 'Jitomate', 'Tortilla quemada', 'Plátano macho', 'Canela', 'Clavo', 'Pimienta negra', 'Comino', 'Tomillo', 'Mejorana', 'Caldo de guajolote'],
    origen: 'Convento de Santa Rosa, Puebla — Siglo XVII',
    tiempo: '6-8 horas de elaboración',
    porciones: '12 raciones',
    chef: CHEFS.maria,
  },
  {
    id: 'chiles-nogada',
    nombre: 'Chiles en Nogada',
    categoria: 'platillo',
    imagen: '/chiles-en-nogada-mio.jpg',
    descripcionCorta: 'El platillo tricolor que nació para celebrar la Independencia. Belleza, patria y sabor en un solo bocado.',
    descripcion: `Los Chiles en Nogada son quizás el platillo más simbólico y hermoso de toda la cocina mexicana. Su creación se atribuye a las monjas agustinas del Convento de Santa Mónica en 1821, quienes los prepararon en honor de Agustín de Iturbide al celebrar la firma de los Tratados de Córdoba.\n\nEl chile poblano verde, carnoso y aromático, se rellena con picadillo de carne de cerdo y res, al que se añaden frutas de temporada: durazno, pera, manzana, plátano, acitrón y pasas. La nogada —salsa de nuez de Castilla fresca, queso de cabra y jerez— lo baña en blanco cremoso. Granada roja y perejil fresco completan los colores de la bandera trigarante.`,
    historia: 'En el banquete del 28 de agosto de 1821, don Agustín de Iturbide, emocionado ante el platillo, pronunció: "Estas religiosas han pintado la bandera de nuestra nación con la paleta más sublime: el sabor". La tradición se celebra cada temporada de granadas, entre julio y septiembre.',
    ingredientes: ['Chile poblano', 'Carne de cerdo', 'Carne de res', 'Durazno criollo', 'Pera', 'Manzana', 'Plátano macho', 'Acitrón', 'Pasas', 'Almendra', 'Granada de China', 'Nuez de Castilla fresca', 'Queso de cabra', 'Jerez seco', 'Perejil liso', 'Canela', 'Cebolla', 'Tomate rojo'],
    origen: 'Convento de Santa Mónica, Puebla — 1821',
    tiempo: '4 horas de elaboración',
    porciones: '8 raciones',
    chef: CHEFS.carlos,
  },
  {
    id: 'pipian-verde',
    nombre: 'Pipián Verde en Mole Blanco',
    categoria: 'platillo',
    imagen: '/pipian_verde_mio.jpg',
    descripcionCorta: 'Herencia prehispánica en salsa esmeralda. La pepita y los tomatillos en perfecta armonía virreinal.',
    descripcion: `El Pipián es una de las preparaciones más antiguas de Mesoamérica, anterior a la llegada de los españoles. Se trata de una salsa espesa elaborada a base de semillas de calabaza (pepitas) molidas, que en su versión verde incorpora tomatillo, chile verde, cilantro y epazote.\n\nEn la versión poblana virreinal, el pipián se fusionó con técnicas españolas de reducción de salsas, añadiendo un fondo de mole blanco (almendra, ajonjolí, chile güero y especias suaves) que le confiere esa complejidad característica de la cocina conventual del siglo XVIII. Se sirve tradicionalmente sobre lomo de cerdo o codorniz de temporada.`,
    historia: 'Los frailes dominicos que llegaron a Puebla en 1531 documentaron en su crónica Relación de Tlaxcala que los pueblos de la región preparaban esta salsa verde para los guerreros antes de la batalla, pues se creía que la pepita de calabaza daba fortaleza. Las monjas poblanas adoptaron y refinaron la receta hacia 1640.',
    ingredientes: ['Pepita de calabaza verde', 'Tomatillo', 'Chile serrano', 'Chile güero', 'Cilantro fresco', 'Epazote', 'Ajo', 'Cebolla blanca', 'Almendra blanqueada', 'Ajonjolí blanco', 'Caldo de pollo', 'Manteca de cerdo', 'Lomo de cerdo', 'Sal de grano', 'Comino'],
    origen: 'Cocina conventual dominica, Puebla — Siglo XVII',
    tiempo: '2 horas de elaboración',
    porciones: '6 raciones',
    chef: CHEFS.carlos,
  },
  {
    id: 'cemitas-poblanas',
    nombre: 'Cemitas Poblanas',
    categoria: 'platillo',
    imagen: '/cemitas-de-puebla-mia.jpg',
    descripcionCorta: 'El antojito mayor de Puebla. Pan de ajonjolí, milanesa, aguacate y quesillo en glorioso conjunto.',
    descripcion: `La Cemita Poblana es el rey de los antojitos poblanos, y su historia es tan mestiza como Puebla misma. El pan de agua de doble rodillo, salpicado de semillas de ajonjolí, tiene origen en el pan español de cemita traído por los colonizadores, que se fusionó con las técnicas de panificación conventual del siglo XVI.\n\nSu relleno clásico incluye milanesa de res dorada en manteca, aguacate en rodajas gruesas, chipotles adobados, frijoles negros refritos y tiras de quesillo oaxaqueño. Lo que la hace inimitable es el pápalo, hierba aromática prehispánica de sabor intenso y silvestre que ningún otro platillo mexicano usa con tanta generosidad.`,
    historia: 'El mercado El Carmen, fundado en el siglo XIX, fue el primer espacio donde las cemeítas se estandarizaron como platillo de mercado. Se dice que los trabajadores de las fábricas de talavera las consumían cada mañana antes de entrar al taller. Hoy el Mercado de San Miguelito es su templo mayor.',
    ingredientes: ['Pan de cemita (ajonjolí)', 'Milanesa de res', 'Aguacate criollo', 'Chipotle adobado', 'Quesillo oaxaqueño', 'Frijoles negros refritos', 'Pápalo fresco', 'Cebolla blanca', 'Manteca de cerdo', 'Sal y pimienta'],
    origen: 'Mercados del Centro Histórico, Puebla — Siglo XIX',
    tiempo: '45 minutos',
    porciones: '4 raciones',
    chef: CHEFS.maria,
  },
  {
    id: 'tortitas-santa-clara',
    nombre: 'Tortitas de Santa Clara',
    categoria: 'postre',
    imagen: '/postre_tortitas_mio.jpg',
    descripcionCorta: 'El postre conventual más famoso de Puebla. Pasta de pepita, azúcar glass y tradición de cinco siglos.',
    descripcion: `Las Tortitas de Santa Clara son el dulce más emblemático de Puebla y uno de los más antiguos del continente americano. Su nombre honra al Convento Inmaculada Concepción de Santa Clara, fundado en 1607, donde las monjas clarisas las crearon como una de sus labores culinarias para el sustento del convento.\n\nSon galletas redondas de masa de trigo, cubiertas con una gruesa capa de pasta de pepita de calabaza dulce y glasé de azúcar formando un disco blanco con borde dorado. La combinación de texturas —la galleta crujiente, la pasta suave y el azúcar vítreo— y la profundidad de sabor de la pepita tostada las convierte en un bocado verdaderamente barroco: complejo, opulento y memorable.`,
    historia: 'Fray Álvaro Gómez de Llanos documentó en 1702 que las monjas clarisas vendían estos dulces a los transeúntes del callejón de Santa Clara (hoy Calle 3 Sur) para financiar las obras de decoración de su iglesia con azulejos de talavera. Los fondos así recaudados costearon parte de los retablos churriguerescos que aún pueden admirarse hoy.',
    ingredientes: ['Harina de trigo', 'Mantequilla', 'Azúcar', 'Yema de huevo', 'Pepita de calabaza pelada', 'Azúcar glass', 'Clara de huevo', 'Canela molida', 'Esencia de vainilla', 'Sal de grano'],
    origen: 'Convento de Santa Clara, Puebla — Siglo XVII',
    tiempo: '3 horas (incluyendo enfriado)',
    porciones: '24 piezas',
    chef: CHEFS.maria,
  },
  {
    id: 'rompope-puebla',
    nombre: 'Rompope de Santa Clara',
    categoria: 'bebida',
    imagen: '/rompope_mio.jpg',
    descripcionCorta: 'La bebida conventual más amada de México. Yemas de huevo, leche, canela y la gracia de las monjas clarisas.',
    descripcion: `El Rompope es posiblemente la bebida más famosa creada dentro de los muros de un convento en toda América. Las monjas del Convento de Santa Clara de Puebla lo desarrollaron en el siglo XVII, y su fórmula —cuidadosamente guardada durante generaciones— combina la tradición española del eggnog con ingredientes del nuevo mundo como la vainilla de Veracruz y el aguardiente de caña.\n\nSu elaboración es un proceso meditativo: las yemas de huevo fresco se baten a mano durante horas con azúcar, luego se incorporan a la leche hervida con canela, vainilla y cáscara de limón. Finalmente el alcohol —aguardiente de caña o brandy— se integra en su justa proporción. El resultado es una bebida espesa, aromática, de color dorado que evoca el esplendor de los retablos barrocos.`,
    historia: 'Según el manuscrito Libro de cargos y datas del Convento de Santa Clara (1669), la Madre Superiora Sor Angélica de San Joaquín anotó en el libro de gastos: "Compramos doce docenas de güevos para el Rompope de las fiestas patronales". Esa es la primera referencia escrita de la bebida en América.',
    ingredientes: ['Leche entera fresca', 'Yemas de huevo criollo', 'Azúcar', 'Canela en rama', 'Vainilla de Veracruz', 'Aguardiente de caña', 'Cáscara de limón', 'Almidón de maíz', 'Nuez moscada'],
    origen: 'Convento de Santa Clara, Puebla — Siglo XVII',
    tiempo: '2 horas + enfriado nocturno',
    porciones: '1 litro',
    chef: CHEFS.carlos,
  },
]

// ============================================================
// ORNAMENT SVG — Simple baroque separator
// ============================================================
const OrnamentDivider = () => (
  <div className="ornament-divider" aria-hidden="true">
    <span>✦</span>
    <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-deep)' }}>❧</span>
    <span>✦</span>
  </div>
)

// ============================================================
// HOOK — Intersection Observer for reveal animations
// ============================================================
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ============================================================
// COMPONENTS
// ============================================================

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Navegación principal">
      <div className="navbar-brand">
        <span>Cocina Barroca</span>
        Puebla de los Ángeles · Nueva España
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-label="Portada">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">Puebla de los Ángeles · Nueva España · Siglo XVII–XVIII</p>
        <h1 className="hero-title">Cocina<br />Barroca<br />Poblana</h1>
        <p className="hero-subtitle">Arte, Historia & Sabor</p>
        <p className="hero-desc">
          Una experiencia gastronómica que celebra el esplendor del barroco churrigueresco
          y los sabores eternos de los conventos poblanos.
        </p>
        <a href="#platillos" className="btn-primary" id="hero-cta">
          Explorar Platillos <span>→</span>
        </a>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span>Descubrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function HistoriaSection() {
  const gridRef = useReveal()
  return (
    <section className="historia-section gold-border-top" id="historia" aria-labelledby="historia-heading">
      <div className="historia-inner">
        <p className="section-tag">Historia & Contexto</p>
        <h2 className="section-title" id="historia-heading">
          La Cocina como Arte Barroco
        </h2>
        <OrnamentDivider />
        <div className="historia-grid reveal" ref={gridRef}>
          <div className="historia-img-wrap">
            <img
              src="/puebla_catedral_mio.webp"
              alt="Catedral de Puebla al atardecer, arquitectura barroca churrigueresca"
              loading="lazy"
            />
          </div>
          <div className="historia-text">
            <p>
              Puebla de los Ángeles fue fundada en 1531 como la ciudad de los ángeles, y desde su primer siglo se convirtió en el laboratorio culinario más sofisticado de la Nueva España. Su posición estratégica entre el puerto de Veracruz y la capital virreinal la convirtió en cruce de sabores: ingredientes prehispánicos, especias de Oriente, técnicas árabes y refinamiento conventual español.
            </p>
            <p>
              Los conventos fueron los grandes talleres de esta cocina barroca: las monjas dominicas, agustinas y clarisas cocinaban con la misma complejidad ornamental con la que los maestros churriguerescos tallaban los retablos dorados de sus iglesias. El mole, con sus treinta ingredientes y sus horas de metate, es la expresión culinaria más perfecta del <em>horror vacui</em> barroco.
            </p>
            <div className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="dato-card">
                <span className="dato-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </span>
                <div>
                  <h4>Conventos Fundadores</h4>
                  <p>Santa Rosa, Santa Mónica, Santa Clara y La Concepción fueron los cuatro pilares de la gastronomía conventual poblana del siglo XVII.</p>
                </div>
              </div>
              <div className="dato-card">
                <span className="dato-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <div>
                  <h4>Mestizaje Culinario</h4>
                  <p>La fusión de ingredientes prehispánicos (chiles, cacao, pepita) con técnicas europeas (fritos, estofados, repostería) creó una cocina única en el mundo.</p>
                </div>
              </div>
              <div className="dato-card">
                <span className="dato-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </span>
                <div>
                  <h4>Patrimonio UNESCO</h4>
                  <p>La gastronomía mexicana fue declarada Patrimonio Cultural Inmaterial de la Humanidad en 2010, siendo la cocina poblana uno de sus pilares fundamentales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TalaveraStrip() {
  return (
    <div className="talavera-strip" role="complementary">
      <p>
        <strong>"La cocina poblana es el único arte total que existe:</strong> combina la arquitectura del sabor,
        la pintura del color, la escultura de la textura y la música del aroma en un solo acto creador,
        efímero y eterno a la vez."
        <br />
        <em style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>— Investigación culinaria del Centro Histórico de Puebla</em>
      </p>
    </div>
  )
}

function PlatilloCard({ platillo, onClick }) {
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
          <span className="chef-mini-name">{platillo.chef.nombre.split(' ').slice(1, 3).join(' ')}</span>
        </div>
        <span className="ver-mas-btn">
          Ver más <span className="ver-mas-arrow">→</span>
        </span>
      </div>
    </article>
  )
}

function PlatillosSection({ onPlatilloClick }) {
  const [filtro, setFiltro] = useState('todos')
  const ref = useReveal()
  const gridRef = useReveal()

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

        <div className="categoria-tabs reveal" ref={useReveal()} role="group" aria-label="Filtrar por categoría">
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

function PlatilloModal({ platillo, onClose }) {
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
        {/* Hero image with close button overlaid */}
        <div className="modal-hero-overlay">
          <img
            className="modal-hero-img"
            src={platillo.imagen}
            alt={platillo.nombre}
          />
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

function Footer() {
  return (
    <footer className="footer" id="footer">
      <OrnamentDivider />
      <p className="footer-logo">Cocina Barroca Poblana</p>
      <p className="footer-subtitle">Puebla de los Ángeles · Arte Culinario Virreinal</p>
      <p className="footer-bottom">
        © 2026 · Presentación gastronómica · Puebla, México<br />
        <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>
          Página de muestra — Contenido informativo con fines de presentación
        </span>
      </p>
    </footer>
  )
}

// ============================================================
// APP ROOT
// ============================================================
export default function App() {
  const [modalPlatillo, setModalPlatillo] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HistoriaSection />
        <TalaveraStrip />
        <PlatillosSection onPlatilloClick={setModalPlatillo} />
      </main>
      <Footer />

      {modalPlatillo && (
        <PlatilloModal
          platillo={modalPlatillo}
          onClose={() => setModalPlatillo(null)}
        />
      )}
    </>
  )
}
