<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-900">Gestion des Articles</h1>
        <button @click="openAddModal" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Ajouter un article
        </button>
      </div>
  
      <!-- Liste des articles -->
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="article in articles" :key="article.id" class="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
            <div class="flex items-center">
              <img :src="article.image" :alt="article.name" class="h-16 w-16 rounded-full object-cover mr-4" />
              <div>
                <div class="text-sm font-medium text-gray-900">{{ article.name }}</div>
                <div class="text-sm text-gray-500">{{ article.category }}</div>
                <div class="text-sm font-semibold text-gray-700">{{ article.price }}€</div>
              </div>
            </div>
            <div class="flex space-x-2">
              <button @click="openDetailModal(article)" class="text-indigo-600 hover:text-indigo-900">
                <Eye class="h-5 w-5" />
              </button>
              <button @click="openEditModal(article)" class="text-indigo-600 hover:text-indigo-900">
                <PencilIcon class="h-5 w-5" />
              </button>
              <button @click="openDeleteModal(article)" class="text-red-600 hover:text-red-900">
                <TrashIcon class="h-5 w-5" />
              </button>
            </div>
          </li>
        </ul>
      </div>
  
      <!-- Modal d'ajout/modification d'article -->
      <div v-if="showFormModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div class="bg-white p-8 rounded-md shadow-xl max-w-md w-full">
          <h2 class="text-xl font-semibold mb-4">{{ isEditing ? 'Modifier l\'article' : 'Ajouter un article' }}</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="articleName" class="block text-sm font-medium text-gray-700">Nom de l'article</label>
              <input type="text" id="articleName" v-model="currentArticle.name" required
                     class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div>
              <label for="articleDescription" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="articleDescription" v-model="currentArticle.description" rows="3"
                        class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label for="articleCategory" class="block text-sm font-medium text-gray-700">Catégorie</label>
              <select id="articleCategory" v-model="currentArticle.category" required
                      class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
            </div>
            <div>
              <label for="articlePrice" class="block text-sm font-medium text-gray-700">Prix (€)</label>
              <input type="number" id="articlePrice" v-model="currentArticle.price" required min="0" step="0.01"
                     class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div>
              <label for="articleImage" class="block text-sm font-medium text-gray-700">URL de l'image</label>
              <input type="url" id="articleImage" v-model="currentArticle.image" required
                     class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div class="flex justify-end space-x-2">
              <button type="button" @click="closeFormModal" class="px-4 py-2 border border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Annuler
              </button>
              <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ isEditing ? 'Mettre à jour' : 'Ajouter' }}
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Modal de suppression -->
      <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div class="bg-white p-8 rounded-md shadow-xl max-w-md w-full">
          <h2 class="text-xl font-semibold mb-4">Confirmer la suppression</h2>
          <p class="mb-4">Êtes-vous sûr de vouloir supprimer l'article "{{ articleToDelete?.name }}" ?</p>
          <div class="flex justify-end space-x-2">
            <button @click="closeDeleteModal" class="px-4 py-2 border border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
  import { PencilIcon, TrashIcon } from 'lucide-vue-next'
  
  // Données factices pour les articles
  const articles = ref([
    { id: 1, name: 'Robe évasée', description: 'Une robe chic et confortable pour toutes les occasions.', category: 'Vêtements', price: 79, image: 'https://img.freepik.com/premium-photo/woman-is-standing-front-chair-with-robe-it_1126821-15059.jpg?w=360' },
    { id: 2, name: 'Louboutin', description: 'Des talons hauts élégants et raffinés, parfaits pour un événement.', category: 'Chaussures', price: 999, image: 'https://img.freepik.com/free-photo/women-s-red-high-heel-shoes-formal-fashion_53876-101501.jpg?t=st=1729510580~exp=1729514180~hmac=fbb3406fab3419aa1c4f3de39699e7bd5ca699e5b8d6337afff49c45a9de20ff&w=826' },
    { id: 3, name: 'Sac Louis Vuitton', description: 'Un sac à main de luxe iconique avec un design élégant.', category: 'Accessoires', price: 1299, image: 'https://img.freepik.com/free-photo/small-purse-studio-still-life_23-2151046497.jpg?t=st=1729510670~exp=1729514270~hmac=11eded07e3104c88e34d63d3b5aef9730c3a5179911c283cd9c332cef3c55157&w=826' },
    { id: 4, name: 'Montre élégante', description: 'Une montre classique pour un look sophistiqué et intemporel.', category: 'Accessoires', price: 199, image: 'https://img.freepik.com/premium-photo/luxury-wrist-watch-white-background-space-text_1308163-13640.jpg?w=740' },
])
  
  // Catégories disponibles
  const categories = ['Vêtements', 'Chaussures', 'Accessoires', 'Luxe', 'Montres']

  
  const currentArticle = reactive({
    id: null,
    name: '',
    description: '',
    category: '',
    price: 0,
    image: '',
  })
  
  const isEditing = ref(false)
  const showFormModal = ref(false)
  const showDeleteModal = ref(false)
  const articleToDelete = ref(null)
  
  const openAddModal = () => {
    isEditing.value = false
    Object.assign(currentArticle, {
      id: null,
      name: '',
      description: '',
      category: '',
      price: 0,
      image: '',
    })
    showFormModal.value = true
  }
  
  function openDetailModal(article){
    router.push('/article/detail')
  }
  const openEditModal = (article) => {
    isEditing.value = true
    Object.assign(currentArticle, article)
    showFormModal.value = true
  }
  
  const closeFormModal = () => {
    showFormModal.value = false
  }
  
  const openDeleteModal = (article) => {
    articleToDelete.value = article
    showDeleteModal.value = true
  }
  
  const closeDeleteModal = () => {
    showDeleteModal.value = false
    articleToDelete.value = null
  }
  
  const handleSubmit = () => {
    if (isEditing.value) {
      const index = articles.value.findIndex(a => a.id === currentArticle.id)
      if (index !== -1) {
        articles.value[index] = { ...currentArticle }
      }
    } else {
      const newArticle = {
        ...currentArticle,
        id: Date.now(),
      }
      articles.value.push(newArticle)
    }
    closeFormModal()
  }
  
  const confirmDelete = () => {
    if (articleToDelete.value) {
      articles.value = articles.value.filter(a => a.id !== articleToDelete.value.id)
      closeDeleteModal()
    }
  }
  </script>