const ngrokUrl = 'https://e45f-2804-431-cfc2-65c0-d9a7-a1d-bbc7-61e.ngrok-free.app';
const localUrl = 'http://localhost:8080';

export const apiUrls = {
  // Rotas da API 
  registerCondominium: `${ngrokUrl}/api/condominium/register`,
  loginCondominium: `${ngrokUrl}/api/condominium/login`,
  
  parcelNotification: `${ngrokUrl}/api/parcel/notification`,
  parcelDelivery: `${ngrokUrl}/api/parcel/`,
  parcelGetAll: `${ngrokUrl}/api/parcel`,
  
  createApartmentResident: `${ngrokUrl}/api/resident/vertical-condo`,
  createHouseResident: `${ngrokUrl}/api/resident/horizontal-condo`,
  deleteResident: `${ngrokUrl}/api/resident`
};