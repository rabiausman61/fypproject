import axios from 'axios'
import { api } from '../urlconfig'

const axiosapi=axios.create({
    baseURL:api,
  /*  headers:{
"Authorization":''

    }*/
})
export default axiosapi