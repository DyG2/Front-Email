import axios from 'axios';

let back_en_point = process.env.REACT_APP_API_URL;

export const getData = async () => {
    return await axios.get(`${back_en_point}/appartements/`);
}


