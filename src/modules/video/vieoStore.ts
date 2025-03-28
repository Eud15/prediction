import { defineStore } from "pinia";
import { computed, ref } from "vue";
import $service from "../video/videoServices"

export const useVideoStore = defineStore('video',() => {

    var recommendations = ref([])

    async function recommendationsAction(payload: any){
        const response = await $service.getRecommendations()
        return response
    }
    
    return {
        recommendationsAction
    }
})