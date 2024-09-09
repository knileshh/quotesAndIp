import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteCard = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://quotes.rest/qod?category=inspire");
        setQuote(response.data.contents.quotes[0]);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto text-center">
        {quote ? (
          <>
            <p className="text-lg italic text-gray-700 mb-4">"{quote.quote}"</p>
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">- {quote.author}</h2>
            <button
              onClick={() => window.location.reload()}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500 focus:outline-none"
            >
              Get Another Quote
            </button>
          </>
        ) : (
          <p className="text-lg text-gray-500">Loading quote...</p>
        )}
      </div>
    </div>
  );
};

export default QuoteCard;
