import { Database } from "./database.types";

export type Product = Database['public']['Tables']['productos']['Row'];
export type Category = Database['public']['Tables']['categorias']['Row'];
