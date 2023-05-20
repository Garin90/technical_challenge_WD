import http from './base-api';

const list = () => http.get('/phones')
  .then(r => r.data)

const detail = (id) => http.get(`/phones/${id}`)
  .then(r => r.data)

export default { list, detail }