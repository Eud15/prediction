<template>
    <div class="p-6">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ category.name }}</h1>
        <p class="mt-2 text-gray-600">{{ category.description }}</p>
      </div>
  
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-gray-800">Articles dans cette catégorie</h2>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher un article"
              class="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <SearchIcon class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </div>
  
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="product in paginatedProducts" :key="product.id" class="px-6 py-4 hover:bg-gray-50">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-12 w-12">
                <img :src="product.image" :alt="product.name" class="h-12 w-12 rounded-full object-cover" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                <div class="text-sm text-gray-500">{{ product.price }}€</div>
              </div>
              <div class="ml-auto">
                <span :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]">
                  {{ product.inStock ? 'En stock' : 'Rupture de stock' }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
  
      <!-- Pagination -->
      <div class="mt-6 flex justify-between items-center">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Précédent
        </button>
        <span class="text-sm text-gray-700">
          Page {{ currentPage }} sur {{ totalPages }}
        </span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { SearchIcon } from 'lucide-vue-next'
  
  // Données factices pour la catégorie et les produits
  const category = ref({
    id: 1,
    name: 'Robes',
    description: 'Découvrez notre gamme de produits Robess de haute qualité, des Robes pagnes aux robes de soirées en passant par les accessoires.'
  })
  
  const products = ref([
    { id: 1, name: 'Robes évasée', price: 599, image: 'https://img.freepik.com/premium-photo/fashion-hipster-girl-robes-set-spring-design-generative-ia_209190-160865.jpg?w=360', inStock: true },
    { id: 2, name: 'Robes droite', price: 999, image: 'https://img.freepik.com/premium-photo/saffron-robes-realistic_1279574-10991.jpg?w=740', inStock: true },
    { id: 3, name: 'Robes tissées', price: 129, image: 'https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?t=st=1729509984~exp=1729513584~hmac=841047ca0bf5254283e733285210ff6b62854bde569c595d032cfdf0251a4957&w=360', inStock: false },
    { id: 4, name: 'Robes en pagnes"', price: 349, image: 'https://img.freepik.com/premium-photo/fashion-hipster-girl-robes-set-spring-design-generative-ia_209190-160865.jpg?w=360', inStock: true },
    { id: 5, name: 'Robes chics', price: 199, image: 'https://img.freepik.com/premium-photo/saffron-robes-realistic_1279574-10991.jpg?w=740', inStock: true },
    { id: 3, name: 'Robes tissées', price: 129, image: 'https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?t=st=1729509984~exp=1729513584~hmac=841047ca0bf5254283e733285210ff6b62854bde569c595d032cfdf0251a4957&w=360', inStock: true },
    { id: 6, name: 'Robe de soirées', price: 79, image: 'https://img.freepik.com/premium-photo/woman-is-standing-front-chair-with-robe-it_1126821-15059.jpg?w=360', inStock: true },
    { id: 7, name: 'Robe élégances', price: 159, image: 'https://img.freepik.com/premium-photo/fashion-hipster-girl-robes-set-spring-design-generative-ia_209190-161038.jpg?w=360', inStock: false },
    { id: 8, name: 'Enivrance robe', price: 129, image: 'https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?t=st=1729510104~exp=1729513704~hmac=87ba3bf472a910a60ea739db0beb1fb91ce5241a33ef11b90bba7e53fedf3c8a&w=360', inStock: true },
    { id: 9, name: 'Coupée à la taille', price: 69, image: 'https://img.freepik.com/free-photo/cute-small-height-african-american-girl-with-dreadlocks-wear-coloured-yellow-dress-watches-store-shopping-center_627829-2900.jpg?t=st=1729510176~exp=1729513776~hmac=bdfc1e6284becd24abac16df71f9f6dcffcdaac82b69fc5a8eafff00ba4fe0dd&w=826', inStock: true },
    { id: 10, name: 'Chic dressing', price: 39, image: 'https://img.freepik.com/premium-photo/woman-is-standing-front-chair-with-robe-it_1126821-15059.jpg?w=360', inStock: true },
  ])
  
  const searchQuery = ref('')
  const currentPage = ref(1)
  const itemsPerPage = 5
  
  const filteredProducts = computed(() => {
    return products.value.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  
  const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))
  
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredProducts.value.slice(start, end)
  })
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }
  </script>