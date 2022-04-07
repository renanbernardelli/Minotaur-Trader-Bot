import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function getSettings(token) {

    const settingsURL = `${API_URL}/settings`;
    const headers = {

        'authorization': token
    }
    const response = await axios.get(settingsURL, {headers});

    return response.data;
}