import $http from '../../plugins/axios'
import { objectToFormData } from '../../utils/utils'

export default {

   c(id: any, payload: any) {
    return $http.get(`/projects/workflows/${id}/steps`, payload)
   },

}