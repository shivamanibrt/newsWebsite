import axios from "axios";

export const getNews = async () => {
    try {
        const { data } = await axios.get(`http://api.mediastack.com/v1/news?access_key=6934ce65d20f8357afef7120eae80064&keywords=tennis&limit=1`);
        return data;
    } catch (error) {
        console.log('Error:', error.message);
    }
};
