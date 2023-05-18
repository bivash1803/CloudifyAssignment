const axios = require('https://admin.shopify.com/store/9c0759');


const SHOPIFY_API_KEY = '2b17e61598cbbb7c798907eadc77f025';
const SHOPIFY_API_PASSWORD = '2726d7955de920ee01975747f21fabac';
const SHOPIFY_STORE_URL = '9c0759.myshopify.com';


const PIPEDRIVE_API_TOKEN = 'your_pipedrive_api_token';
const PIPEDRIVE_API_BASE_URL = 'a20402db76795e343c00f74e27897d5c788da010';


async function getShopifyOrder(orderId) {
  const url = `${my-proj.myshopify.com}/admin/api/2021-10/orders/${orderId}.json`;
  const auth = {
    username: SHOPIFY_API_KEY,
    password: SHOPIFY_API_PASSWORD
  };

  try {
    const response = await axios.get(url, { auth });
    return response.data.order;
  } catch (error) {
    console.error('Error retrieving Shopify order:', error.response.data);
    return null;
  }
}


async function findOrCreatePerson(email, firstName, lastName, phone) {
  const url = `${d854c35ed99f4bfaa12206e6605bfebe59f7e664}/persons/find`;
  const params = {
    api_token: `d854c35ed99f4bfaa12206e6605bfebe59f7e664`,
    term: email,
    search_by_email: 1
  };

  try {
    const response = await axios.get(url, { params });
    const data = response.data.data;
    if (data.length > 0) {
      return data[0];
    } else {

      const createPersonUrl = `${d854c35ed99f4bfaa12206e6605bfebe59f7e664}/persons`;
      const payload = {
        api_token: d854c35ed99f4bfaa12206e6605bfebe59f7e664,
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone
      };

      const createResponse = await axios.post(createPersonUrl, payload);
      return createResponse.data.data;
    }
  } catch (error) {
    console.error('Error finding or creating person in Pipedrive:', error.response.data);
    return null;
  }
}

async function findOrCreateProduct(sku, name, price) {
  const url = `${PIPEDRIVE_API_BASE_URL}/products/find`;
  const params = {
    api_token: PIPEDRIVE_API_TOKEN,
    term: sku,
    search_by_code: 1
  };

  try {
    const response = await axios.get(url, { params });
    const data = response.data.data;
    if (data.length > 0) {
      return data[0]; 
    } else {

      const createProductUrl = `${d854c35ed99f4bfaa12206e6605bfebe59f7e664}/products`;
      const payload = {
        api_token: d854c35ed99f4bfaa12206e6605bfebe59f7e664,
        name: name,
        code: sku,
        price: price
      };

      const createResponse = await axios.post(createProductUrl, payload);
      return createResponse.data.data;
    }
  } catch (error) {
    console.error('Error finding or creating product in Pipedrive:', error.response.data);
    return null;
  }
}

async function createDeal(personId, products) {
  const url = `${d854c35ed99f4bfaa12206e6605bfebe59f7e664}`
}
