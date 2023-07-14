export const apiUrls = {
  // Rotas da API 
  registerCondominium: 'http://localhost:8080/api/condominium/register',
  loginCondominium: 'http://localhost:8080/api/condominium/login',
  
  parcelNotification: 'http://localhost:8080/api/parcel/notification',
  parcelDelivery: 'http://localhost:8080/api/parcel/',
  parcelGetAll: 'http://localhost:8080/api/parcel?status=NOT_DELIVERED',
  
  createApartmentResident: 'http://localhost:8080/api/resident/vertical-condo',
  createHouseResident: 'http://localhost:8080/api/resident/horizontal-condo',
  deleteResident: 'http://localhost:8080/api/resident'
};