import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error.response.data);
        throw error;
    }
};

// Add more functions as needed for login, fetching user by ID, etc.
