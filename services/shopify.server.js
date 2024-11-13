import { Shopify } from '@shopify/shopify-api';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Initialize Shopify API client
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: ['read_products', 'write_products'], // Add necessary scopes
  HOST_NAME: process.env.SHOPIFY_HOST_NAME,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Function to fetch products based on query
const fetchProducts = async (shop, accessToken, query) => {
  const client = new Shopify.Clients.Storefront(shop, accessToken);

  const response = await client.query({
    data: {
      query: `
        query {
          products(first: 10, query: "${query}") {
            edges {
              node {
                id
                title
                descriptionHtml
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
  });

  return response.body.data.products.edges;
};

export { fetchProducts };
