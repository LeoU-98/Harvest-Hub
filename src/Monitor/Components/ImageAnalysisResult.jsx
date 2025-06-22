// ImageAnalysisResult.jsx

import propTypes from "prop-types";

export default function ImageAnalysisResult({ imageUrl, result, confidence }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <img src={imageUrl} alt="Crop" className="h-48 w-full object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{result}</h4>
        <p className="text-sm text-gray-600">
          Confidence:{" "}
          <span className="font-medium text-blue-600">{confidence}%</span>
        </p>
      </div>
    </div>
  );
}

ImageAnalysisResult.propTypes = {
  imageUrl: propTypes.string,
  result: propTypes.string,
  confidence: propTypes.string,
};
