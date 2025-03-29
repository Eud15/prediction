<template>
    <div class="flex flex-col h-screen bg-gray-900 text-white">
      <!-- Top bar -->
      <div class="flex justify-between items-center p-4 bg-gray-800">
        <h1 class="text-2xl font-bold">Dokun</h1>
        <div class="flex items-center space-x-4">
          <div class="w-64 bg-gray-700 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 53%;"></div>
          </div>
          <span>53%</span>
          <button class="bg-yellow-500 text-black px-4 py-2 rounded">Exporter</button>
        </div>
      </div>
  
      <!-- Main content -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Left sidebar -->
        <div class="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6">
          <button v-for="icon in ['T', 'camera', 'star', 'cog']" :key="icon" class="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
            {{ icon }}
          </button>
        </div>
  
        <!-- Video player and subtitles -->
        <div class="flex-1 flex">
          <div class="flex-1 flex flex-col">
            <!-- Video player -->
            <div class="relative flex-1 bg-black">
              <!-- <img src="/placeholder.svg?height=400&width=600" alt="Video placeholder" class="w-full h-full object-cover" /> -->
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p class="text-2xl">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div>
            </div>
            <!-- Video controls -->
            <div class="bg-gray-800 p-4 flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <span>00:38:55 / 01:50:20</span>
                <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">⏪</button>
                <button class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">▶️</button>
                <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">⏩</button>
              </div>
              <button class="bg-yellow-500 text-black px-2 py-1 rounded">16:9</button>
            </div>
          </div>
          <!-- Subtitles -->
          <div class="w-80 bg-gray-800 p-4 overflow-y-auto">
            <h2 class="text-xl font-bold mb-4">Sous-titre</h2>
            <div v-for="i in 6" :key="i" class="mb-4">
              <div class="flex justify-between text-sm text-gray-400 mb-1">
                <span>00:12</span>
                <span>00:12</span>
              </div>
              <div class="bg-gray-700 p-2 rounded">
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit amet sit ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Timeline -->
      <div class="h-32 bg-gray-800 p-4">
        <div class="flex space-x-2 mb-2">
          <div v-for="i in 8" :key="i" class="text-xs text-gray-400">
            00:0{{ i }}
          </div>
        </div>
        <div class="flex space-x-2">
          <div v-for="i in 8" :key="i" class="flex-1 h-16 bg-green-600 rounded p-2 text-xs">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Add any necessary imports and logic here
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>