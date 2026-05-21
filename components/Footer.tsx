import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Marti Мебель</h3>
            <p className="opacity-80 mb-4">
              Производство корпусной мебели на заказ в Воронеже с гарантией 10
              лет
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <address className="not-italic opacity-80 space-y-3">
              <p>
                <a
                  href="tel:+79304024548"
                  className="hover:text-amber-300 flex items-start"
                >
                  <PhoneIcon className="h-5 w-5 mr-2 mt-0.5" />
                  <span>+7 (930) 402-45-48</span>
                </a>
              </p>
              <p>
                <a
                  href="https://vk.me/marti_mebel"
                  target="_blank"
                  className="hover:text-amber-300 flex items-start"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 mt-0.5" />
                  <span>vk.me/marti_mebel</span>
                </a>
              </p>
              <p className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>ЖМ Ясенки, д.1, 2 этаж, офис 3, Воронеж</span>
              </p>
              <p className="flex items-start">
                <ClockIcon className="h-5 w-5 mr-2 mt-0.5" />
                <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
