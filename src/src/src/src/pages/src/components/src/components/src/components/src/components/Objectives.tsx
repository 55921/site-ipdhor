/**
 * About section component
 * Displays IPDHOR mission, history, and key information
 */
import React from 'react'
import { Calendar, MapPin, Users, Target } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À Propos d'IPDHOR ASBL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Initiative pour la Protection des Droits de l'Homme et la Réinsertion Sociale
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Notre Histoire</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Créée le 27 juin 2022 à Kolwezi, dans la province du Lualaba, l'IPDHOR ASBL 
                est née d'une volonté profonde de contribuer au développement de notre société 
                en luttant contre les éléments qui freinent l'épanouissement humain.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Animés par l'amour et la compassion pour notre pays, nous nous sommes engagés 
                dans la protection des droits humains, l'encadrement et la rééducation des 
                individus présentant des problèmes psychologiques, ainsi que la formation 
                en autonomie financière.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Notre champ de bataille prioritaire : le phénomène des enfants de la rue, 
                avec pour objectif de faciliter la réinsertion de l'homme dans la société.
              </p>

              {/* Key Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Calendar className="h-8 w-8 text-green-800 mb-2" />
                  <h4 className="font-semibold text-gray-900">Création</h4>
                  <p className="text-gray-600">27 Juin 2022</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <MapPin className="h-8 w-8 text-green-800 mb-2" />
                  <h4 className="font-semibold text-gray-900">Siège</h4>
                  <p className="text-gray-600">Kolwezi, Lualaba</p>
                </div>
              </div>
            </div>

            {/* Right Content - Mission & Vision */}
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-800 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Notre Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Contribuer à la défense et à la protection des droits de l'homme, 
                  l'encadrement des enfants vulnérables pour la réinsertion sociale, 
                  l'éducation et la résolution des conflits en République Démocratique du Congo.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-green-800 p-8 rounded-xl shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-semibold">Notre Vision</h3>
                </div>
                <p className="leading-relaxed">
                  Un Congo où chaque individu, notamment les plus vulnérables, 
                  peut jouir pleinement de ses droits fondamentaux et contribuer 
                  au développement harmonieux de la société.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nos Valeurs</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">Respect de la personne</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">Intégrité et transparence</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">Équité et justice sociale</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">Professionnalisme</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">Compassion et empathie</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Key Stats */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
              IPDHOR en Chiffres
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">3+</div>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">9</div>
                <p className="text-gray-600">Services principaux</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">26</div>
                <p className="text-gray-600">Provinces couvertes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800 mb-2">100+</div>
                <p className="text-gray-600">Bénéficiaires assistés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
