
import { Cloud, Wind, Droplets } from "lucide-react";
import { Card } from "./ui/card";

interface WeatherCardProps {
  temperature: number;
  condition: string;
  location: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

export function WeatherCard({ temperature, condition, location, humidity, windSpeed, feelsLike }: WeatherCardProps) {
  return (
    <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 p-6 rounded-2xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-white mb-1">{location}</h2>
        <div className="flex items-center justify-center gap-2">
          <Cloud className="w-8 h-8 text-white" />
          <p className="text-5xl font-bold text-white">{temperature}°</p>
        </div>
        <p className="text-white/80 mt-1">{condition}</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-white/80">
        <div className="flex flex-col items-center">
          <Droplets className="w-5 h-5 mb-1" />
          <p className="text-sm">Humidity</p>
          <p className="font-semibold">{humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="w-5 h-5 mb-1" />
          <p className="text-sm">Wind</p>
          <p className="font-semibold">{windSpeed} km/h</p>
        </div>
        <div className="flex flex-col items-center">
          <Cloud className="w-5 h-5 mb-1" />
          <p className="text-sm">Feels Like</p>
          <p className="font-semibold">{feelsLike}°</p>
        </div>
      </div>
    </Card>
  );
}
