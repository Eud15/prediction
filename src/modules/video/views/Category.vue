<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Gestion des Catégories</h1>
  
      <!-- Bouton pour ouvrir la modale de création -->
      <button @click="openCreateModal" class="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Créer une nouvelle catégorie
      </button>
  
      <!-- Liste des catégories -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="category in categories" :key="category.id" class="bg-white shadow rounded-lg overflow-hidden">
          <img :src="category.image" :alt="category.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900">{{ category.name }}</h3>
            <p class="text-sm text-gray-600">{{ category.productCount }} articles</p>
            <div class="mt-4 flex justify-end space-x-2">
              <button @click="openDetailModal(category)" class="p-2 text-blue-600 hover:text-blue-800">
                <Eye  class="h-5 w-5" />
              </button><button @click="openEditModal(category)" class="p-2 text-blue-600 hover:text-blue-800">
                <PencilIcon class="h-5 w-5" />
              </button>
              <button @click="openDeleteModal(category)" class="p-2 text-red-600 hover:text-red-800">
                <TrashIcon class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modale de création/modification -->
      <div v-if="showFormModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div class="bg-white p-8 rounded-md shadow-xl max-w-md w-full">
          <h2 class="text-xl font-semibold mb-4">{{ isEditing ? 'Modifier la catégorie' : 'Créer une nouvelle catégorie' }}</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="categoryName" class="block text-sm font-medium text-gray-700">Nom de la catégorie</label>
              <input type="text" id="categoryName" v-model="currentCategory.name" required
                     class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div>
              <label for="categoryImage" class="block text-sm font-medium text-gray-700">URL de l'image</label>
              <input type="url" id="categoryImage" v-model="currentCategory.image" required
                     class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div class="flex justify-end space-x-2">
              <button type="button" @click="closeFormModal" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Annuler
              </button>
              <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ isEditing ? 'Mettre à jour' : 'Créer' }}
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Modale de suppression -->
      <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div class="bg-white p-8 rounded-md shadow-xl max-w-md w-full">
          <h2 class="text-xl font-semibold mb-4">Confirmer la suppression</h2>
          <p class="mb-4">Êtes-vous sûr de vouloir supprimer la catégorie "{{ categoryToDelete?.name }}" ?</p>
          <div class="flex justify-end space-x-2">
            <button @click="closeDeleteModal" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Annuler
            </button>
            <button @click="confirmDelete" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { PencilIcon, TrashIcon , Eye } from 'lucide-vue-next'
import router from '@/router'
  
  // Données factices pour les catégories
  const categories = ref([
    { id: 1, name: 'Vêtements', image: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?t=st=1729508635~exp=1729512235~hmac=e11df4582bd32f309745a9d87a91cca2bd42084f488bc9922b1105744d90074e&w=826', productCount: 150 },
    { id: 2, name: 'Robes', image: 'https://img.freepik.com/premium-photo/fashion-hipster-girl-robes-set-spring-design-generative-ia_209190-160865.jpg?w=360', productCount: 300 },
    { id: 3, name: 'Chaussures', image: 'https://img.freepik.com/premium-photo/pair-red-shoes-with-red-flower-bottom_1139305-8398.jpg?w=826', productCount: 500 },
    { id: 4, name: 'Sacs', image: 'https://img.freepik.com/premium-photo/how-choose-handbag-that-complements-your-personal-style_1275943-8475.jpg?w=826', productCount: 200 },
  ])
  
  const currentCategory = reactive({
    id: null,
    name: '',
    image: '',
  })
  
  const isEditing = ref(false)
  const showFormModal = ref(false)
  const showDeleteModal = ref(false)
  const categoryToDelete = ref(null)
  
  const openCreateModal = () => {
    isEditing.value = false
    currentCategory.id = null
    currentCategory.name = ''
    currentCategory.image = ''
    showFormModal.value = true
  }
  
  const openDetailModal = (category) => {
   router.push('/category/detail')
  }
  const openEditModal = (category) => {
    isEditing.value = true
    currentCategory.id = category.id
    currentCategory.name = category.name
    currentCategory.image = category.image
    showFormModal.value = true
  }
  
  
  const closeFormModal = () => {
    showFormModal.value = false
    resetForm()
  }
  
  const openDeleteModal = (category) => {
    categoryToDelete.value = category
    showDeleteModal.value = true
  }
  
  const closeDeleteModal = () => {
    showDeleteModal.value = false
    categoryToDelete.value = null
  }
  
  const handleSubmit = () => {
    if (isEditing.value) {
      // Mise à jour de la catégorie existante
      const index = categories.value.findIndex(c => c.id === currentCategory.id)
      if (index !== -1) {
        categories.value[index] = { ...categories.value[index], ...currentCategory }
      }
    } else {
      // Création d'une nouvelle catégorie
      const newCategory = {
        ...currentCategory,
        id: Date.now(), // Génère un ID unique
        productCount: 0 // Nouvelle catégorie, donc aucun produit
      }
      categories.value.push(newCategory)
    }
    closeFormModal()
  }
  
  const confirmDelete = () => {
    if (categoryToDelete.value) {
      categories.value = categories.value.filter(c => c.id !== categoryToDelete.value.id)
      closeDeleteModal()
    }
  }
  
  const resetForm = () => {
    currentCategory.id = null
    currentCategory.name = ''
    currentCategory.image = ''
    isEditing.value = false
  }
  </script>