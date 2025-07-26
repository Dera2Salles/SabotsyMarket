import React, { useState } from "react";
import { FaImage } from "react-icons/fa"; // Import de l'icône image

export const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="p-4">
      <label
        htmlFor="image-upload"
        className="cursor-pointer flex items-center border p-2 rounded bg-gray-100"
      >
        <FaImage className="mr-2 text-lg text-green-700" /> {/* Icône image */}
        {image ? "Choose another picture" : "Choose a picture"}{" "}
        {/* Placeholder */}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden" // Masquer le bouton natif
      />
      {image && (
        <div className="mt-4">
          <p className="mb-2 text-green-700">Choosen picture :</p>
          <img
            src={image}
            alt="preview"
            className="w-64 h-auto rounded shadow"
          />
        </div>
      )}
    </div>
  );
};
