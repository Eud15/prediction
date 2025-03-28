<template>
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Détails de l'article</h1>
            <button @click="openEditModal" class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              <PencilIcon class="h-5 w-5 inline-block mr-2" />
              Modifier
            </button>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Image principale -->
            <div class="md:col-span-1">
              <img :src="article.mainImage" :alt="article.name" class="w-full h-auto rounded-lg shadow">
            </div>
  
            <!-- Informations de l'article -->
            <div class="md:col-span-2 space-y-4">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold text-gray-900">{{ article.name }}</h2>
                <span class="text-lg font-bold text-indigo-600">{{ article.price }}€</span>
              </div>
              <p class="text-gray-600">{{ article.description }}</p>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon v-for="i in Math.floor(article.rating)" :key="i" class="h-5 w-5 text-yellow-400" />
                  <StarHalfIcon v-if="article.rating % 1 !== 0" class="h-5 w-5 text-yellow-400" />
                </div>
                <span class="ml-2 text-sm text-gray-600">({{ article.reviewCount }} avis)</span>
              </div>
              <div>
                <span class="font-semibold">Catégorie:</span> {{ article.category }}
              </div>
              <div>
                <span class="font-semibold">Tailles disponibles:</span> {{ article.sizes.join(', ') }}
              </div>
              <div>
                <span class="font-semibold">Stock:</span> {{ article.stock }} unités
              </div>
            </div>
          </div>
  
          <!-- Statistiques -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Ventes ce mois</h3>
              <p class="text-2xl font-bold text-indigo-600">{{ article.monthlySales }}</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Revenu généré</h3>
              <p class="text-2xl font-bold text-green-600">{{ article.revenue }}€</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Taux de conversion</h3>
              <p class="text-2xl font-bold text-blue-600">{{ article.conversionRate }}%</p>
            </div>
          </div>
  
          <!-- Détails supplémentaires -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">Caractéristiques du produit</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li v-for="(detail, index) in article.details" :key="index">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Modal d'édition (à implémenter) -->
      <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 class="text-xl font-bold mb-4">Modifier l'article</h2>
          <!-- Formulaire d'édition à implémenter -->
          <button @click="closeEditModal" class="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            Fermer
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { StarIcon, StarHalfIcon, PencilIcon } from 'lucide-vue-next'
  
  // Données factices pour l'article
  const article = ref({
    id: 1,
    name: 'Robe évasée',
    price: 89.99,
    description: 'Une robe évasée élégante et confortable, parfaite pour toutes les occasions. Fabriquée à partir de matériaux de haute qualité pour une durabilité et un confort optimal.',
    mainImage: 'https://img.freepik.com/premium-psd/mannequin-wearing-dress_1092560-19491.jpg?w=740',
    rating: 4.5,
    reviewCount: 128,
    category: 'Robes',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 250,
    monthlySales: 87,
    revenue: 7829.13,
    conversionRate: 3.2,
    details: [
      'Tissu léger et respirant',
      'Coupe évasée flatteuse',
      'Fermeture éclair invisible au dos',
      'Lavable en machine',
      'Disponible en plusieurs coloris'
    ]
  })
  
  const showEditModal = ref(false)
  
  const openEditModal = () => {
    showEditModal.value = true
  }
  
  const closeEditModal = () => {
    showEditModal.value = false
  }
  </script>