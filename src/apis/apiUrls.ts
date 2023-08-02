const ngrokUrl = 'https://c85d-2804-431-cfc2-cc4-5576-5cff-866-7f53.ngrok-free.app';
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