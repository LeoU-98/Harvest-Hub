import propTypes from "prop-types";

// SensorCard.jsx
export default function SensorCard({ image, label, value, status }) {
  const statusColor =
    {
      Normal: "bg-green-100 text-green-800",
      High: "bg-yellow-100 text-yellow-800",
      Low: "bg-red-100 text-red-800",
    }[status] || "bg-gray-100 text-gray-800";

  console.log(typeof image);
  return (
    <div className="flex gap-10 rounded-2xl border bg-white p-4 shadow-sm">
      <div>
        <img src={image} alt={label} className="size-32" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-700">{label}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <span
          className={`mt-2 inline-block rounded-full px-3 py-1 text-sm ${statusColor}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

SensorCard.propTypes = {
  image: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  status: propTypes.string,
};
