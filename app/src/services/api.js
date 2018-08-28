export default {
  getCelebrities() {
    return fetch('http://localhost:3000/api/celebrities', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addCeleb(celeb) {
    return fetch('http://localhost:3000/api/celebrities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(celeb)
    })
      .then(response => response.json());
  }


};