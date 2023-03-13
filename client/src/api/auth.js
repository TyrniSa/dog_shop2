import axios from 'axios';
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8000/auth/register',
    registrationData
  )
};

export async function onLogin(loginData) {
  return await axios.post('http://localhost:8000/auth/login', loginData)
};

export async function onLogout() {
  return await axios.get('http://localhost:8000/auth/logout')
};

export async function fetchProtectedInfo() {
 return await axios.get('http://localhost:8000/auth/protected') 
};