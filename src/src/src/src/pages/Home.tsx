/**
 * Home page component for IPDHOR website
 * Main page that displays all sections based on active navigation
 */
import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Objectives from '../components/Objectives'
import Gallery from '../components/Gallery'
import Reports from '../components/Reports'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('accueil')

  const renderSection = () => {
    switch (activeSection) {
      case 'apropos':
        return <About />
      case 'services':
        return <Services />
      case 'objectifs':
        return <Objectives />
      case 'galerie':
        return <Gallery />
      case 'rapports':
        return <Reports />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <About />
            <Services />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {renderSection()}
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  )
}
