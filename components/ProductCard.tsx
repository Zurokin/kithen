// components/ProductCard.tsx
"use client";

import { useState, useEffect } from "react";

interface ProductCardProps {
  title: string;
  desc: string;
  features: string[];
  images: string[];
  vkText?: string;
}

export default function ProductCard({
  title,
  desc,
  features,
  images,
}: ProductCardProps) {
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const next = () => {
    const newIndex = index + 1 >= images.length ? 0 : index + 1;
    setIndex(newIndex);
  };

  const prev = () => {
    const newIndex = index - 1 < 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const openFullscreen = () => {
    setFullscreenIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  };

  const fullscreenNext = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };

  const fullscreenPrev = () => {
    setFullscreenIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Обработка клавиш клавиатуры
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        fullscreenPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        fullscreenNext();
      } else if (e.key === "Escape") {
        closeFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, fullscreenIndex]);

  return (
    <>
      {/* Карточка */}
      <div
        className="relative rounded-xl overflow-hidden shadow-lg w-full"
        style={{ height: "600px" }}
      >
        <button
          onClick={openFullscreen}
          className="w-full h-full cursor-pointer"
          style={{ padding: 0, border: "none", background: "none" }}
        >
          <img
            src={images[index]}
            alt={title}
            className="w-full h-full object-cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </button>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        ></div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 text-2xl transition-all backdrop-blur-sm"
              style={{ cursor: "pointer", border: "none" }}
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 text-2xl transition-all backdrop-blur-sm"
              style={{ cursor: "pointer", border: "none" }}
            >
              →
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-28 left-0 right-0 z-50 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(idx);
                }}
                className={`transition-all cursor-pointer rounded-full ${
                  idx === index ? "w-8 bg-amber-400" : "w-2 bg-white/60"
                }`}
                style={{ height: "0.5rem", border: "none" }}
              />
            ))}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 text-white pointer-events-none">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="mb-3 text-white/90">{desc}</p>
          <ul className="mb-4 space-y-1">
            {features.map((f, i) => (
              <li key={i} className="text-white/90">
                • {f}
              </li>
            ))}
          </ul>
          <a
            href="https://vk.me/marti_mebel?text=Здравствуйте!%20Я%20пришёл%20с%20вашего%20сайта.%20Хочу%20заказать%20кухню."
            target="_blank"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mt-2 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            Заказать
          </a>
        </div>
      </div>

      {/* Полноэкранное модальное окно */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={closeFullscreen}
        >
          <img
            src={images[fullscreenIndex]}
            alt={title}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            style={{ display: "block", margin: "0 auto" }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400 transition-colors"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 101,
            }}
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fullscreenPrev();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-amber-400 transition-colors bg-black/50 rounded-full p-4"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 101,
                }}
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fullscreenNext();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-amber-400 transition-colors bg-black/50 rounded-full p-4"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 101,
                }}
              >
                →
              </button>

              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-[101]">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenIndex(idx);
                    }}
                    className={`transition-all rounded-full ${
                      idx === fullscreenIndex
                        ? "w-10 bg-amber-400"
                        : "w-2 bg-white/50"
                    }`}
                    style={{
                      height: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute bottom-8 right-8 text-white/70 text-sm z-[101]">
            {fullscreenIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
