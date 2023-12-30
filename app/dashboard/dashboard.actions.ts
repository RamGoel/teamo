import API from "../../lib/axios"

export const fetchTeams = async () => {
    let response =await API.get('http://localhost:3000/api/teams').then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
    return response;
}

export const fetchEvents = async () => {
    let response = await API.get('http://localhost:3000/api/events').then(res => {
        console.log(res.data)
        return res.data;
    }).catch(err => {
        return err;
    })
    return response;
}