export function HeroSection() {
  const handleScrollToPlatillos = (e) => {
    e.preventDefault()
    const target = document.getElementById('platillos')
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.scrollY
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1500 // 1.5 seconds to make it obvious there is content in between
    let start = null

    const easeInOutCubic = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t * t + b
      t -= 2
      return c / 2 * (t * t * t + 2) + b
    }

    const animation = (currentTime) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      } else {
        window.scrollTo(0, targetPosition)
      }
    }

    requestAnimationFrame(animation)
  }

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
        <a href="#platillos" className="btn-primary" id="hero-cta" onClick={handleScrollToPlatillos}>
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
