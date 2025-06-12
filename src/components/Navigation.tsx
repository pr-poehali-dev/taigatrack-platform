import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-eco-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-eco-green to-eco-forest rounded-lg flex items-center justify-center">
              <Icon name="TreePine" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-eco-forest">
              TaigaTrack
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#map"
              className="text-gray-700 hover:text-eco-green transition-colors"
            >
              Карта
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-eco-green transition-colors"
            >
              Сервисы
            </a>
            <a
              href="#university"
              className="text-gray-700 hover:text-eco-green transition-colors"
            >
              Эко-университет
            </a>
            <a
              href="#community"
              className="text-gray-700 hover:text-eco-green transition-colors"
            >
              Сообщество
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-eco-forest hover:text-eco-green"
            >
              Войти
            </Button>
            <Button className="bg-eco-green hover:bg-eco-forest">
              Начать путешествие
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
