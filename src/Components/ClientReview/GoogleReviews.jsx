import React, { useState, useEffect } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // 1. Vite Environment variables ko import karna
        const apiKey = import.meta.env.VITE_PLACE_API_Key;
        const placeId = import.meta.env.VITE_Place_ID;

        // 2. URL ko dynamically banana (Backticks ` ` ka use karke)
        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

        console.log("Mera API URL yeh hai:", apiUrl); // Checking ke liye

        // 3. API Call karna
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (err) {
        console.error("API call fail ho gayi:", err);
        setError(err.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Google Reviews</h2>
      
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {reviews.map((review, index) => (
        <div key={index} className="border-b py-4">
          <h4 className="font-semibold">{review.author_name}</h4>
          <p className="text-yellow-500">Rating: {review.rating} ⭐</p>
          <p className="text-gray-700 mt-2">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;