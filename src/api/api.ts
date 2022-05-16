import { BASE_URL } from "./api.constants";

export const get = (endpoint: string) => 
  fetch(`${BASE_URL}${endpoint}`)
    .then(res => res.json())
    .catch(res => {throw new Error('Server did not answer')});

