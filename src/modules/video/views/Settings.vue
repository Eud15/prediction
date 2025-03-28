<template>
  <div class="flex flex-col md:flex-row h-screen w-full overflow-hidden">
    <!-- Sidebar -->
    <div class="w-full md:w-56 bg-yellow-400 flex flex-col h-auto md:h-full relative overflow-hidden">
      <div class="absolute inset-0 bg-yellow-300 opacity-50 z-0">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMCBMIDEwMCAxMDAiIHN0cm9rZT0iI0ZDRDM0RCIgc3Ryb2tlLXdpZHRoPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div class="font-bold text-xl px-4 py-5 z-10">SUPER APP</div>
      
      <nav class="flex-1 z-10">
        <div class="bg-yellow-500/50 rounded-lg mx-2 mb-2">
          <a href="#" class="flex items-center px-4 py-3 text-black">
            <div class="w-6 h-6 mr-3 flex items-center justify-center">
              <i class="i-lucide-home"></i>
            </div>
            <span>Home</span>
          </a>
        </div>
        
        <a v-for="(item, index) in menuItems" :key="index" href="#" class="flex items-center px-4 py-3 text-black hover:bg-yellow-500/30 rounded-lg mx-2 mb-2">
          <div class="w-6 h-6 mr-3 flex items-center justify-center">
            <i :class="item.icon"></i>
          </div>
          <span>{{ item.name }}</span>
        </a>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-black overflow-y-auto">
      <!-- Search Bar -->
      <div class="p-4">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Explore" 
            class="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white"
          />
          <i class="i-lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <!-- Hero Section -->
      <div class="mx-4 mb-6 rounded-xl overflow-hidden relative bg-yellow-400">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMCBMIDEwMCAxMDAiIHN0cm9rZT0iI0ZDRDM0RCIgc3Ryb2tlLXdpZHRoPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div class="flex flex-col md:flex-row p-6">
          <div class="w-full md:w-1/3 mb-4 md:mb-0">
            <img  :src="img2" alt="Person with sunglasses" class="h-40 object-cover w-full" />
          </div>
          <div class="w-full md:w-2/3 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2">Ready to Chill? Best Plans Await</h2>
            <p class="text-black">Stay updated on the most exciting activities happening around you.</p>
          </div>
        </div>
      </div>

      <h1>TOP PRODUCTS</h1>
      <!-- Promotional Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-6">
        <!-- Card 1 -->
        <div class="bg-purple-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="img1" alt="Car rental" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">Video Streaming</h3>
            <p class="text-white text-sm mb-6">Enjoy unlimited access to the best HD video streaming platforms without interruption.</p>
            <button class="bg-white text-purple-700 px-4 py-2 rounded-md font-medium">Book Now</button>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-gray-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="img2" alt="Event planning" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">Gaming Premium</h3>
            <p class="text-white text-sm mb-6">Play without limits with exclusive discounts, optimized performance and ultra-fast connection.</p>
            <button class="bg-white text-gray-700 px-4 py-2 rounded-md font-medium">Explore</button>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-purple-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="img3" alt="Travel platform" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">Music Unlimited</h3>
            <p class="text-white text-sm mb-6">Listen to your favorite songs with unlimited, ad-free, high-quality audio.</p>
            <button class="bg-white text-purple-700 px-4 py-2 rounded-md font-medium">Discover</button>
          </div>
        </div>
      </div>

      <!-- Product Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-6">
        <!-- Card 1 -->
        <div class="bg-gray-800 rounded-xl overflow-hidden">
          <img :src="img4" alt="Samsung Galaxy S9" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-lg font-bold mb-1"> Extra Data Bundle</h3>
            <p class="text-white text-sm mb-6">Listen to your favorite songs with unlimited, ad-free, high-quality audio.</p>

            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>Try it</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-map-pin mr-1"></i>
              <span>La Chika, Cotonou</span>
              <button class="ml-auto text-gray-400">
                <i class="i-lucide-more-vertical"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-gray-800 rounded-xl overflow-hidden">
          <img :src="img5" alt="Foldable phone" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-sm font-medium mb-1">Device Upgrade</h3>
            <p class="text-white text-sm mb-6">It's time to upgrade! We've noticed that you're using an older model, so check out our upgrade offers for greater comfort.</p>

            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>Try it</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-map-pin mr-1"></i>
              <span>La Chika, Cotonou</span>
              <button class="ml-auto text-gray-400">
                <i class="i-lucide-more-vertical"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="bg-gray-800 rounded-xl overflow-hidden">
          <img  :src="img6" alt="Group of people" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-sm font-medium mb-1">Device Upgrade</h3>
            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>1 month ago</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-map-pin mr-1"></i>
              <span>La Chika, Cotonou</span>
              <button class="ml-auto text-gray-400">
                <i class="i-lucide-more-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendation Popup -->
      <teleport to="body">
        <div v-if="recommendation" 
             class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <path d="M0 0 L100 100" stroke="#FCD34D" stroke-width="2" fill="none" stroke-opacity="0.2"/>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"/>
              </svg>
            </div>

            <!-- Recommendation Image -->
            <div class="h-48 w-full overflow-hidden relative">
              <img 
                :src="recommendation.image" 
                alt="Recommendation" 
                class="w-full h-full object-cover absolute inset-0"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="p-6 pt-4 relative z-10">
              <button 
                @click="closeRecommendation" 
                class="absolute top-3 right-3 text-white bg-black/30 hover:bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>

              <h2 class="text-2xl font-bold text-black mb-2">
                {{ recommendation.title }}
              </h2>
              <p class="text-gray-700 mb-4">
                {{ recommendation.description }}
              </p>
              
              <button 
                class="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold 
                       hover:bg-yellow-500 transition-colors duration-300 
                       flex items-center justify-center space-x-2"
              >
                <span>{{ recommendation.buttonText }}</span>
                <i class="i-lucide-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import img1 from '../../../assets/images/im1.png';
import img2 from '../../../assets/images/im2.png';
import img3 from '../../../assets/images/im3.png';
import img4 from '../../../assets/images/im4.png';
import img5 from '../../../assets/images/im5.png';
import img6 from '../../../assets/images/im6.png';
import img7 from '../../../assets/images/im7.png';
import img8 from '../../../assets/images/im8.png';

const menuItems = ref([
  { name: 'Chill', icon: 'i-lucide-music' },
  { name: 'Shine', icon: 'i-lucide-gamepad-2' },
  { name: 'Lab', icon: 'i-lucide-flask-conical' },
  { name: 'Settings', icon: 'i-lucide-settings' },
  { name: 'Profile', icon: 'i-lucide-user' },
  { name: 'Logout', icon: 'i-lucide-log-out' }
]);

const recommendation = ref(null);

const recommendations = [
  {
    title: 'myMTN App',
    description: 'Manage your MTN account easily with the myMTN application. Top up, track your usage and take advantage of exclusive offers!',
    buttonText: 'Try it',
    image: img4
  },
  {
    title: 'Extra Data Bundle',
    description: 'Boostez votre connexion ! Nous avons détecté une utilisation élevée de vos données, profitez d’un forfait supplémentaire pour rester connecté sans interruption!',
    buttonText: 'Get it',
    image: img8
  }
];

const generateRecommendation = () => {
  // Display a random recommendation
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  recommendation.value = recommendations[randomIndex];
};

const closeRecommendation = () => {
  recommendation.value = null;
};

let recommendationInterval = null;

onMounted(() => {
  // Generate a recommendation every 5 seconds
  recommendationInterval = setInterval(generateRecommendation, 3000);
});

onUnmounted(() => {
  if (recommendationInterval) {
    clearInterval(recommendationInterval);
  }
});
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Lucide icons via CSS */
.i-lucide-home { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
/* Add other Lucide icon styles similarly */
</style>