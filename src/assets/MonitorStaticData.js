export const fieldDetailsData = [
  {
    id: " 1",
    fieldName: " west zone",
    disease: {
      name: "Fungal Infection",
      confidence: 85,
      image: `${import.meta.env.BASE_URL}Picture2.jpg`,
    },
    rippeness: {
      name: "Not Ripe Yet",
      confidence: 90,
      image: `${import.meta.env.BASE_URL}Picture1.jpg`,
    },
    sensorReadings: {
      soilMoisture: "42%",
      temperature: "30°C",
      humidity: "70%",
    },
  },
  {
    id: " 2",
    fieldName: "south zone",
    disease: {
      name: "Fungal Infection",
      confidence: 80,
      image: `${import.meta.env.BASE_URL}Picture2.jpg`,
    },
    rippeness: {
      name: "Not Ripe Yet",
      confidence: 92,
      image: `${import.meta.env.BASE_URL}Picture1.jpg`,
    },
    sensorReadings: {
      soilMoisture: "42%",
      temperature: "30°C",
      humidity: "70%",
    },
  },
  {
    id: " 3",
    fieldName: " east zone",
    disease: {
      name: "Fungal Infection",
      confidence: 83,
      image: `${import.meta.env.BASE_URL}Picture2.jpg`,
    },
    rippeness: {
      name: "Not Ripe Yet",
      confidence: 82,
      image: `${import.meta.env.BASE_URL}Picture1.jpg`,
    },
    sensorReadings: {
      soilMoisture: "42%",
      temperature: "30°C",
      humidity: "70%",
    },
  },
  {
    id: " 4",
    fieldName: " zone",
    disease: {
      name: "Fungal Infection",
      confidence: 85,
      image: `${import.meta.env.BASE_URL}Picture2.jpg`,
    },
    rippeness: {
      name: "Not Ripe Yet",
      confidence: 90,
      image: `${import.meta.env.BASE_URL}Picture1.jpg`,
    },
    sensorReadings: {
      soilMoisture: "42%",
      temperature: "30°C",
      humidity: "70%",
    },
  },
];

// sensorData.js
export const sensorHealthData = [
  {
    name: "Soil Sensor A",
    status: "Online",
    battery: 67,
    batteryColor: "text-yellow-600",
    lastSync: "10 min ago",
  },
  {
    name: "Humidity Sensor B",
    status: "Online",
    battery: 90,
    batteryColor: "text-green-600",
    lastSync: "8 min ago",
  },
  {
    name: "Temperature Sensor C",
    status: "Online",
    battery: 75,
    batteryColor: "text-orange-600",
    lastSync: "5 min ago",
  },
];
