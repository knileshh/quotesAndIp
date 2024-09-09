import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NASA_APOD_API = 'https://api.nasa.gov/planetary/apod';
const API_KEY = "bCb1mwjdO1EBiUc0DicaN7PjiY0itKwagWUTEDSY";

const NasaPictureOfTheDay = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(`${NASA_APOD_API}?api_key=${API_KEY}`);
        setApodData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NASA's APOD data:", error);
      }
    };

    fetchApod();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">NASA Astronomy Picture of the Day</h1>
      {loading ? (
        <p className="text-xl text-gray-700">Loading...</p>
      ) : apodData ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
          <div className="p-5">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">{apodData.title}</h2>
            <p className="text-sm text-gray-500 mb-4"><strong>Date:</strong> {apodData.date}</p>
            {apodData.media_type === 'image' ? (
              <img
                src={apodData.url}
                alt={apodData.title}
                className="w-full h-auto rounded-lg mb-4"
              />
            ) : (
              <iframe
                title={apodData.title}
                src={apodData.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-96 rounded-lg mb-4"
              ></iframe>
            )}
            <p className="text-gray-700 text-justify">{apodData.explanation}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-xl">Failed to load data.</p>
      )}
    </div>
  );
};

export default NasaPictureOfTheDay;
