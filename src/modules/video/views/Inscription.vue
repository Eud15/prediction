<template>
    <div class="min-h-screen bg-yellow-400 flex items-center justify-center px-4 py-12">
      <div class="max-w-3xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div class="text-center">
          <h2 class="mt-6 text-4xl font-extrabold text-gray-900">Inscription</h2>
          <p class="mt-2 text-lg text-gray-600">Session stratégique de technology team</p>
        </div>
        
        <!-- Stepper -->
        <div class="flex justify-between items-center mb-12">
          <div v-for="step in 3" :key="step" class="flex flex-col items-center">
            <div :class="`rounded-full h-12 w-12 flex items-center justify-center border-2 ${currentStep >= step ? 'bg-yellow-400 border-yellow-400 text-black' : 'border-gray-300 text-gray-300'}`">
              {{ step }}
            </div>
            <div class="text-sm mt-2" :class="currentStep >= step ? 'text-yellow-400' : 'text-gray-400'">
              {{ stepTitles[step - 1] }}
            </div>
          </div>
        </div>
  
        <form @submit.prevent="submitForm" class="mt-8 space-y-8">
          <!-- Step 1: General Information -->
          <div v-if="currentStep === 1">
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="mb-4">
                <label for="nom" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input id="nom" v-model="form.nom" name="nom" type="text" required class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Votre nom">
              </div>
              <div class="mb-4">
                <label for="prenom" class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input id="prenom" v-model="form.prenom" name="prenom" type="text" required class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Votre prénom">
              </div>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" v-model="form.email" name="email" type="email" required class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Votre email">
              </div>
              <div>
                <label for="numero" class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                <input id="numero" v-model="form.numero" name="numero" type="tel" required class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Votre numéro de téléphone">
              </div>
            </div>
          </div>
  
          <!-- Step 2: Activity Information -->
          <div v-if="currentStep === 2">
            <div class="space-y-6">
              <div>
                <label for="participer" class="block text-sm font-medium text-gray-700 mb-1">Voulez-vous y participer ?</label>
                <select id="participer" v-model="form.participer" name="participer" required class="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
              <div>
                <label for="nuit" class="block text-sm font-medium text-gray-700 mb-1">Voulez-vous passer la nuit ?</label>
                <select id="nuit" v-model="form.nuit" name="nuit" required class="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
              <div>
                <label for="taille" class="block text-sm font-medium text-gray-700 mb-1">Quelle est votre taille de t-shirt ?</label>
                <select id="taille" v-model="form.taille" name="taille" required class="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div>
                <label for="allergie" class="block text-sm font-medium text-gray-700 mb-1">Êtes-vous allergique à un mets ou aliment ?</label>
                <input id="allergie" v-model="form.allergie" name="allergie" type="text" class="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Si oui, précisez">
              </div>
              <div>
                <label for="specification" class="block text-sm font-medium text-gray-700 mb-1">Autres spécifications</label>
                <textarea id="specification" v-model="form.specification" name="specification" rows="4" class="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Autres informations importantes"></textarea>
              </div>
            </div>
          </div>
  
          <!-- Step 3: Submission -->
          <div v-if="currentStep === 3">
            <h3 class="text-xl font-medium text-gray-900 mb-6">Vérifiez vos informations</h3>
            <div class="space-y-4 text-md">
              <p><strong class="font-medium">Nom:</strong> {{ form.nom }}</p>
              <p><strong class="font-medium">Prénom:</strong> {{ form.prenom }}</p>
              <p><strong class="font-medium">Email:</strong> {{ form.email }}</p>
              <p><strong class="font-medium">Numéro:</strong> {{ form.numero }}</p>
              <p><strong class="font-medium">Participation:</strong> {{ form.participer }}</p>
              <p><strong class="font-medium">Nuit sur place:</strong> {{ form.nuit }}</p>
              <p><strong class="font-medium">Taille de t-shirt:</strong> {{ form.taille }}</p>
              <p><strong class="font-medium">Allergies:</strong> {{ form.allergie || 'Aucune' }}</p>
              <p><strong class="font-medium">Autres spécifications:</strong> {{ form.specification || 'Aucune' }}</p>
            </div>
          </div>
  
          <div class="flex justify-between pt-6">
            <button v-if="currentStep > 1" @click="prevStep" type="button" class="group relative w-1/3 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Précédent
            </button>
            <button v-if="currentStep < 3" @click="nextStep" type="button" class="group relative w-1/3 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Suivant
            </button>
            <button v-if="currentStep === 3" type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  const currentStep = ref(1)
  const stepTitles = ['Informations', 'Activité', 'Confirmation']
  
  const form = reactive({
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    participer: 'oui',
    nuit: 'non',
    taille: 'M',
    allergie: '',
    specification: ''
  })
  
  const nextStep = () => {
    if (currentStep.value < 3) {
      currentStep.value++
    }
  }
  
  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }
  
  const submitForm = () => {
    console.log('Form submitted:', form)
    alert('Formulaire soumis avec succès!')
    // Ici, vous ajouteriez le code pour envoyer les données à votre serveur
  }
  </script>