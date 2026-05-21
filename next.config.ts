/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // ← отключает оптимизацию изображений
  },
  // Если деплоишь на GitHub Pages с подпапкой:
  // basePath: "/kithen",  // ← название твоего репозитория
};

module.exports = nextConfig;
