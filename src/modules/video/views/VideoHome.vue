<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <!-- <aside class="w-64 bg-gray-800 text-white">
      <div class="p-4">
        <h1 class="text-2xl font-bold">AI Dubber</h1>
      </div>
      <nav class="mt-8">
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <HomeIcon class="inline-block w-5 h-5 mr-2" />
          Home
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <VideoIcon class="inline-block w-5 h-5 mr-2" />
          My Projects
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <SettingsIcon class="inline-block w-5 h-5 mr-2" />
          Settings
        </a>
      </nav>
    </aside> -->

    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <!-- <header class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-800">Video Dubbing</h2>
          <div class="flex items-center">
            <button class="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <BellIcon class="h-6 w-6" />
            </button>
            <img class="h-8 w-8 rounded-full ml-4" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
          </div>
        </div>
      </header> -->

      <!-- Main Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <!-- Video Upload -->
              <div v-if="!videoSrc" class="mb-6">
                <label for="video-upload" class="block text-sm font-medium text-gray-700 mb-2">
                  Charger la vidéo
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <UploadCloudIcon class="mx-auto h-12 w-12 text-gray-400" />
                    <div class="flex text-sm text-gray-600">
                      <label for="video-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-[#84149A] hover:text-[#84149A] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Charger une vidéo</span>
                        <input id="video-upload" name="video-upload" type="file" accept="video/*" @change="handleVideoUpload" class="sr-only" />
                      </label>
                      <p class="pl-1">Ou glissez et déposez</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      MP4, WebM ou OGG jusqu'à 100 Mo
                    </p>
                  </div>
                </div>
              </div>

              <!-- Video Player -->
              <video
                v-if="videoSrc"
                :src="videoSrc"
                controls
                class="w-full mb-6 rounded-lg shadow-md"
              ></video>

              <!-- Language Selection -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label for="original-lang" class="block text-sm font-medium text-gray-700 mb-2">
                    Langue Originale 
                  </label>
                  <select
                    id="original-lang"
                    v-model="originalLang"
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="">Selectionnez la Langue</option>
                    <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                      {{ lang.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="output-lang" class="block text-sm font-medium text-gray-700 mb-2">
                    Langue de sortie
                  </label>
                  <select
                    id="output-lang"
                    v-model="outputLang"
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="">Selectionnez une Langue</option>
                    <option v-for="lang in dubLanguages" :key="lang.code" :value="lang.code">
                      {{ lang.name }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Subtitle Options -->
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <input
                    id="subtitle-toggle"
                    v-model="subtitlesEnabled"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="subtitle-toggle" class="ml-2 block text-sm text-gray-900">
                    Activer les sous-titres
                  </label>
                </div>
                <div v-if="subtitlesEnabled">
                  <label for="subtitle-lang" class="block text-sm font-medium text-gray-700 mb-2">
                    Langue de sous-titrage
                  </label>
                  <select
                    id="subtitle-lang"
                    v-model="subtitleLang"
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="">Selectionnez une langue</option>
                    <option v-for="lang in dubLanguages" :key="lang.code" :value="lang.code">
                      {{ lang.name }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Dub Button -->
              <button
                @click="startDubbing"
                :disabled="!canDub"
                class="w-full bg-[#84149A] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#84149A] focus:outline-none focus:ring-2 focus:ring-[#84149A] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Commencer
              </button>

              <!-- Processing Modal -->
              <div v-if="isProcessing" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                <div class="bg-white p-8 rounded-lg shadow-xl">
                  <h2 class="text-2xl font-bold mb-4 text-gray-900">Traitement de la vidéo</h2>
                  <div class="mb-4">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                      <div class="bg-[#84149A] h-2.5 rounded-full" :style="{ width: `${processingProgress}%` }"></div>
                    </div>
                  </div>
                  <p class="text-gray-700">Veuillez patienter pendant le doublage de votre vidéo...</p>
                </div>
              </div>

              <!-- Download Section -->
              <div v-if="dubbedVideoSrc" class="mt-6">
                <h2 class="text-xl font-semibold mb-2 text-gray-900">Vidéo doublée</h2>
                <video
                  :src="dubbedVideoSrc"
                  controls
                  class="w-full mb-4 rounded-lg shadow-md"
                ></video>
                <a
                  :href="dubbedVideoSrc"
                  download="dubbed_video.mp4"
                  class="inline-block bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                Télécharger la vidéo doublée
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { HomeIcon, VideoIcon, SettingsIcon, BellIcon, UploadCloudIcon } from 'lucide-vue-next'

const videoSrc = ref('')
const originalLang = ref('')
const outputLang = ref('')
const subtitlesEnabled = ref(false)
const subtitleLang = ref('')
const isProcessing = ref(false)
const processingProgress = ref(0)
const dubbedVideoSrc = ref('')

const languages = [
  { code: 'en', name: 'Anglais' },
  { code: 'es', name: 'Espagnol' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Allemand' },
  { code: 'it', name: 'Italie' },
  { code: 'ja', name: 'Japon' },
  { code: 'ko', name: 'Koreen' },
  { code: 'zh', name: 'Chinois' },
]

const dubLanguages = [
  { code: 'en', name: 'Fon' },
  { code: 'es', name: 'Yoruba' },
  { code: 'fr', name: 'Dendi' },
  { code: 'de', name: 'Bariba' },
  { code: 'it', name: 'Haoussa' },
  { code: 'ja', name: 'Mina' },
  { code: 'ko', name: 'Adja' },
  { code: 'zh', name: 'Cotafon' },
]

const handleVideoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    videoSrc.value = URL.createObjectURL(file)
  }
}

const canDub = computed(() => {
  return videoSrc.value && originalLang.value && outputLang.value &&
         (!subtitlesEnabled.value || (subtitlesEnabled.value && subtitleLang.value))
})

const startDubbing = async () => {
  isProcessing.value = true
  processingProgress.value = 0

  // Simulating the dubbing process
  for (let i = 0; i <= 100; i += 10) {
    await new Promise(resolve => setTimeout(resolve, 500))
    processingProgress.value = i
  }

  // In a real application, you would send the video and options to a server for processing
  // and receive the dubbed video URL in response
  dubbedVideoSrc.value = videoSrc.value // For demonstration, we're just using the original video

  isProcessing.value = false
}
</script>