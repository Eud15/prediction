<template>
    <div class="min-h-screen bg-gray-100 sm:px-6 lg:px-2">
      <div class=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="px-4 py-5 sm:px-6 bg-green-600 text-white">
          <h1 class="text-2xl font-bold">{{ video.name }}</h1>
          <p class="mt-1 text-sm">Détails du projet de doublage de la vidéo </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Status</dt>
              <dd class="mt-1 text-sm text-gray-900">
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ video.status }}
                </span>
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">ID Projet </dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.id }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Langue Originale </dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.originalLanguage }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Langue de Sortie</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.outputLanguage }}</dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-bold text-gray-500">Durée de la vidéo finale</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.duration }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Taille du fichier original</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.originalFileSize }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Taille du fichier de sortie</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.dubbedFileSize }}</dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-bold text-gray-500">Description</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.description }}</dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-bold text-gray-500">Modèle utilisé</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.aiModel }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Date de doublage</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ formatDate(video.completionDate) }}</dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-bold text-gray-500">Temps de traitement</dt>
              <dd class="mt-1 text-sm text-gray-900">{{ video.processingTime }}</dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="text-sm font-bold text-gray-500">Qualité de la video</dt>
              <dd class="mt-1 text-sm text-gray-900">
                <ul class="list-disc pl-5 space-y-1">
                  <li>Lip Sync Accuracy: {{ video.qualityMetrics.lipSyncAccuracy }}%</li>
                  <li>Audio Clarity: {{ video.qualityMetrics.audioClarity }}%</li>
                  <li>Translation Accuracy: {{ video.qualityMetrics.translationAccuracy }}%</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div class="px-4 py-4 sm:px-6 bg-gray-50 flex justify-end space-x-3">
          <button @click="previewVideo" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-indigo-600">
            <PlayIcon class="h-4 w-4 mr-2" />
            Prévisualiser 
          </button>
          <button @click="downloadVideo" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <DownloadIcon class="h-4 w-4 mr-2" />
            Télécharger
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { PlayIcon, DownloadIcon } from 'lucide-vue-next'
  
  const video = ref({
    id: 'VID-2023-002',
    name: 'Présentation du rapport annuel 2023',
    status: 'Terminé',
    originalLanguage: 'Français',
    outputLanguage: 'Fon',
    duration: '15:47',
    originalFileSize: '1.2 GB',
    dubbedFileSize: '1.5 GB',
    description: 'Cette vidéo présente le rapport annuel de notre entreprise pour 2023, désormais doublé en mandarin pour nos parties prenantes chinoises.',
    aiModel: 'GPT-4 avec synthèse vocale avancée v2.0',
    completionDate: new Date('2023-09-30T18:45:00'),
    processingTime: '4 heures 23 minutes',
    qualityMetrics: {
      lipSyncAccuracy: 98,
      audioClarity: 95,
      translationAccuracy: 99
    }
  })
  
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date)
  }
  
  const previewVideo = () => {
    console.log('Preview video clicked')
    // Implement preview functionality
  }
  
  const downloadVideo = () => {
    console.log('Download video clicked')
    // Implement download functionality
  }
  </script>