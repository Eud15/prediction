<template>
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-yellow-400 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <img class="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Logo MTN" />
                <span class="ml-2 text-xl font-bold text-black">MTN Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Liste des inscrits</h1>
        </div>
      </header>
  
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
                <h2 class="text-lg leading-6 font-medium text-gray-900">Participants</h2>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input type="text" v-model="searchQuery" class="focus:ring-yellow-500 focus:border-yellow-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="Rechercher...">
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200">
                <ul role="list" class="divide-y divide-gray-200">
                  <li v-for="participant in filteredParticipants" :key="participant.id" class="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div class="flex items-center justify-between">
                      <div class="text-sm font-medium text-yellow-600 truncate">
                        {{ participant.prenom }} {{ participant.nom }}
                      </div>
                      <div class="ml-2 flex-shrink-0 flex">
                        <span :class="[
                          participant.participer === 'oui' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                          'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                        ]">
                          {{ participant.participer === 'oui' ? 'Participe' : 'Ne participe pas' }}
                        </span>
                      </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                      <div class="sm:flex">
                        <p class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          {{ participant.email }}
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          {{ participant.numero }}
                        </p>
                      </div>
                      <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        Taille: {{ participant.taille }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const searchQuery = ref('')
  
  const participants = ref([
    { id: 1, nom: 'Doe', prenom: 'John', email: 'john.doe@example.com', numero: '0123456789', participer: 'oui', taille: 'M' },
    { id: 2, nom: 'Smith', prenom: 'Jane', email: 'jane.smith@example.com', numero: '9876543210', participer: 'non', taille: 'S' },
    { id: 3, nom: 'Johnson', prenom: 'Bob', email: 'bob.johnson@example.com', numero: '5555555555', participer: 'oui', taille: 'L' },
    { id: 4, nom: 'Williams', prenom: 'Alice', email: 'alice.williams@example.com', numero: '1111111111', participer: 'oui', taille: 'XL' },
    { id: 5, nom: 'Brown', prenom: 'Charlie', email: 'charlie.brown@example.com', numero: '2222222222', participer: 'non', taille: 'M' },
  ])
  
  const filteredParticipants = computed(() => {
    return participants.value.filter(participant => {
      const searchRegex = new RegExp(searchQuery.value, 'i')
      return searchRegex.test(participant.nom) || 
             searchRegex.test(participant.prenom) || 
             searchRegex.test(participant.email) ||
             searchRegex.test(participant.numero)
    })
  })
  </script>