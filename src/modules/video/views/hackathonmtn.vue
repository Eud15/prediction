<template>
  <div class="flex h-screen w-full overflow-hidden">
    <!-- Sidebar -->
    <div class="w-56 bg-yellow-400 flex flex-col h-full relative overflow-hidden">
      <div class="absolute inset-0 bg-yellow-300 opacity-50 z-0">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMCBMIDEwMCAxMDAiIHN0cm9rZT0iI0ZDRDM0RCIgc3Ryb2tlLXdpZHRoPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div class="font-bold text-xl px-4 py-5 z-10">Explorer</div>
      
      <nav class="flex-1 z-10">
        <div class="bg-yellow-500/50 rounded-lg mx-2 mb-2">
          <a href="#" class="flex items-center px-4 py-3 text-black">
            <div class="w-6 h-6 mr-3 flex items-center justify-center">
              <i class="i-lucide-home"></i>
            </div>
            <span>Accueil</span>
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
            placeholder="Explorer" 
            class="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white"
          />
          <i class="i-lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <!-- Hero Section -->
      <div class="mx-4 mb-6 rounded-xl overflow-hidden relative bg-yellow-400">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMCBMIDEwMCAxMDAiIHN0cm9rZT0iI0ZDRDM0RCIgc3Ryb2tlLXdpZHRoPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div class="flex p-6">
          <div class="w-1/3">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Splash%20screen-RT3MeYZbe0HHxKNHY0PEvNF4VJXHIL.png" alt="Person with sunglasses" class="h-40 object-cover" />
          </div>
          <div class="w-2/3 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-2">Prêt(e) à chiller ? Les meilleurs plans</h2>
            <p class="text-black">Reste informé(e) de toutes les activités amusantes qui se déroulent autour de toi.</p>
          </div>
        </div>
      </div>

      <!-- Promotional Cards -->
      <div class="grid grid-cols-3 gap-4 mx-4 mb-6">
        <!-- Card 1 -->
        <div class="bg-purple-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="img1" alt="Person with thumbs up" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">The Best Platform for Car Rental</h3>
            <p class="text-white text-sm mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button class="bg-white text-purple-700 px-4 py-2 rounded-md font-medium">Commander</button>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-gray-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="img2" alt="Person with thumbs up" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">Ne manquez plus vos événements</h3>
            <p class="text-white text-sm mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button class="bg-white text-gray-700 px-4 py-2 rounded-md font-medium">Commander</button>
          </div>
        </div>

         <!-- Card 3 -->
         <div class="bg-purple-700 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-1/2">
            <img :src="img3" alt="Person with thumbs up" class="object-cover" />
          </div>
          <div class="w-3/5">
            <h3 class="text-white text-2xl font-bold mb-4">The Best Platform for Car Rental</h3>
            <p class="text-white text-sm mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button class="bg-white text-purple-700 px-4 py-2 rounded-md font-medium">Commander</button>
          </div>
        </div>
        
      </div>

      <!-- Product Cards -->
      <div class="grid grid-cols-3 gap-4 mx-4 mb-6">
        <!-- Card 1 -->
        <div class="bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Splash%20screen-RT3MeYZbe0HHxKNHY0PEvNF4VJXHIL.png" alt="Samsung Galaxy S9" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-lg font-bold mb-1">Samsung galaxie S9</h3>
            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>01 mois déjà</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-map-pin mr-1"></i>
              <span>La chika, Cotonou</span>
              <button class="ml-auto text-gray-400">
                <i class="i-lucide-more-vertical"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Splash%20screen-RT3MeYZbe0HHxKNHY0PEvNF4VJXHIL.png" alt="Foldable phone" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-sm font-medium mb-1">Découvre les bons plans de ton coin et amuses toi comme un jeune branché</h3>
            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>01 mois déjà</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-map-pin mr-1"></i>
              <span>La chika, Cotonou</span>
              <button class="ml-auto text-gray-400">
                <i class="i-lucide-more-vertical"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Splash%20screen-RT3MeYZbe0HHxKNHY0PEvNF4VJXHIL.png" alt="Group of people" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-white text-sm font-medium mb-1">Découvre les bons plans de ton coin et amuses toi comme un jeune branché</h3>
            <div class="flex items-center mt-4 text-gray-400 text-sm">
              <i class="i-lucide-clock mr-1"></i>
              <span>01 mois déjà</span>
              <div class="mx-2 border-l border-gray-600 h-4"></div>
              <i class="i-lucide-map-pin mr-1"></i>
              <span>La chika, Cotonou</span>
              <button class="ml-auto text-gray-400">
                <i class="i-lucide-more-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '../../../assets/images/im1.png';
import img2 from '../../../assets/images/im2.png';
import img3 from '../../../assets/images/im3.png';

const menuItems = ref([
  { name: 'Chill', icon: 'i-lucide-music' },
  { name: 'Shine', icon: 'i-lucide-gamepad-2' },
  { name: 'Labo', icon: 'i-lucide-flask-conical' },
  { name: 'Parametre', icon: 'i-lucide-settings' },
  { name: 'Profile', icon: 'i-lucide-user' },
  { name: 'Déconnexion', icon: 'i-lucide-log-out' }
]);
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Lucide icons via CSS */
.i-lucide-home { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-music { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-gamepad-2 { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-flask-conical { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-settings { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-user { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-log-out { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-search { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-clock { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-map-pin { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
.i-lucide-more-vertical { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>') no-repeat center center / contain; width: 1.5rem; height: 1.5rem; }
</style>