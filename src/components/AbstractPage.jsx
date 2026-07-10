import { OrnamentDivider } from './OrnamentDivider'



export function AbstractPage() {
  return (
    <article className="page-content">
      <header className="page-hero">
        <p className="section-tag">Resumen Académico</p>
        <h1 className="section-title">Abstract</h1>
        <OrnamentDivider />
      </header>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-body" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'justify' }}>
          <p>
            La gastronomía barroca refleja el esplendor, la creatividad y el lujo característicos de la cultura barroca desarrollada entre los siglos XVII y XVIII. Durante este periodo, la alimentación dejó de cumplir únicamente una función nutritiva para convertirse en una expresión de poder, riqueza y prestigio social. Los banquetes se distinguían por la abundancia de platillos, la presentación artística, el uso de ingredientes exóticos como especias, azúcar y cacao, así como por elaboradas técnicas culinarias que buscaban sorprender a los comensales. La influencia del Barroco contribuyó al desarrollo de la alta cocina y de la gastronomía como una manifestación cultural y artística, cuyo legado aún puede observarse en la importancia otorgada a la estética, la innovación y la experiencia gastronómica.
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
            Baroque gastronomy reflects the splendor, creativity, and luxury characteristic of the Baroque culture that flourished between the 17th and 18th centuries. During this period, food transcended its purely nutritional function to become an expression of power, wealth, and social prestige. Banquets were distinguished by an abundance of dishes, artistic presentation, the use of exotic ingredients—such as spices, sugar, and cocoa—and elaborate culinary techniques designed to astonish diners. The influence of the Baroque era contributed to the development of haute cuisine and gastronomy as a form of cultural and artistic expression, a legacy still evident today in the emphasis placed on aesthetics, innovation, and the dining experience.
          </p>
        </div>
      </div>


    </article>
  )
}
