<template>
    <div class="min-h-screen bg-gray-100">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <h1 class="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
          
          <!-- Profile Settings -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Profile Information</h2>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Update your personal details and profile picture.</p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Profile picture</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div class="flex items-center">
                      <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <!-- <img src="/placeholder.svg?height=100&width=100" alt="Profile picture" class="h-full w-full object-cover" /> -->
                      </span>
                      <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Change
                      </button>
                    </div>
                  </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input type="text" v-model="fullName" class="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                  </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email address</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input type="email" v-model="email" class="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
  
          <!-- Notification Settings -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Notification Preferences</h2>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Decide how you want to be notified about activity.</p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email notifications</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div class="flex items-center">
                      <input id="email-notifications" v-model="emailNotifications" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label for="email-notifications" class="ml-2 block text-sm text-gray-900">
                        Receive email notifications
                      </label>
                    </div>
                  </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Push notifications</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div class="flex items-center">
                      <input id="push-notifications" v-model="pushNotifications" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label for="push-notifications" class="ml-2 block text-sm text-gray-900">
                        Receive push notifications
                      </label>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
  
          <!-- Account Settings -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Account Settings</h2>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Manage your account preferences and security.</p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Language</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <select v-model="language" class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                    </select>
                  </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Time zone</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <select v-model="timezone" class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                      <option value="UTC">UTC</option>
                      <option value="EST">Eastern Time</option>
                      <option value="PST">Pacific Time</option>
                    </select>
                  </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Two-factor authentication</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <button type="button" class="bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Enable two-factor auth
                    </button>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
  
          <!-- Save Changes Button -->
          <div class="flex justify-end">
            <button type="button" @click="saveChanges" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const fullName = ref('John Doe')
  const email = ref('john.doe@example.com')
  const emailNotifications = ref(true)
  const pushNotifications = ref(false)
  const language = ref('en')
  const timezone = ref('UTC')
  
  const saveChanges = () => {
    // Implement save functionality here
    console.log('Saving changes...')
    console.log({
      fullName: fullName.value,
      email: email.value,
      emailNotifications: emailNotifications.value,
      pushNotifications: pushNotifications.value,
      language: language.value,
      timezone: timezone.value
    })
    // You would typically send this data to your backend API
  }
  </script>