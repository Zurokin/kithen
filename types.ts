// types.ts
export interface Kitchen {
  id: string;
  name: string;
  description: string;
  price: number;
  style: "Классика" | "Модерн" | "Минимализм" | "Лофт" | "Прованс";
  material: string;
  size: string;
  imageUrl: string;
  features: string[];
}
