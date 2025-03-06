import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const login = (credentials) => API.post('/login/', credentials);
export const register = (userData) => API.post('/register/', userData);
export const getTravelRequests = () => API.get('/travel-requests/');
export const updateRequestStatus = (id, status) => API.patch(`/travel-requests/${id}/`, { status });
export const submitTravelRequest = (data) => API.post('/travel-requests/', data);
