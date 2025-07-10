/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

/**
 * Construye una URL completa para un endpoint de la API.
 * @param {string} path - El path del endpoint (ej. '/products').
 * @returns {string} La URL completa.
 */
export const getMainApiUrl = (path) => import.meta.env.VITE_API_BASE_URL + path;

export const mainApiClient = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
