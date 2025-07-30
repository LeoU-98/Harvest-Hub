import { useState } from "react";
import ImageAnalysisResult from "./components/ImageAnalysisResult";
import SensorCard from "./components/SensorCard";
import { Select, Option } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FieldDetails() {
  const [selectedField, setSelectedField] = useState("West Zone");

  const fields = ["West Zone", "North Field", "East Side", "South Block"];

  return (
    <div className="p-8">
      <div className="mb-6 w-72">
        <Select
          label="Select Field"
          value={selectedField}
          onChange={(val) => setSelectedField(val)}
          menuProps={{ className: "z-[999]" }} // make sure it's above other content
          className="border-none bg-white text-xl font-bold text-green-500"
          labelProps={{
            className: "hidden",
          }}
          icon={<ChevronDownIcon className="h-5 w-5 text-green-500" />}
        >
          {fields.map((field) => (
            <Option
              key={field}
              value={field}
              className="text-green-600 transition-colors hover:bg-green-100 hover:text-green-800"
            >
              {field}
            </Option>
          ))}
        </Select>
      </div>

      <div className="flex flex-col gap-5">
        {/* Sensor Readings */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Sensor Readings
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
            <SensorCard
              image={`${import.meta.env.BASE_URL}monitors/sensors/moistureSensor.png`}
              label="Soil Moisture"
              value="42%"
              status="Normal"
            />
            <SensorCard
              image={`${import.meta.env.BASE_URL}monitors/sensors/tempertureSensor.png`}
              label="Temperature"
              value="30°C"
              status="Normal"
            />
            <SensorCard
              image={`${import.meta.env.BASE_URL}monitors/sensors/humditySensor.png`}
              label="Humidity"
              value="70%"
              status="High"
            />
          </div>
        </div>

        {/* AI Analysis */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Recent AI Analysis
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
            <ImageAnalysisResult
              imageUrl={`${import.meta.env.BASE_URL}monitors/AIresults/Picture2.jpg`}
              result="Disease: Early Blight"
              confidence={85}
            />
            <ImageAnalysisResult
              imageUrl={`${import.meta.env.BASE_URL}monitors/AIresults/Picture1.jpg`}
              result="Not Ripe Yet"
              confidence={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
