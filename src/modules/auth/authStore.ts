import { defineStore } from "pinia";
import { computed, ref } from "vue";
import $service from "../auth/authService"

export const useAuthStore = defineStore('auth',() => {

    async function loginAction(payload: any){
        const response = await $service.loginService(payload)
        return response
    }
    
    return {
        loginAction
    }
})