"use client";

import { supabase } from "@/lib/supabase";
import { useRef, useState } from "react";


const SupabaseUploader = () => {
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [uploading, setUploading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        try {
            setUploading(true);

            // 1. Definir un nombre único para el archivo y evitar duplicados
            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = `subidas/${fileName}`;

            // 2. Subir el archivo al bucket "imagenes" de Supabase
            const { data, error } = await supabase.storage
                .from("imagenes")
                .upload(filePath, file);

            if (error) {
                throw error;
            }

            // 3. Obtener la URL pública del archivo subido
            const { data: publicUrlData } = supabase.storage
                .from("imagenes")
                .getPublicUrl(filePath);

            setImageUrl(publicUrlData.publicUrl);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            alert("Hubo un error al subir el archivo.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Subir a Supabase</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
            />

            <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition font-medium"
            >
                {uploading ? "Subiendo..." : "Subir Imagen"}
            </button>

            {imageUrl && (
                <div className="mt-4 border-t pt-4">
                    <p className="text-sm text-emerald-600 font-medium">¡Subida con éxito!</p>
                    <img src={imageUrl} alt="Subida con éxito" className="mt-2 w-full h-auto rounded-lg shadow" />
                    <div className="mt-2">
                        <span className="text-xs text-gray-500 font-semibold block mb-1">Enlace de la imagen:</span>
                        <input
                            readOnly
                            value={imageUrl}
                            onClick={(e) => (e.target as HTMLInputElement).select()}
                            className="p-2 w-full text-xs bg-gray-100 rounded border cursor-pointer focus:outline-none"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SupabaseUploader;