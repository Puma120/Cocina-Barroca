import { OrnamentDivider } from './OrnamentDivider'

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <OrnamentDivider />
      <p className="footer-logo">Cocina Barroca Poblana</p>
      <p className="footer-subtitle">Puebla de los Ángeles · Arte Culinario Virreinal</p>
      <p className="footer-credits" style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
        Hecha con <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: '-2px', margin: '0 2px' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> por <a href="https://github.com/Puma120" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-bright)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-gold)'} onMouseOut={(e) => e.target.style.color = 'var(--color-gold-bright)'}>Puma</a>
      </p>

      <p className="footer-bottom">
        © 2026 · Presentación gastronómica · Puebla, México<br />
        <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>
          Página de muestra — Contenido informativo con fines de presentación
        </span>
      </p>
    </footer>
  )
}
