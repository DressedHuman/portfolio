import axios, { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Inject auth token into requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Auto-refresh token on 401
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post(`${API_URL}/api/token/refresh/`, {
                    refresh: refreshToken,
                });

                const { access } = response.data;
                localStorage.setItem('access_token', access);

                originalRequest.headers.Authorization = `Bearer ${access}`;
                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/admin/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export const authAPI = {
    login: async (username: string, password: string) => {
        const response = await axios.post(`${API_URL}/api/token/`, {
            username,
            password,
        });
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    },
};

export const aboutAPI = {
    get: async () => {
        const response = await api.get('/api/about/');
        return response.data;
    },

    update: async (id: number, data: FormData) => {
        const response = await api.put(`/api/about/${id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },
};

export const messagesAPI = {
    getAll: async () => {
        const response = await api.get('/api/messages/');
        return response.data;
    },

    markAsRead: async (id: number, isRead: boolean) => {
        const response = await api.patch(`/api/messages/${id}/`, {
            is_read: isRead,
        });
        return response.data;
    },
};

export const projectsAPI = {
    getAll: async () => {
        const response = await api.get('/api/projects/');
        return response.data;
    },

    getOne: async (id: number) => {
        const response = await api.get(`/api/projects/${id}/`);
        return response.data;
    },

    create: async (data: FormData) => {
        const response = await api.post('/api/projects/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    update: async (id: number, data: FormData) => {
        const response = await api.put(`/api/projects/${id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    delete: async (id: number) => {
        const response = await api.delete(`/api/projects/${id}/`);
        return response.data;
    },
};

export const technologiesAPI = {
    getAll: async () => {
        const response = await api.get('/api/technologies/');
        return response.data;
    },
};

export default api;
