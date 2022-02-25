const axios = require('axios').default;

export async function getCats() {
    try {
        const result = await axios.get('https://cataas.com/api/cats?skip=0&limit=10');
        return result.data;
    } catch(error) {
        console.log(error);
        return error;
    }
}

