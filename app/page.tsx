// app/page.tsx

import ProductCard from "@/components/ProductCard";
import {
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-700 to-amber-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Левая часть - текст */}
            <div className="flex-1 max-w-3xl">
              <div className="bg-amber-600 inline-block px-4 py-1 rounded-full mb-4">
                <span className="font-bold">
                  🎁 Дизайн-проект и выезд замерщика в подарок!
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Кухни и мебель на заказ в Воронеже
              </h1>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Мечтаете о новой кухне? Более 5000 успешно выполненных заказов!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#features"
                  className="bg-white text-amber-800 font-bold px-8 py-4 rounded-lg text-center hover:bg-amber-100 transition-colors"
                >
                  Наши преимущества
                </a>
                <a
                  href="https://vk.me/marti_mebel?text=Здравствуйте!%20Я%20пришёл%20с%20вашего%20сайта.%20Хочу%20заказать%20кухню."
                  target="_blank"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-center hover:bg-white/10 transition-colors"
                >
                  Написать в VK
                </a>
              </div>

              <div className="bg-white/20 p-4 rounded-lg max-w-md backdrop-blur-sm">
                <p className="font-bold mb-2">Акции:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>
                      Каменная мойка в подарок при заказе кухни от 150 000 руб.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-300 mr-2">•</span>
                    <span>
                      Вытяжка в подарок при заказе кухни от 180 000 руб.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Правая часть - фото */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/logo.jpg"
                    alt="Красивая кухня"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "500px" }}
                  />
                  {/* Декоративная рамка */}
                  <div className="absolute inset-0 ounded-2xl pointer-events-none"></div>
                </div>
                {/* Декоративный элемент */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
            Почему выбирают Marti Мебель
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Любые размеры и дизайн",
                desc: "Нестандартные варианты и планировка - наше преимущество",
              },
              {
                title: "Цены ниже конкурентов",
                desc: "Самые низкие цены в Воронеже при высоком качестве",
              },
              {
                title: "Рассрочка без %",
                desc: "Возможна рассрочка без процентов и участия банка",
              },
              {
                title: "Точные сроки",
                desc: "Изготавливаем мебель точно в оговоренные сроки",
              },
              {
                title: "Качественные материалы",
                desc: "Используем материалы и фурнитуру ведущих производителей",
              },
              {
                title: "Большой выбор",
                desc: "Огромный выбор цветов, материалов и конфигураций",
              },
              {
                title: "Бесплатные услуги",
                desc: "Дизайн-проект, замер и доставка - бесплатно!",
              },
              {
                title: "Гарантия 10 лет",
                desc: "Даем расширенную гарантию на всю нашу продукцию",
              },
              {
                title: "Опыт работы",
                desc: "Более 5000 успешно выполненных заказов",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="bg-amber-100 text-amber-700 rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Что мы производим
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Корпусная мебель под индивидуальные запросы и параметры наших
              клиентов
            </p>
          </div>

          {/* Карточки на всю ширину, вертикально */}
          <div className="flex flex-col gap-8">
            <ProductCard
              title="Кухни"
              desc="Функциональные и стильные кухни под любой бюджет"
              features={[
                "Каменные столешницы",
                "Встроенная техника",
                "Эргономичное хранение",
              ]}
              images={[
                "https://i.ibb.co/tww0vKyf/kitchen-1.png",
                "https://i.ibb.co/S42rjZ66/kitchen-2.png",
                "https://i.ibb.co/JjfzFg6P/kitchen-3.png",
                "https://i.ibb.co/XfKCHwkV/kitchen-4.png",
              ]}
              vkText="Здравствуйте! Пришёл с сайта. Интересует кухня. Нужен замер и дизайн-проект."
            />
            <ProductCard
              title="Гардеробные системы"
              desc="Индивидуальные решения для идеального хранения"
              features={[
                "Системы с выдвижными элементами",
                "Зеркальные двери",
                "Освещение",
              ]}
              images={[
                "https://i.ibb.co/sJPR78TX/wardrobe-1.png",
                "https://i.ibb.co/9zPpMV8/wardrobe-2.png",
                "https://i.ibb.co/whw7yP0d/wardrobe-3.jpg",
                "https://i.ibb.co/MxYLtzVN/wardrobe-4.jpg",
                "https://i.ibb.co/7dVDKLW6/snapedit-1779354207918.jpg",
              ]}
              vkText="Здравствуйте! С вашего сайта. Нужна гардеробная система под заказ."
            />
            <ProductCard
              title="Мебель для всей семьи"
              desc="От детских комнат до офисных решений"
              features={[
                "Гостиные",
                "Детские",
                "Офисная мебель",
                "Мебель для ванной",
              ]}
              images={[
                "https://i.ibb.co/cc73nyL7/b2c38412189ca52fbb1fc29429c2d985.jpg",
                "https://i.ibb.co/j9cF2dQy/a11fa57833cfe3e71ff4e72952206818.jpg",
                "https://i.ibb.co/0V2kHqV0/photo-2026-05-21-11-04-00.jpg",
                "https://i.ibb.co/YBxk1t0f/a94d5ffdd9fdd888d65a12d306676b9a.jpg",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Consultation Section
      <section className="py-16 bg-gradient-to-br from-amber-700 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Закажите бесплатный замер и дизайн-проект!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наш специалист приедет к вам в удобное время, сделает точные
              замеры и создаст 3D-визуализацию вашей будущей мебели
            </p>

            <div className="bg-white rounded-lg p-6 text-gray-800 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <textarea
                placeholder="Что вас интересует? (кухня, гардеробная и т.д.)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 mb-4"
                rows={3}
              ></textarea>

              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold px-4 py-3 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all">
                Заказать замер
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 mr-2 text-amber-300" />
                <a
                  href="tel:+79304024548"
                  className="text-xl font-bold hover:text-amber-300"
                >
                  +7 (930) 402-45-48
                </a>
              </div>

              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-2 text-amber-300" />
                <span>ЖМ Ясенки, д.1, 2 этаж, офис 3</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
