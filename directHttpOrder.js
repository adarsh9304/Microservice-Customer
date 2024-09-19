const axios = require('axios');
const ORDER_SERVICE_URL = 'http://172-31-4-161:3002';  // URL of the Order service
async function getOrderFromOrderService() {
  try {
    const response = await axios.get(`${ORDER_SERVICE_URL}/order-temp`,);
    return response.data;
  } catch (error) {
    console.error('Error communicating with the Order service:', error.message);
    return 'Failed to communicate with Order service';
  }
}

module.exports={
    getOrderFromOrderService
}
