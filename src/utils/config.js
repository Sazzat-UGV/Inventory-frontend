export default {
    appName: 'Inventory',
    appVersion: '1.0.0',
    defaultDataLimit: 10,
    inventoryApiHost:import.meta.env.VITE_API_URL,
    apiToken: localStorage.getItem('token'),
    requestTimeOut:5000
}