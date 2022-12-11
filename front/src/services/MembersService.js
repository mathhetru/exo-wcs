import axios from "axios";

const API_BASE_URL = 'http://localhost:3000/api'

async function addMemberName(name) {
    return axios.post(`${API_BASE_URL}/members`, { name: name })
}

async function showMembers() {
    return axios.get(`${API_BASE_URL}/members`)
}

export function MembersService() {
    return {
        addMemberName,
        showMembers
    }
}