import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PROPDUCTS_TO_SHOP
} from './types';
import {PRODUCT_SERVER} from '../components/utils/misc';

export const getProductsByArrival = () => {
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data)
        .catch(error => console.error(error))

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
};

export const getProductsBySell = () => {
    //?sortBy=sold&order=desc&limit=4
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
        .then(response => response.data)
        .catch(error => console.error(error))

    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }
};

//==================================================================
//     ЦЕЛЕВЫЕ ФУНКЦИИ, КОТОРЫЕ ПОДТЯГИВАЮ ДАННЫЕ ДЛЯ ФИЛЬТРАЦИИ
//==================================================================
export const getBrands = () => {
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data);

    return {
        type: GET_BRANDS,
        payload: request
    };
};

export const getWoods = () => {
    const request = axios.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data);

    return {
        type: GET_WOODS,
        payload: request
    };
};

export const getProductsToShop = (skip, limit,filters =[], previousState = []) => {
    const data = {
        limit,
        skip,
        filters
    }

    const request = axios.post(`${PRODUCT_SERVER}/shop`,data)
                .then(response => {
                    let newState = [
                        ...previousState,
                        ...response.data.articles
                    ];
                    return {
                        size: response.data.size,
                        articles: newState
                    }
                });

    return {
        type: GET_PROPDUCTS_TO_SHOP,
        payload: request
    }

}