import $http from '../../plugins/axios'
import { objectToFormData } from '../../utils/utils'

export default {

   getRecommendations() {
    return $http.get('/recommendations/')
   },

}