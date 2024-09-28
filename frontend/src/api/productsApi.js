

import axios from 'axios';


export const getProducts = async (keyword = '', currentPage = 1, price, category,rating = 0) => {  // by default the page number is going to be 1
    
    let url = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`;
    if (category) {
        url = url + `&category=${category}`
    }
    const response = await axios.get(url);


    return response.data;
}

export const getProductDetails = async (id) => {
    const response = await axios.get(`/api/v1/product/${id}`);
    return response.data;
}