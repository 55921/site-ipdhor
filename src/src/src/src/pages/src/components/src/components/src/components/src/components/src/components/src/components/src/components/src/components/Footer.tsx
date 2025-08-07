/**
 * Footer component with site navigation and organization info
 * Displays IPDHOR contact info and navigation links
 */
import React from 'react'
import { Scale, Phone, Mail, MapPin, Heart } from 'lucide-react'

interface FooterProps {
  setActiveSection: (section: string) => void
}

export default function Footer({ setActiveSection }: FooterProps) {
  const quickLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À Propos' },
    { id: 'services', label: 'Services' },
    { id: 'objectifs', label: 'Objectifs' }
  ]

  const resources = [
    { id: 'galerie', label: 'Galerie' },
    { id: 'rapports', label: 'Rapports' },
    { id: 'contact', label: 'Contact' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-full">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IPDHOR ASBL</h3>
                <p className="text-sm text-gray-400">Depuis 2022</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Initiative pour la Protection des Droits de l'Homme et la Réinsertion Sociale. 
              Nous œuvrons pour un Congo plus juste et équitable.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Heart className="h-4 w-4 mr-1 text-red-400" />
              <span>Au service de la communauté</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Ressources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:ipdhor.asbl@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  N° 100, Avenue 3Z<br />
                  Q/Moïse Tshombe<br />
                  Kolwezi, Lualaba, RDC
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>+243 824 744 447</div>
                  <div>+243 974 848 481</div>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                <a 
                  href="mailto:ipdhor.asbl@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ipdhor.asbl@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} IPDHOR ASBL. Tous droits réservés.
            </div>
            <div className="text-sm text-gray-400">
              Développé pour la protection des droits humains en RDC
            </div>
          </div>
        </div>

        {/* Message d'engagement */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            "Ensemble pour la dignité humaine et la justice sociale"
          </p>
        </div>
      </div>
    </footer>
  )
}
