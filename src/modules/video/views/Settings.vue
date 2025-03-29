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
            <img :src="img2" alt="Person with sunglasses" class="h-40 object-cover w-full" />
          </div>
          <div class="w-full md:w-2/3 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2">Ready to Chill? Best Plans Await</h2>
            <p class="text-black">Stay updated on the most exciting activities happening around you.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 1: TOP PRODUCTS -->
      <h2 class="text-2xl font-bold text-white px-4 py-3 mb-2">TOP PRODUCTS</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-8">
        <div v-for="(product, index) in apiData.top_products" :key="index" 
             class="bg-purple-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="productImages[index]" :alt="product.product" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">{{ product.product }}</h3>
            <p class="text-white text-sm mb-6">
              {{ getProductDescription(product.product) }}
              <span class="block mt-2 text-yellow-300">Confidence: {{ (product.confidence * 100).toFixed(0) }}%</span>
            </p>
            <button class="bg-white text-purple-700 px-4 py-2 rounded-md font-medium">Get Now</button>
          </div>
        </div>
      </div>

      <!-- SECTION 2: PREFERRED CHANNELS -->
      <h2 class="text-2xl font-bold text-white px-4 py-3 mb-2">PREFERRED CHANNELS</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-8">
        <div v-for="(channel, index) in apiData.preferred_channels" :key="index" 
             class="bg-gray-800 rounded-xl overflow-hidden">
          <img :src="channelImages[index]" :alt="channel" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-lg font-bold mb-1">{{ channel }}</h3>
            <p class="text-white text-sm mb-6">{{ getChannelDescription(channel) }}</p>

            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-check-circle mr-1"></i>
              <span>Available</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-zap mr-1"></i>
              <span>Recommended</span>
              <button class="ml-auto bg-yellow-400 text-black px-3 py-1 rounded">
                Open
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 3: UPSELL OPPORTUNITIES -->
      <h2 class="text-2xl font-bold text-white px-4 py-3 mb-2">RECOMMENDED FOR YOU</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-8">
        <div v-for="(upsell, index) in apiData.upsell_opportunities" :key="index" 
             class="bg-gray-800 rounded-xl overflow-hidden">
          <img :src="upsellImages[index]" :alt="upsell.product" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-lg font-bold mb-1">{{ upsell.product }}</h3>
            <div class="inline-block bg-yellow-400 text-black text-xs px-2 py-1 rounded mb-2">Recommended</div>
            <p class="text-white text-sm mb-4">{{ upsell.reason }}</p>

            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>Limited Offer</span>
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
import { useVideoStore } from '../vieoStore';

const videoStore = useVideoStore();
const menuItems = ref([
  { name: 'Chill', icon: 'i-lucide-music' },
  { name: 'Shine', icon: 'i-lucide-gamepad-2' },
  { name: 'Lab', icon: 'i-lucide-flask-conical' },
  { name: 'Settings', icon: 'i-lucide-settings' },
  { name: 'Profile', icon: 'i-lucide-user' },
  { name: 'Logout', icon: 'i-lucide-log-out' }
]);

// Mock API data (this would usually come from an API call)

var apiData = ref({});
// const apiData = ref({
//   top_products: [
//     { product: "Video Streaming", confidence: 0.85 },
//     { product: "Gaming Premium", confidence: 0.72 },
//     { product: "Music Unlimited", confidence: 0.68 }
//   ],
//   preferred_channels: [
//     "myMTN",
//     "USSD",
//     "Ayoba"
//   ],
//   upsell_opportunities: [
//     { product: "Extra Data Bundle", reason: "High data usage detected" },
//     { product: "Device Upgrade", reason: "Old device model detected" }
//   ]
// });

// Map images to products, channels, and upsell opportunities
const productImages = [img1, img2, img3, img1, img2, img3];
const channelImages = [img4, img5, img6];
const upsellImages = [img7, img8];

// Product descriptions
const getProductDescription = (product) => {
  const descriptions = {
    "Video Streaming": "Enjoy unlimited access to the best HD video streaming platforms without interruption.",
    "Gaming Premium": "Play without limits with exclusive discounts, optimized performance and ultra-fast connection.",
    "Music Unlimited": "Listen to your favorite songs with unlimited, ad-free, high-quality audio."
  };
  return descriptions[product] || "Discover our premium service designed for your lifestyle.";
};

// Channel descriptions
const getChannelDescription = (channel) => {
  const descriptions = {
    "myMTN": "Manage your MTN account easily with the myMTN application. Top up, track your usage and take advantage of exclusive offers!",
    "USSD": "Quick access to services with simple codes. Check balance, buy data, and more without an internet connection.",
    "Ayoba": "Chat, share, and discover content with friends and family in a secure environment."
  };
  return descriptions[channel] || "Connect with us through this convenient channel.";
};

// Upsell descriptions
const getDetailedUpsellDescription = (product) => {
  const descriptions = {
    "Extra Data Bundle": "Boost your connection! We've detected high data usage on your account. Get an extra data bundle to stay connected without interruption!",
    "Device Upgrade": "It's time to upgrade! We've noticed that you're using an older model, so check out our upgrade offers for greater comfort and features."
  };
  return descriptions[product] || "We have a special offer just for you based on your usage patterns.";
};

const recommendation = ref(null);

// Generate a recommendation from the upsell opportunities in the API data
const generateRecommendation = () => {
  if (apiData.value.upsell_opportunities && apiData.value.upsell_opportunities.length > 0) {
    // Get random upsell opportunity from API data
    const randomIndex = Math.floor(Math.random() * apiData.value.upsell_opportunities.length);
    const upsell = apiData.value.upsell_opportunities[randomIndex];
    
    // Map the upsell to a recommendation object
    recommendation.value = {
      title: upsell.product,
      description: getDetailedUpsellDescription(upsell.product),
      reason: upsell.reason,
      buttonText: 'Get Now',
      image: upsellImages[randomIndex] // Use corresponding image
    };
  }
};

const closeRecommendation = () => {
  recommendation.value = null;
};

let recommendationInterval = null;

onMounted(() => {
  // Generate a recommendation every 3 seconds
  recommendationInterval = setInterval(generateRecommendation, 5000);
  applyGetRecommendations();
});

onUnmounted(() => {
  if (recommendationInterval) {
    clearInterval(recommendationInterval);
  }
});

function applyGetRecommendations() {
  videoStore.recommendationsAction()
    .then(response => {
      console.log('Réponse de l\'api', response.data.recommendations);
      apiData.value = response.data.recommendations
      // Update apiData with the real API response
      if (response.data) {
        // Update only if response has the expected structure
        if (response.data.top_products) apiData.value.top_products = response.data.top_products;
        if (response.data.preferred_channels) apiData.value.preferred_channels = response.data.preferred_channels;
        if (response.data.upsell_opportunities) apiData.value.upsell_opportunities = response.data.upsell_opportunities;
      }
    })
    .catch(error => {
      console.log(error);
    });
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Lucide icons via CSS */
.i-lucide-home { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-search { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-clock { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-map-pin { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-more-vertical { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-arrow-right { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-check-circle { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-zap { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
/* Add other needed Lucide icon styles */
</style>