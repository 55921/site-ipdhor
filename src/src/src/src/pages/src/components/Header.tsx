/**
 * Header component with navigation menu
 * Displays IPDHOR logo and navigation links
 */
import React, { useState } from 'react'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À Propos' },
    { id: 'services', label: 'Services' },
    { id: 'objectifs', label: 'Objectifs' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'rapports', label: 'Rapports' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-green-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+243 824 744 447 / +243 974 848 481</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>ipdhor.asbl@gmail.com</span>
              </div>
            </div>
            <div className="text-sm">
              N° 100, Avenue 3Z, Q/Moïse Tshombe, Kolwezi, Lualaba, RDC
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-800 p-2 rounded-full">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">IPDHOR ASBL</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Initiative pour la Protection des Droits de l'Homme</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-green-800 text-white'
                      : 'text-gray-700 hover:bg-green-100 hover:text-green-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`px-4 py-2 rounded-md text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-green-800 text-white'
                        : 'text-gray-700 hover:bg-green-100 hover:text-green-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t text-sm text-gray-600">
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+243 824 744 447</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>ipdhor.asbl@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
