import API from "@/lib/axios"
import toast from "react-hot-toast"

export const fetchTeams = (callback: Function) => {
    API.get('/team').then(({ data }) => {
        console.log(data)
        callback(data.data)
    }).catch((err: any) => {
        toast.error(err.message ?? 'Some Error Occured')
    })
}

export const fetchEvents = (callback: Function) => {
    API.get('/event').then(({data}) => {
        callback(data.data)
    }).catch(err => {
        toast.error(err.message ?? 'Some Error Occured')
    })
}


export const addNewEvent = (data:any, callback:Function) => {
    API.post('/event', data).then(() => {
        toast.success('Event Added Successfully')
        callback();
    }).catch(err => {
        toast.error(err.message ?? 'Some Error Occured')
    })
}