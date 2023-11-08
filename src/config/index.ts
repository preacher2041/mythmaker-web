const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT as string;
const API_URL = import.meta.env.VITE_API_URL as string;

export const BACKEND_URL = `${SERVER_URL}${SERVER_PORT}${API_URL}`;
