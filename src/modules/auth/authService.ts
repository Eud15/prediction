import $http from '../../plugins/axios'
import { objectToFormData } from '../../utils/utils'

export default {

    loginService(payload: any){
        // let data = new FormData();
        // for (let key_ of Object.keys(payload)){
        //     data.append(key_, payload[key_])
        // }
        return $http.post('/user/register', payload)
    }
}