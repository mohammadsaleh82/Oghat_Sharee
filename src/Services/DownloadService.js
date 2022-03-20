import axios from "axios";

export const GetInfo = (city) => {
    
    axios.get(`https://one-api.ir/owghat/?token=809094:6236bf4ca515f9.55429155&city=${city}`)
        .then(res => {
            return res.data
        }).catch(err => {
            return err
        })
    
    
}