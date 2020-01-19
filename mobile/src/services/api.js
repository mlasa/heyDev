import axios from 'axios'

const api = axios.create({
	baseURL:'http://192.168.1.15:8080'
})
export default api

// se estiver usando emulador do ios : localhost
// se estiver usando emulador do android : usar ip mostrado na aba do expo ou buscar por localhost ip android emulator
