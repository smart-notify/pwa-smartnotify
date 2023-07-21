const ngrokUrl = 'https://d263-2804-431-cfc3-c650-eca7-bd34-60ab-590d.ngrok-free.app';
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