import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { HistoriaSection } from './components/HistoriaSection'
import { TalaveraStrip } from './components/TalaveraStrip'
import { PlatillosSection } from './components/PlatillosSection'
import { PlatilloModal } from './components/PlatilloModal'
import { Footer } from './components/Footer'

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
