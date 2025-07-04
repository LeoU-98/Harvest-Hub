import { useState } from "react";
import ImageAnalysisResult from "./Components/ImageAnalysisResult";
import SensorCard from "./Components/SensorCard";
import { Select, Option } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import moistureSensor from "../images/moistureSensor.png";
import humditySensor from "../images/humditySensor.png";
import tempertureSensor from "../images/tempertureSensor.png";

// import fieldDetailsData from "../utils/MonitorStaticData";

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
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <SensorCard
              image={moistureSensor}
              label="Soil Moisture"
              value="42%"
              status="Normal"
            />
            <SensorCard
              image={tempertureSensor}
              label="Temperature"
              value="30°C"
              status="Normal"
            />
            <SensorCard
              image={humditySensor}
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
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <ImageAnalysisResult
              imageUrl="/Picture2.jpg"
              result="Disease: Fungal Infection"
              confidence={85}
            />
            <ImageAnalysisResult
              imageUrl="/Picture1.jpg"
              result="Not Ripe Yet"
              confidence={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
