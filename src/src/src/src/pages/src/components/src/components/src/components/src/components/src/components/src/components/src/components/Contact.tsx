/**
 * Contact component with team members and contact information
 * Displays IPDHOR team and contact details
 */
import React from 'react'
import { Phone, Mail, MapPin, User, Crown, Users as UsersIcon } from 'lucide-react'

export default function Contact() {
  const teamMembers = [
    {
      name: 'YAV ZAMA LEONARD',
      role: 'Président National',
      phone: '+243 996 751 373',
      email: 'leonardyavzama03@gmail.com',
      icon: Crown
    },
    {
      name: 'PATRICE WONDA KAYIMBO',
      role: 'Vice-Président',
      phone: '+243 991 318 158',
      email: 'patricewonda0@gmail.com',
      icon: User
    },
    {
      name: 'SHILI DITONA GRACE',
      role: 'Secrétaire Exécutif',
      phone: '+243 999 979 118',
      email: '',
      icon: User
    },
    {
      name: 'RUBAB NZAM JACQUES',
      role: 'Trésorier',
      phone: '+243 970 016 127',
      email: 'jacqueszama925@gmail.com',
      icon: User
    },
    {
      name: 'JEAN KAKWATA KAZEMB',
      role: 'Conseiller Juridique',
      phone: '+243 997 724 265',
      email: 'jeankakwatakazemb@gmail.com',
      icon: User
    },
    {
      name: 'GLOIRE MALESU KANYIMBU',
      role: 'Rapporteur',
      phone: '+243 974 742 209',
      email: '',
      icon: User
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe dirigeante est à votre disposition pour répondre à vos questions 
            et discuter de collaborations potentielles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Informations générales */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-green-800 mr-2" />
                Informations Générales
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                  <p className="text-gray-600">
                    N° 100, Avenue 3Z<br />
                    Q/Moïse Tshombe, C/Manika<br />
                    Ville de Kolwezi<br />
                    Province du Lualaba, RDC
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Téléphones</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +243 824 744 447
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +243 974 848 481
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    ipdhor.asbl@gmail.com
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Site Web</h4>
                  <p className="text-gray-600">
                    www.ipdhorasbl.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Équipe dirigeante */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <UsersIcon className="h-6 w-6 text-green-800 mr-2" />
              Équipe Dirigeante
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${member.icon === Crown ? 'bg-yellow-100' : 'bg-green-100'}`}>
                      <member.icon className={`h-6 w-6 ${member.icon === Crown ? 'text-yellow-600' : 'text-green-600'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg mb-1">
                        {member.name}
                      </h4>
                      <p className={`font-semibold mb-3 ${member.icon === Crown ? 'text-yellow-600' : 'text-green-600'}`}>
                        {member.role}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <a 
                            href={`tel:${member.phone}`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {member.phone}
                          </a>
                        </div>
                        {member.email && (
                          <div className="flex items-center text-gray-600">
                            <Mail className="h-4 w-4 mr-2" />
                            <a 
                              href={`mailto:${member.email}`}
                              className="hover:text-green-600 transition-colors text-xs"
                            >
                              {member.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section partenariats */}
        <div className="bg-green-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Rejoignez Notre Mission
          </h3>
          <p className="text-lg mb-6 text-green-100">
            Nous recherchons des partenaires, des bailleurs de fonds et des bénévoles 
            pour renforcer notre impact en faveur des droits humains en RDC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ipdhor.asbl@gmail.com?subject=Partenariat%20IPDHOR"
              className="bg-yellow-500 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Devenir Partenaire
            </a>
            <a 
              href="tel:+243824744447"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
