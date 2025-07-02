// AlertsNotifications.jsx
import { useState } from "react";
import { Chip, Select, Option } from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  BellAlertIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const alertsData = [
  {
    id: 1,
    type: "Sensor",
    field: "West Zone",
    message: "Soil moisture dropped below 30%",
    severity: "warning",
    time: "10 mins ago",
  },
  {
    id: 2,
    type: "AI Detection",
    field: "North Field",
    message: "Disease detected: Powdery Mildew",
    severity: "danger",
    time: "30 mins ago",
  },
  {
    id: 3,
    type: "Sensor",
    field: "South Block",
    message: "Temperature exceeded 35°C",
    severity: "warning",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "AI Detection",
    field: "East Side",
    message: "Crop ripeness reached 95%",
    severity: "info",
    time: "2 hours ago",
  },
];

const severityStyles = {
  danger: "bg-red-50 text-red-700 border-red-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  info: "bg-blue-50 text-blue-800 border-blue-200",
};

const severityIcons = {
  danger: <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />,
  warning: <BellAlertIcon className="h-6 w-6 text-yellow-500" />,
  info: <ExclamationCircleIcon className="h-6 w-6 text-blue-500" />,
};

export default function AlertsNotifications() {
  const [filterField, setFilterField] = useState("All");
  const [filterType, setFilterType] = useState("All");

  const fields = [
    "All",
    "West Zone",
    "North Field",
    "South Block",
    "East Side",
  ];
  const types = ["All", "Sensor", "AI Detection"];

  const filteredAlerts = alertsData.filter((a) => {
    const fieldMatch = filterField === "All" || a.field === filterField;
    const typeMatch = filterType === "All" || a.type === filterType;
    return fieldMatch && typeMatch;
  });

  return (
    <div className="space-y-6 rounded-2xl p-6">
      <div className="rounded-2xl bg-white p-8">
        <h2 className="mb-6 text-2xl font-bold text-green-500">
          Alerts & Notifications
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Select
            label="Filter by Field"
            value={filterField}
            onChange={(val) => setFilterField(val)}
          >
            {fields.map((f) => (
              <Option key={f} value={f}>
                {f}
              </Option>
            ))}
          </Select>
          <Select
            label="Filter by Type"
            value={filterType}
            onChange={(val) => setFilterType(val)}
          >
            {types.map((t) => (
              <Option key={t} value={t}>
                {t}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="notification-scroll relative h-[420px] space-y-4 overflow-x-hidden rounded-l-2xl bg-white p-4">
        {filteredAlerts.length >= 1 ? (
          filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex w-[98%] items-start gap-4 rounded-xl border-l-4 p-4 ${
                severityStyles[alert.severity] ||
                "border-gray-200 bg-gray-50 text-gray-700"
              }`}
            >
              <div>{severityIcons[alert.severity]}</div>
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="font-semibold">{alert.message}</h4>
                  <Chip
                    size="sm"
                    value={alert.field}
                    className="bg-green-100 text-green-700"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Type: {alert.type} · {alert.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-600">
            0 Notifications & alerts right now
          </p>
        )}
      </div>
    </div>
  );
}
