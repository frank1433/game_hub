import axios from 'axios'

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     params:{
//         key: "c4c3ad64be144c45b0d782127e601897"
//     }
// })

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "c4c3ad64be144c45b0d782127e601897"
    }
})