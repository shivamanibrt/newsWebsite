import axios from "axios";


export const getNews = async (str) => {
    try {
        const { data } = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_23191190f4f0567d659bec29740c02ea05abb&q=${str}
        `);

        return data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(error.message);
        }
    }
}    
