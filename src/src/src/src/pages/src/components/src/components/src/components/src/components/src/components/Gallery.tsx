/**
 * Gallery section component
 * Displays IPDHOR activities and events in photos
 */
import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/bb8fef2e-1e43-4463-8850-7918b2c15134.jpg",
      title: "Assemblée Mondiale PCQVP 2025",
      description: "Participation à l'Assemblée mondiale de Publish What You Pay en Indonésie"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/535f12dd-eb3c-4e93-b38a-83007da943d8.jpg",
      title: "Formation et Encadrement",
      description: "Sessions de formation et d'encadrement de nos bénéficiaires"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/9e8613fb-9b34-4b60-8c4c-1bfff9ce5712.jpg",
      title: "Mobilisation pour la Paix",
      description: "Action de mobilisation populaire pour la paix sans frontières"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/9d9288c7-fa41-4e7d-b778-ff9e0f3fe2e2.jpg",
      title: "Alternative Indaba de l'OC",
      description: "Participation à l'édition de l'Alternative Indaba sur la transition politique"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/561a3eaf-be8a-4f78-b33c-50a152600555.jpg",
      title: "Sensibilisation Communautaire",
      description: "Campagne de sensibilisation sur les droits humains et la justice sociale"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/e36c4446-7696-4a6c-b1ea-065441d5b947.jpg",
      title: "Rassemblement Public",
      description: "Grand rassemblement pour la sensibilisation aux enjeux sociétaux"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/f56973ee-506d-49cc-95c9dde26cd05e79.jpg",
      title: "Événement de Sensibilisation",
      description: "Événement public de sensibilisation et mobilisation citoyenne"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/f024bc5a-5955-4a9f-b7e0-804a9133e0be.jpg",
      title: "Réunions Communautaires",
      description: "Rencontres avec les communautés locales pour identifier leurs besoins"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/8f5a501c-9e8f-44f8-88c9-7b7a38a204ef.jpg",
      title: "Formation des Jeunes",
      description: "Programmes de formation professionnelle pour l'insertion des jeunes"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/6ae48da7-5441-4220-bd2e-f1d2e5fef8e2.jpg",
      title: "Autonomisation des Femmes",
      description: "Activités d'encadrement et d'autonomisation des femmes"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/b9dce1d4-259c-4b1d-83e8-62dd8f2aaf4d.jpg",
      title: "Ateliers Droits Humains",
      description: "Ateliers de sensibilisation aux droits de l'homme"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0X7H99VXX/web-coder/6894513ad30e3e771cc31fef/resource/e337333e-ad4b-4809-990f-52ccd37461fe.jpg",
      title: "Programmes de Réinsertion",
      description: "Activités de réinsertion sociale et professionnelle"
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galerie Photos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos activités et événements à travers une sélection de photos 
              qui illustrent notre engagement quotidien pour les droits humains.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                {/* Image */}
                <img 
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-200">
                    {galleryItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rejoignez Notre Mission
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Chaque photo raconte une histoire d'espoir et de transformation. 
                Participez à nos activités et contribuez à faire la différence.
              </p>
              <a 
                href="tel:+243824744447"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
