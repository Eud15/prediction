/* eslint-disable */
/* eslint-disable prefer-arrow-callback */
import Vue from 'vue'
// eslint-disable-next-line import/no-cycle
import axios from 'axios'
//import { useAuthStore } from '../modules/auth/authStore'
import router  from '../router'
// axios

const baseURL = {

  local: 'http://127.0.0.1:8000/api',
  serverTest: 'http://20.115.92.109:8000/api'

}

const axiosIns = axios.create({
  baseURL: baseURL.serverTest,
  headers: {
    common: {
      // 'Content-Type': 'multipart/form-data',
    },
  },
})

// eslint-disable-next-line func-names
axiosIns.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  token ? config.headers.Authorization = `Bearer ${token}` : null
  return config
  // eslint-disable-next-line func-names
}, function (error) {
  return Promise.reject(error)
})

// eslint-disable-next-line func-names
axiosIns.interceptors.response.use(function (response) {
  return response
  // eslint-disable-next-line func-names
}, function (error) {
  if (error.response.status === 401) {
    localStorage.clear()
    router.push("/login");
  }
  return Promise.reject(error)
})


export default axiosIns