import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { id: 'historia',      label: 'Historia del Barroco' },
  { id: 'ingredientes',  label: 'Ingredientes de la Época' },
  { id: 'abstract',      label: 'Abstract' },
]

export function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar el menu al cambiar de pagina
  useEffect(() => { setMenuOpen(false) }, [currentPage])

  const handleNav = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo / Home */}
        <button
          className="navbar-brand"
          onClick={() => handleNav('home')}
          aria-label="Volver al inicio"
        >
          <span>Cocina Barroca</span>
        </button>

        {/* Desktop menu */}
        <div className="navbar-menu" role="menubar">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar-item ${currentPage === link.id ? 'navbar-item--active' : ''}`}
              onClick={() => handleNav(link.id)}
              role="menuitem"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'navbar-hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`navbar-drawer ${menuOpen ? 'navbar-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar-drawer-inner">
          <button
            className={`navbar-drawer-item ${currentPage === 'home' ? 'navbar-drawer-item--active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Inicio
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar-drawer-item ${currentPage === link.id ? 'navbar-drawer-item--active' : ''}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay to close drawer */}
      {menuOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
