<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <!-- Header -->
      <!-- <header class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" class="flex items-center">
                <VideoIcon class="h-8 w-8 text-blue-600" />
                <span class="ml-2 text-2xl font-bold text-gray-900">AI Dubber</span>
              </a>
            </div>
            <nav class="hidden md:flex space-x-10">
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                Dashboard
              </a>
              <a href="#" class="text-base font-medium text-gray-900">
                Projects
              </a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
                Settings
              </a>
            </nav>
            <div class="flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                <PlusIcon class="h-5 w-5 mr-2" />
                New Project
              </a>
            </div>
          </div>
        </div>
      </header> -->
  
      <!-- Main Content -->
      <main class="">
        <!-- Projects List -->
        <div class="sm:px-0 mb-8">
            <div class="flex items-center justify-between">
                <h1 class="text-4xl font-extrabold text-gray-900">Vos projets</h1>
              <a @click="goToNewProject()" href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#84149A] hover:bg-[#84149A] transition duration-150 ease-in-out">
                <PlusIcon class="h-5 w-5 mr-2" />
                Nouveau Projet
              </a>
            </div>
          
          <p class="mt-2 text-xl text-gray-600">Gérez et suivez vos anciens projets de doublage .</p>
        </div>
        
        <!-- Project Cards with Prominent Thumbnails -->
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div  v-for="project in projects" :key="project.id" class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <video width="320" height="240" controls class="w-full rounded-t-lg">
                            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
                            <!-- <source src="movie.ogg" type="video/ogg"> -->
                            Your browser does not support the video tag.
                        </video>
                    </a>
                    <div class="p-6">
                       
                        <h3 class="font-bold text-xl mb-2 text-gray-900">{{ project.name }}</h3>
                        <p class="text-gray-600 text-sm mb-4">
                            {{ project.originalLanguage }} En {{ project.targetLanguage }}
                        </p>
                        <div class="flex items-center justify-between">
                <span :class="[
                  project.status === 'Terminé' ? 'bg-green-100 text-green-800' : 
                  project.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800',
                  'inline-flex rounded-full px-3 py-1 text-xs font-semibold'
                ]">
                  {{ project.status }}
                </span>
                <div class="flex justify-end space-x-2">
                    <button @click="showDetails()" class="inline-flex items-center px-1 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <InfoIcon class="h-4 w-4 mr-1" />
                Details
              </button>
              
              <button @click="deleteVideo(video.id)" class="inline-flex items-center px-1 py-1 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <TrashIcon class="h-4 w-4 mr-1" />
                Supprimer
              </button>
                </div>
              </div>
                        <!-- <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> -->
                    </div>
                </div>
            </div>
          <!-- <div v-for="project in projects" :key="project.id" class="bg-white rounded-xl shadow-lg overflow-hidden  ">
            <div class="abslolute pb-2/3">
              <img
                src="https://img.freepik.com/premium-photo/businessman-watching-online-videos-laptop-with-floating-play-button-corporate-office-setting_994764-60575.jpg?w=826 "
                :alt="project.name"
                class="abslolute h-full w-full object-cover"
              />
              <div class=" abslolute set-0 bg-black bg-opacity-25 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                <button @click="playVideo(project.id)" class="bg-white bg-opacity-75 rounded-full p-3 text-gray-800 hover:bg-opacity-100 transition duration-150 ease-in-out">
                  <PlayIcon class="h-8 w-8" />
                </button>
              </div>

              <div class=" absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span class="text-white text-sm font-medium px-2 py-1 bg-black bg-opacity-50 rounded">{{ project.duration }}</span>
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">{{ project.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">
                {{ project.originalLanguage }} to {{ project.targetLanguage }}
              </p>
              <div class="flex items-center justify-between">
                <span :class="[
                  project.status === 'Terminé' ? 'bg-green-100 text-green-800' : 
                  project.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800',
                  'inline-flex rounded-full px-3 py-1 text-xs font-semibold'
                ]">
                  {{ project.status }}
                </span>
                <div class="flex justify-end space-x-2">
                    <button @click="showDetails(video.id)" class="inline-flex items-center px-1 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <InfoIcon class="h-4 w-4 mr-1" />
                Details
              </button>
              
              <button @click="deleteVideo(video.id)" class="inline-flex items-center px-1 py-1 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <TrashIcon class="h-4 w-4 mr-1" />
                Delete
              </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
  
        <!-- Pagination -->
        <div class="mt-12 flex items-center justify-between">
          <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Précédent
            </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Suivant
            </a>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Page <span class="font-medium">1</span> Sur <span class="font-medium mr-4">2</span>    Total:<span class="font-medium">20</span> 
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Previous</span>
                  <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="#" aria-current="page" class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </a>
                <!-- <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                  3
                </a>
                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  8
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  9
                </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  10
                </a> -->
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Next</span>
                  <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Video Modal -->
      <div v-if="selectedVideo" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeVideo"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    {{ selectedVideo.name }}
                  </h3>
                  <div class="mt-2">
                    <video
                      :src="selectedVideo.videoSrc"
                      controls
                      class="w-full rounded-lg shadow-lg"
                      autoplay
                    ></video>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeVideo">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { VideoIcon, PlusIcon, PencilIcon,InfoIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon } from 'lucide-vue-next'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goToNewProject(){
    router.push('/video')
  }
  function showDetails() {
      router.push(`/video/details`)
  }
  const projects = ref([

    {
      id: 1,
      name: 'Documentaire sur le VIH',
      duration: '2:30',
      //thumbnail: '/placeholder.svg?height=400&width=600',
      videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      originalLanguage: 'Français',
      targetLanguage: 'Fon',
      status: 'Terminé'
    },
    {
      id: 2,
      name: 'Démo de produit',
      duration: '5:45',
      //thumbnail: '/placeholder.svg?height=400&width=600',
      videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
      originalLanguage: 'Français',
      targetLanguage: 'Bariba',
      status: 'En cours'
    },
    {
      id: 3,
      name: 'Tutorial Series',
      duration: '15:20',
      //thumbnail: '/placeholder.svg?height=400&width=600',
      videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
      originalLanguage: 'Anglais',
      targetLanguage: 'Dendi',
      status: 'Echec'
    },
    {
      id: 4,
      name: 'Documentaire sur le VIH',
      duration: '3:15',
      //thumbnail: '/placeholder.svg?height=400&width=600',
      videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
      originalLanguage: 'Français',
      targetLanguage: 'Fon',
      status: 'Terminé'
    },
    {
      id: 5,
      name: 'Customer Testimonials',
      duration: '8:00',
      //thumbnail: '/placeholder.svg?height=400&width=600',
      videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-30s.mp4',
      originalLanguage: 'Anglais',
      targetLanguage: 'Dendi',
      status: 'En cours'
    },
    {
      id: 6,
      name: 'Vidéo de marketing',
      duration: '10:30',
      //thumbnail: '/placeholder.svg?height=400&width=600',
      videoSrc: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      originalLanguage: 'Français',
      targetLanguage: 'Fon',
      status: 'Echec'
    },
  ])
  
  const selectedVideo = ref(null)
  
  const playVideo = (id) => {
    selectedVideo.value = projects.value.find(project => project.id === id)
  }
  
  const closeVideo = () => {
    selectedVideo.value = null
  }
  </script>