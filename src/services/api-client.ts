import axios from "axios";

export default axios.create( {
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '778dcdf66f2540708fcc773cf176af71'
    }
})