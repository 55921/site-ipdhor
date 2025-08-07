/**
 * Reports section component
 * Displays IPDHOR publications and research reports
 */
import React from 'react'
import { FileText, Download, Calendar, ExternalLink } from 'lucide-react'

export default function Reports() {
  const reports = [
    {
      title: "Analyse critique des mesures d'assainissement du fonctionnement des coopératives minières",
      description: "Rapport détaillé sur les mesures gouvernementales concernant les coopératives minières et les entités de traitement des substances minérales en RDC, avec focus sur la province du Lualaba.",
      date: "Mars 2025",
      category: "Exploitation Minière",
      pages: "25 pages",
      language: "Français",
      featured: true
    },
    {
      title: "État des lieux des droits humains dans le secteur minier artisanal",
      description: "Analyse approfondie de la situation des droits de l'homme dans les zones d'exploitation minière artisanale du Lualaba.",
      date: "Février 2025",
      category: "Droits Humains",
      pages: "32 pages",
      language: "Français",
      featured: false
    },
    {
      title: "Impact social de l'exploitation minière sur les communautés locales",
      description: "Étude sur les conséquences socio-économiques de l'activité minière sur les populations de Kolwezi et environs.",
      date: "Janvier 2025",
      category: "Impact Social",
      pages: "28 pages",
      language: "Français",
      featured: false
    },
    {
      title: "Rapport annuel d'activités IPDHOR 2024",
      description: "Bilan complet des activités, réalisations et défis de l'organisation pour l'année 2024.",
      date: "Décembre 2024",
      category: "Rapport Annuel",
      pages: "45 pages",
      language: "Français",
      featured: false
    },
    {
      title: "Guide pratique des droits des prisonniers en RDC",
      description: "Manuel pratique destiné aux familles et aux détenus pour comprendre leurs droits fondamentaux.",
      date: "Novembre 2024",
      category: "Guide Pratique",
      pages: "20 pages",
      language: "Français",
      featured: false
    },
    {
      title: "Stratégie de réinsertion sociale des enfants de la rue",
      description: "Document stratégique présentant les approches innovantes pour la réinsertion des enfants vulnérables.",
      date: "Octobre 2024",
      category: "Stratégie",
      pages: "35 pages",
      language: "Français",
      featured: false
    }
  ]

  const publications = [
    {
      title: "Bulletin trimestriel IPDHOR",
      description: "Publication périodique sur nos activités et les enjeux de droits humains",
      frequency: "Trimestriel",
      lastIssue: "T4 2024"
    },
    {
      title: "Notes de plaidoyer",
      description: "Documents techniques sur les questions de politique publique",
      frequency: "Mensuel",
      lastIssue: "Mars 2025"
    },
    {
      title: "Communiqués de presse",
      description: "Prises de position publiques sur l'actualité des droits humains",
      frequency: "Selon actualité",
      lastIssue: "Mars 2025"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rapports et Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos travaux de recherche, analyses et rapports d'activités qui documentent 
              notre engagement pour la protection des droits humains en RDC.
            </p>
          </div>

          {/* Featured Report */}
          {reports.filter(report => report.featured).map((report, index) => (
            <div key={index} className="mb-12">
              <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-2xl p-8 md:p-12 text-white">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-2/3 mb-6 lg:mb-0">
                    <div className="inline-block bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Rapport Principal
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {report.title}
                    </h3>
                    <p className="text-green-100 mb-6 leading-relaxed">
                      {report.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {report.date}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        {report.pages}
                      </div>
                      <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {report.category}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:pl-8">
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                      <FileText className="h-16 w-16 mx-auto mb-4" />
                      <a 
                        href="mailto:ipdhor.asbl@gmail.com?subject=Demande de rapport - Analyse critique des mesures d'assainissement"
                        className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Reports Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Autres Rapports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.filter(report => !report.featured).map((report, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FileText className="h-6 w-6 text-green-800" />
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {report.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {report.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {report.date}
                    </span>
                    <span>{report.pages}</span>
                  </div>
                  <a 
                    href={`mailto:ipdhor.asbl@gmail.com?subject=Demande de rapport - ${report.title}`}
                    className="text-green-800 font-semibold hover:text-green-600 flex items-center"
                  >
                    Demander le rapport
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Publications Régulières</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {pub.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {pub.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fréquence:</span>
                      <span className="font-medium">{pub.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dernier numéro:</span>
                      <span className="font-medium">{pub.lastIssue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Reports */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accès aux Publications
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Pour accéder à nos rapports complets ou recevoir nos publications régulières, 
              contactez-nous directement. Nous partageons volontiers nos recherches avec 
              les partenaires, chercheurs et acteurs intéressés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ipdhor.asbl@gmail.com?subject=Demande d'accès aux publications IPDHOR"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Demander l'accès
              </a>
              <a 
                href="tel:+243824744447"
                className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-800 hover:text-white transition-colors"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
