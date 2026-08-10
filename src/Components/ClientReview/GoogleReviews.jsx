import React, { useState, useEffect } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("1. API Call Start ho gayi hai...");

        const apiKey = import.meta.env.VITE_PLACE_API_Key;
        const placeId = import.meta.env.VITE_Place_ID;

        
        console.log("2. API Key:", apiKey ? "Mil gayi" : "Nahi mili!");
        console.log("3. Place ID:", placeId ? "Mil gaya" : "Nahi mila!");

        const apiUrl = `/api-google/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

       
        const response = await fetch(apiUrl);
        console.log("5. Raw Response Object:", response);

     
        const data = await response.json();
        console.log("6. Final API Data (JSON):", data);

       
        if (data.result && data.result.reviews) {
          console.log("7. Reviews mil gaye! Total reviews:", data.result.reviews.length);
          setReviews(data.result.reviews);
        } else {
          console.warn("8. Data toh aaya, par usme 'reviews' nahi hain. Check Google API response.");
        }

      } catch (err) {
        console.error("❌ API Call mein ERROR aaya:", err.message);
        setError(err.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Google Reviews</h2>
      
      {error && <p className="text-red-500">Error: {error}</p>}
      {console.log(reviews)}
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