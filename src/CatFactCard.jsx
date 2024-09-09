import React, { useState, useEffect } from "react";
import axios from "axios";

const CatFactCard = () => {
  const [catFact, setCatFact] = useState(null);
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        // Fetch cat fact
        const factResponse = await axios.get("https://meowfacts.herokuapp.com/");
        setCatFact(factResponse.data.data[0]);

        // Fetch cat image
        const imageResponse = await axios.get("https://api.thecatapi.com/v1/images/search");
        setCatImage(imageResponse.data[0].url);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchCatData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center">
        {catImage && (
          <img
            src={catImage}
            alt="Cat"
            className="w-64 h-64 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
          />
        )}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Cat Fact of the Day</h1>
          {catFact ? (
            <>
              <p className="text-lg italic text-gray-700 mb-4">"{catFact}"</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500 focus:outline-none"
              >
                Get Another Cat Fact
              </button>
            </>
          ) : (
            <p className="text-lg text-gray-500">Loading cat fact...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatFactCard;
