import { OrnamentDivider } from './OrnamentDivider'

export function Footer() {
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
