import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-eco-green to-eco-forest rounded-lg flex items-center justify-center">
                <Icon name="TreePine" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">
                TaigaTrack
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Интерактивная образовательная платформа для изучения экологии и
              природы
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Платформа</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Интерактивная карта
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  AR/VR-экскурсии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Эко-университет
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Сообщество
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Связь</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-eco-green transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-eco-green transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-eco-green transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 TaigaTrack. Все права защищены. Сделано с 💚 для
            природы.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
