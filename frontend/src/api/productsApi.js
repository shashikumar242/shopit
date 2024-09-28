import axios from 'axios';


export const getProducts = async() => {
    const response = await axios.get('/api/v1/products');
    return response.data;
}

export const getProductDetails = async (id) => {
    const response = await axios.get(`/api/v1/product/${id}`);
    return response.data;
}