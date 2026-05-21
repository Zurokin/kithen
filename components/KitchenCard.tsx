// components/KitchenCard.tsx
import Link from "next/link";
import { Kitchen } from "@/types";

export default function KitchenCard({ kitchen }: { kitchen: Kitchen }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden">
        <img
          src={kitchen.imageUrl}
          alt={kitchen.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-amber-600 text-white px-4 py-1 font-semibold">
          {kitchen.style}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{kitchen.name}</h3>

        <div className="flex justify-between items-center mb-3">
          <span className="text-amber-700 font-bold text-lg">
            {kitchen.price.toLocaleString("ru-RU")} руб.
          </span>
          <span className="text-sm text-gray-500">{kitchen.size}</span>
        </div>

        <p className="text-gray-600 mb-4">{kitchen.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-1">Особенности:</h4>
          <ul className="space-y-1">
            {kitchen.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/request?kitchen=${kitchen.id}`}
          className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-3 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg"
        >
          Заказать консультацию
        </Link>
      </div>
    </div>
  );
}
