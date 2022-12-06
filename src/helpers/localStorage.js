import { LocalStorage } from 'node-localstorage'
const localStorage = new LocalStorage('./scratch');

// initialize local storage array
localStorage.setItem('goals', JSON.stringify([]))

function getLocalStorage(name) {
     return JSON.parse(localStorage.getItem(name));
}

function setLocalStorage(name, value) {
     return localStorage.setItem(name, JSON.stringify(value));
}

export default {
     getLocalStorage,
     setLocalStorage,
     localStorage
}