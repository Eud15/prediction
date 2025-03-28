<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Statistiques</h1>
      
      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="kpi in kpis" :key="kpi.title" class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-700">{{ kpi.title }}</h2>
            <component :is="kpi.icon" class="h-8 w-8 text-blue-500" />
          </div>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ kpi.value }}</p>
          <p :class="[
            'text-sm mt-2',
            kpi.change > 0 ? 'text-green-600' : 'text-red-600'
          ]">
            {{ kpi.change > 0 ? '+' : '' }}{{ kpi.change }}% depuis le mois dernier
          </p>
        </div>
      </div>
  
      <!-- Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Sales Chart -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Ventes mensuelles</h2>
          <canvas ref="salesChart"></canvas>
        </div>
  
        <!-- Top Products Chart -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Produits les plus vendus</h2>
          <canvas ref="productsChart"></canvas>
        </div>
      </div>
  
      <!-- Recent Orders Table -->
      <div class="mt-8 bg-white rounded-lg shadow overflow-hidden">
        <h2 class="text-xl font-semibold text-gray-800 p-6">Commandes récentes</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="order in recentOrders" :key="order.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{{ order.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ order.customer }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ order.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ order.amount }}€</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    order.status === 'Complété' ? 'bg-green-100 text-green-800' : 
                    order.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  ]">
                    {{ order.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { ShoppingCartIcon, UsersIcon, TrendingUpIcon } from 'lucide-vue-next'
  import Chart from 'chart.js/auto'
  
  const salesChart = ref(null)
  const productsChart = ref(null)
  
  const kpis = [
    { title: 'Ventes totales', value: '24,567€', change: 12, icon: ShoppingCartIcon },
    { title: 'Nouveaux clients', value: '145', change: 8, icon: UsersIcon },
    { title: 'Revenu moyen', value: '169€', change: -3, icon: UsersIcon },
    { title: 'Taux de conversion', value: '3.2%', change: 0.5, icon: TrendingUpIcon },
  ]
  
  const recentOrders = [
    { id: '1234', customer: 'Jean Dupont', date: '2023-05-01', amount: '156', status: 'Complété' },
    { id: '1235', customer: 'Marie Martin', date: '2023-05-02', amount: '89', status: 'En cours' },
    { id: '1236', customer: 'Pierre Durand', date: '2023-05-03', amount: '210', status: 'Complété' },
    { id: '1237', customer: 'Sophie Lefebvre', date: '2023-05-04', amount: '45', status: 'Annulé' },
    { id: '1238', customer: 'Luc Moreau', date: '2023-05-05', amount: '178', status: 'En cours' },
  ]
  
  onMounted(() => {
    // Sales Chart
    new Chart(salesChart.value, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Ventes',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Ventes mensuelles'
          }
        }
      }
    })
  
    // Top Products Chart
    new Chart(productsChart.value, {
      type: 'doughnut',
      data: {
        labels: ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E'],
        datasets: [{
          label: 'Ventes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Produits les plus vendus'
          }
        }
      }
    })
  })
  </script>