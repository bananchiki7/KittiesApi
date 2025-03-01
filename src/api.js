import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";

const getLangs = async () => {
    const res = await axios.get("images/search?limit=10&has_breeds=1", {
        headers: {
            'x-api-key': 'live_qvehWvCOBgkZmZzLQz0mYOBxlxvs8TWLE04aqieFy45PvOWKatE08OaSteqyg5ND',
        },
    });
    console.log(res);

    return res.data;
}

const getBreeds = async () => {
    const res = await axios.get(`breeds`, {
        headers: {
            'x-api-key': 'live_qvehWvCOBgkZmZzLQz0mYOBxlxvs8TWLE04aqieFy45PvOWKatE08OaSteqyg5ND',
        },
    });
    console.log(res.data);

    return res.data;
}

const getImagesDyBreeds = async (breed) => {
    console.log(breed);

    const res = await axios.get(`images/search`, {
        params: {
            breed_ids: breed,
            limit: 5,
        },
        headers: {
            'x-api-key': 'live_qvehWvCOBgkZmZzLQz0mYOBxlxvs8TWLE04aqieFy45PvOWKatE08OaSteqyg5ND',
        },
    });
    console.log(res.data);
    
    return res.data
}

export default { getLangs, getBreeds, getImagesDyBreeds };