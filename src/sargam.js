import axios from 'axios';

const clientId="dd9b12091fb342c3a5cb7d41c0f64d96";
const authEndpoint="https://accounts.spotify.com/authorize?";
const redirectUri="http://localhost:5173";
const scopes=["user-library-read","playlist-read-private"];

export const loginEndpoint=`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };

  export default apiClient;