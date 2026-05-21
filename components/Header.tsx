"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Marti Мебель"
            className="h-14 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Десктопная версия */}
        <div className="hidden md:flex md:flex-col md:items-end">
          <a
            href="tel:+79304024548"
            className="font-bold text-lg hover:text-amber-600 flex items-center gap-1"
          >
            <PhoneIcon className="h-5 w-5" />
            +7 (930) 402-45-48
          </a>
          <span className="text-sm text-gray-600 flex items-center gap-1 mt-1">
            <MapPinIcon className="h-4 w-4" />
            ЖМ Ясенки, д.1, 2 этаж, офис 3
          </span>
        </div>

        {/* Мобильное меню */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {[
                ["Кухни", "/kitchens"],
                ["Гардеробные", "/wardrobes"],
                ["Гостиные", "/living-rooms"],
                ["Детские", "/children"],
                ["Офисная мебель", "/office"],
                ["О нас", "/about"],
                ["Контакты", "/contacts"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="py-2 font-medium hover:text-amber-600 inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:+79304024548"
                  className="py-2 font-medium hover:text-amber-600 flex items-center gap-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  +7 (930) 402-45-48
                </a>
              </li>
              <li>
                <a
                  href="https://vk.me/marti_mebel?text=Здравствуйте!%20Я%20пришёл%20с%20вашего%20сайта.%20Хочу%20заказать%20кухню."
                  target="_blank"
                  className="py-2 font-medium text-[#07f] flex items-center gap-2"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#07f]" />
                  Написать в VK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
