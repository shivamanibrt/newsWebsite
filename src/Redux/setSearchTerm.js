import { getNews } from "../Api Handel/ApiCall";
import { setReduxNews } from "./newsSearcSlice";

export const setSearchTerm = (searchTerm) => {
    return async (dispatch) => {
        try {
            // Call the API and retrieve the search results
            const data = await getNews(searchTerm);

            // Dispatch an action to update the search term and store the results in Redux
            dispatch(setReduxNews(data?.results, searchTerm));
        } catch (error) {
            console.error(error);
        }
    };
};
