import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MapPreview = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Интерактивная карта маршрутов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Исследуйте тысячи эко-маршрутов с фильтрацией по интересам и
            географическому положению
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6 hover-scale cursor-pointer border-eco-green/20 hover:border-eco-green/40 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-eco-green/10 rounded-lg flex items-center justify-center">
                    <Icon name="Filter" size={24} className="text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Умные фильтры
                    </h3>
                    <p className="text-sm text-gray-600">
                      По интересам и локации
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale cursor-pointer border-eco-green/20 hover:border-eco-green/40 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-eco-sky/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name="Navigation"
                      size={24}
                      className="text-eco-sky"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      GPS-навигация
                    </h3>
                    <p className="text-sm text-gray-600">Точные маршруты</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale cursor-pointer border-eco-green/20 hover:border-eco-green/40 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Рейтинги</h3>
                    <p className="text-sm text-gray-600">Отзывы сообщества</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-eco-light to-eco-green/5 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 to-eco-sky/10"></div>
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <Icon name="MapPin" size={32} className="text-eco-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Карта маршрутов
                </h3>
                <p className="text-gray-600">
                  Интерактивная карта появится здесь
                </p>
                <Button className="bg-eco-green hover:bg-eco-forest">
                  Открыть полную карту
                </Button>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-eco-green rounded-full opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-eco-sky rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-orange-400 rounded-full opacity-50"></div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover-scale cursor-pointer border-eco-green/20 hover:border-eco-green/40 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="Camera" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AR-метки</h3>
                    <p className="text-sm text-gray-600">
                      Дополненная реальность
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale cursor-pointer border-eco-green/20 hover:border-eco-green/40 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Групповые походы
                    </h3>
                    <p className="text-sm text-gray-600">Вместе веселее</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-scale cursor-pointer border-eco-green/20 hover:border-eco-green/40 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Достижения</h3>
                    <p className="text-sm text-gray-600">Собирай награды</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;
