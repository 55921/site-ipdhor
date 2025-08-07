/**
 * Hero section component
 * Main banner with IPDHOR mission statement and call-to-action
 */
import React from 'react'
import { ArrowRight, Heart, Users, Shield } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Initiative pour la
            <span className="block text-yellow-300">Protection des Droits</span>
            de l'Homme
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Et la Réinsertion Sociale en République Démocratique du Congo
          </p>
          
          {/* Description */}
          <p className="text-lg mb-12 text-green-50 max-w-3xl mx-auto leading-relaxed">
            IPDHOR ASBL s'engage à défendre les droits humains, à encadrer les enfants vulnérables 
            et à promouvoir la réinsertion sociale pour un Congo plus juste et équitable.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setActiveSection('apropos')}
              className="bg-yellow-500 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center group"
            >
              Découvrir notre mission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors"
            >
              Nous contacter
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Protection</h3>
              <p className="text-green-100">Des droits fondamentaux</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Réinsertion</h3>
              <p className="text-green-100">Sociale et professionnelle</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Encadrement</h3>
              <p className="text-green-100">Des enfants vulnérables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
