import axios from 'axios';


export const getProducts = async(currentPage = 1) => {  // by default the page number is going to be 1
    const response = await axios.get(`/api/v1/products?page=${currentPage}`);
    return response.data;
}

export const getProductDetails = async (id) => {
    const response = await axios.get(`/api/v1/product/${id}`);
    return response.data;
}