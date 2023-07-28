const ngrokUrl = 'https://8ef3-2804-431-cfc2-cc4-b1de-422b-5ac7-9e54.ngrok-free.app';
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