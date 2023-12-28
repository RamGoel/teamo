import API from "@/lib/axios"

export const fetchTeams = async () => {
    let response =await API.get('http://localhost:3000/api/teams').then(res => {
        return res.data;
    }).catch(err => {
        return err;
    })
    return response;
}