// app/routes/gift-assistant.jsx
import React, { useState } from 'react';
import GiftAssistantForm from '../components/GiftAssistantForm';  // Adjust path if needed
import Recommendations from '../components/Recommendations';  // Adjust path if needed
import { fetchProducts } from '../services/shopify.server';  // Ensure this path is correct

const GiftAssistantPage = () => {
  const [userData, setUserData] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  const handleFormSubmit = async (data) => {
    setUserData(data);
    const { preferences } = data;

    const shop = 'gifttestrec.myshopify.com';  // Your store's domain
    const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;  // Use access token from environment

    try {
      const products = await fetchProducts(shop, accessToken, preferences);  // Fetch products based on preferences
      setRecommendations(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Smart Gift Assistant</h1>
      <GiftAssistantForm onSubmit={handleFormSubmit} />
      {userData && recommendations && (
        <Recommendations products={recommendations} />
      )}
    </div>
  );
};

export default GiftAssistantPage;
