"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

const SupabaseUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        unidad_paquete: 0,
        precio: 0,
    });

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
            const { error } = await supabase.storage
                .from("imagenes")
                .upload(filePath, file);

            if (error) {
                throw error;
            }

            const { data: publicUrlData } = supabase.storage
                .from("imagenes")
                .getPublicUrl(filePath);

            // 3. Subir datos a la tabla productos de Supabase desde input
            const { data, error: insertError } = await supabase
                .from("productos")
                .insert([
                    {
                        nombre: formData.nombre,
                        descripcion: formData.descripcion,
                        unidad_paquete: formData.unidad_paquete,
                        precio: formData.precio,
                        imagen_url: publicUrlData.publicUrl
                    }
                ]);

            if (insertError) {
                throw insertError;
            } else {
                console.log("Datos insertados en la tabla productos:", data);
            }

        } catch (error) {
            console.error("Error al subir la imagen:", error);
            alert("Hubo un error al subir el archivo.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
            <input
                type="text"
                placeholder="Nombre del producto"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
                type="text"
                placeholder="Descripción del producto"
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
                type="number"
                placeholder="Unidades por paquete"
                value={formData.unidad_paquete}
                onChange={(e) => setFormData({ ...formData, unidad_paquete: parseInt(e.target.value) })}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
                type="number"
                placeholder="Precio"
                value={formData.precio}
                onChange={(e) => setFormData({ ...formData, precio: parseFloat(e.target.value) })}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
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
        </div>
    );
}

export default SupabaseUploader;