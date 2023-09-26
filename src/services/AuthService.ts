import axios from 'axios';

const BASE_URL = 'https://nubitestapi.free.beeceptor.com';

const AuthService = {
  authenticateUser: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/login`);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Error de autenticación');
      }
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
