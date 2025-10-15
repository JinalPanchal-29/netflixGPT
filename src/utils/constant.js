export const api_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const GEMINI_API = import.meta.env.VITE_GEMINI_API_KEY