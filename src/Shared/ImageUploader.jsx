import { useState, useRef } from "react";
import { BsTrash } from "react-icons/bs";

export function ImageUploader({ onImagesChange }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const validateImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width === 1000 && img.height === 1000) {
          resolve({ file, preview: url, name: file.name });
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = url;
    });
  };

  const handleFiles = async (fileList) => {
    const fileArray = Array.from(fileList);

    if (images.length + fileArray.length > 5) {
      setError("You can upload up to 5 unique images.");
      return;
    }

    const existingNames = new Set(images.map((img) => img.name));
    const uniqueFiles = fileArray.filter(
      (file) => !existingNames.has(file.name),
    );

    if (uniqueFiles.length < fileArray.length) {
      setError("Duplicate image names are not allowed.");
      return;
    }

    const validated = await Promise.all(uniqueFiles.map(validateImage));
    const validImages = validated.filter(Boolean);

    if (validImages.length < uniqueFiles.length) {
      setError("All images must be exactly 1000x1000 pixels.");
      return;
    }

    const updated = [...images, ...validImages];
    setImages(updated);
    onImagesChange(updated.map((img) => img.file));
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleRemove = (index, e) => {
    e.stopPropagation(); // prevent opening file dialog
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
    onImagesChange(updated.map((img) => img.file));
  };

  return (
    <div
      className="relative flex size-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center transition-all hover:border-blue-500"
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {images.length === 0 ? (
        <div>
          <p className="mb-1 text-lg text-gray-800">Drag & Drop Images Here</p>
          <p className="text-sm text-green-500">or click to select (max 5)</p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-3 gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-md border shadow"
            >
              <img
                src={img.preview}
                className="h-full w-full object-cover"
                alt={`preview-${index}`}
              />
              <button
                type="button"
                onClick={(e) => handleRemove(index, e)}
                className="group absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <BsTrash className="size-20 text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          ))}
        </div>
      )}

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
        ref={inputRef}
      />

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
