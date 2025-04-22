
import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 22,
    condition: "Partly Cloudy",
    location: "New York",
    humidity: 65,
    windSpeed: 12,
    feelsLike: 24
  });

  const handleSearch = (city: string) => {
    // In a real app, this would make an API call to get weather data
    console.log("Searching for:", city);
    // For now, we'll just update the location
    setWeatherData(prev => ({
      ...prev,
      location: city
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-purple-500/20">
      <div className="w-full max-w-md space-y-6">
        <SearchBar onSearch={handleSearch} />
        <WeatherCard {...weatherData} />
      </div>
    </div>
  );
};

export default Index;
