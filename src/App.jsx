import { useState, useEffect, useRef } from 'react'
import './App.css'

import { Navbar }            from './components/Navbar'
import { HeroSection }       from './components/HeroSection'
import { HistoriaSection }   from './components/HistoriaSection'
import { TalaveraStrip }     from './components/TalaveraStrip'
import { PlatillosSection }  from './components/PlatillosSection'
import { PlatilloModal }     from './components/PlatilloModal'
import { Footer }            from './components/Footer'
import { HistoriaPage }      from './components/HistoriaPage'
import { IngredientesPage }  from './components/IngredientesPage'
import { AbstractPage }      from './components/AbstractPage'

const HOME_PAGE = 'home'

function PageTransition({ children, pageKey }) {
  const [displayKey, setDisplayKey] = useState(pageKey)
  const [animState, setAnimState] = useState('idle') // 'idle' | 'exit' | 'enter'
  const pendingKey = useRef(null)

  useEffect(() => {
    if (pageKey === displayKey) return
    pendingKey.current = pageKey
    setAnimState('exit')
  }, [pageKey]) // eslint-disable-line

  const handleAnimEnd = () => {
    if (animState === 'exit') {
      setDisplayKey(pendingKey.current)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setAnimState('enter')
    } else if (animState === 'enter') {
      setAnimState('idle')
    }
  }

  return (
    <div
      className={`page-transition page-transition--${animState}`}
      onAnimationEnd={handleAnimEnd}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(HOME_PAGE)
  const [modalPlatillo, setModalPlatillo] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'historia':     return <HistoriaPage />
      case 'ingredientes': return <IngredientesPage />
      case 'abstract':     return <AbstractPage />
      default:
        return (
          <>
            <HeroSection onNavigate={setCurrentPage} />
            <HistoriaSection />
            <TalaveraStrip />
            <PlatillosSection onPlatilloClick={setModalPlatillo} />
            <Footer />
          </>
        )
    }
  }

  const isInnerPage = currentPage !== HOME_PAGE

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main>
        <PageTransition pageKey={currentPage}>
          {isInnerPage ? (
            <div className="inner-page-wrapper">
              {renderPage()}
            </div>
          ) : (
            renderPage()
          )}
        </PageTransition>
      </main>

      {modalPlatillo && (
        <PlatilloModal
          platillo={modalPlatillo}
          onClose={() => setModalPlatillo(null)}
        />
      )}
    </>
  )
}
