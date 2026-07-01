import { useReveal } from '../hooks/useReveal'
import { OrnamentDivider } from './OrnamentDivider'

export function HistoriaSection() {
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
              El barroco conocido también como churrigueresco mexicano, refiriéndose a la corriente específica de barroco que se desarrolló en el México virreinal fue un movimiento artístico y cultural que nació en el periodo del siglo XVll al siglo XVlll, abarcando los años de 1601 a 1800,
              este estilo culinario se caracterizó por la opulencia, sabores contrastantes y altamente especiados, Repostería colorida y de gran dulzor, todo terminado con decoraciones detalladas que mostraban la complejidad y estatus del plato.
            </p>
            <p>
              Muchas de las técnicas culinarias de este tiempo se  crearon dentro de los diversos conventos que se establecieron a lo largo del territorio mexicano, a la mano de las monjas que trabajaban  dentro de ellos            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
