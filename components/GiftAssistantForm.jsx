import React, { useState } from 'react';

const GiftAssistantForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    userName: '',
    preferences: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Submit form data to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={formData.userName}
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        />
      </label>
      <label>
        Preferences (e.g., age, interests):
        <input
          type="text"
          value={formData.preferences}
          onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
        />
      </label>
      <button type="submit">Get Recommendations</button>
    </form>
  );
};

export default GiftAssistantForm;
