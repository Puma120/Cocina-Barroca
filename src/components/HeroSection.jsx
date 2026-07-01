export function HeroSection() {
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
