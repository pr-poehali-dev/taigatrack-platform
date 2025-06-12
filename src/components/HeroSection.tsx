import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-eco-light via-white to-eco-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                Исследуй мир с
                <span className="text-eco-green"> TaigaTrack</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Интерактивная образовательная платформа для изучения экологии
                через AR/VR-путешествия, интерактивные карты и живое сообщество
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-eco-green hover:bg-eco-forest text-lg px-8 py-6"
              >
                <Icon name="Play" size={20} />
                Начать исследование
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-eco-green text-eco-forest hover:bg-eco-light text-lg px-8 py-6"
              >
                <Icon name="Map" size={20} />
                Посмотреть карту
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-forest">1000+</div>
                <div className="text-sm text-gray-600">Маршрутов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-forest">50+</div>
                <div className="text-sm text-gray-600">VR-экскурсий</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-forest">5000+</div>
                <div className="text-sm text-gray-600">Участников</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-eco-green/20 via-eco-sky/10 to-eco-green/30 rounded-2xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 to-eco-sky/10"></div>
              <div className="relative z-10 text-center space-y-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <Icon name="Compass" size={40} className="text-eco-green" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Путь пользователя
                </h3>
                <p className="text-gray-600 max-w-md">
                  От знакомства с платформой до активного участия в
                  эко-сообществе
                </p>
              </div>

              {/* Декоративные элементы пути */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-eco-green rounded-full opacity-60"></div>
              <div className="absolute bottom-12 right-12 w-3 h-3 bg-eco-sky rounded-full opacity-80"></div>
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-orange-400 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 to-eco-sky/20 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
