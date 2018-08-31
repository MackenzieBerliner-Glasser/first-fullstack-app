const URL = 'http://localhost:3000/api';
const CELEBRITIES_URL = `${URL}/celebrities`;
const FAMOUS_URL = `${URL}/famous`;

export default {
  getCelebrities() {
    return fetch(CELEBRITIES_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getCeleb(id) {
    return fetch(`${CELEBRITIES_URL}/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addCeleb(celeb) {
    return fetch(CELEBRITIES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(celeb)
    })
      .then(response => response.json());
  },
  updateCeleb(celeb) {
    return fetch(`${CELEBRITIES_URL}/${celeb.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(celeb)
    })
      .then(response => response.json());
  },
  removeCeleb(id) {
    return fetch(`${CELEBRITIES_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },

  getFamous() {
    return fetch(FAMOUS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }

};