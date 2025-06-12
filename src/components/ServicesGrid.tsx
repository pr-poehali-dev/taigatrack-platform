import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  const services = [
    {
      title: "Личный кабинет",
      description:
        "Отслеживайте свой прогресс, баллы и награды за активность на платформе",
      iconName: "User",
      gradient: "bg-gradient-to-r from-eco-green to-eco-forest",
      features: [
        "Персональная статистика",
        "Система достижений",
        "История активности",
        "Настройки профиля",
      ],
    },
    {
      title: "AR/VR-экскурсии",
      description:
        "Виртуальные путешествия с озвучкой и интерактивными заданиями",
      iconName: "Glasses",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-700",
      features: [
        "Иммерсивные путешествия",
        "Голосовые гиды",
        "Интерактивные задания",
        "3D-модели природы",
      ],
    },
    {
      title: "Эко-университет",
      description: "Образовательные курсы, задания и онлайн-тесты по экологии",
      iconName: "GraduationCap",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
      features: [
        "Структурированные курсы",
        "Практические задания",
        "Онлайн-тестирование",
        "Сертификаты",
      ],
    },
    {
      title: "Чаты и общение",
      description:
        "Знакомьтесь и общайтесь с единомышленниками в эко-сообществе",
      iconName: "MessageCircle",
      gradient: "bg-gradient-to-r from-eco-sky to-blue-600",
      features: [
        "Тематические чаты",
        "Поиск друзей",
        "Групповые обсуждения",
        "Обмен опытом",
      ],
    },
    {
      title: "Челленджи и миссии",
      description: "Выполняйте увлекательные задания и получайте поощрения",
      iconName: "Target",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      features: [
        "Еженедельные вызовы",
        "Экологические миссии",
        "Система наград",
        "Командные задания",
      ],
    },
    {
      title: "Гид по эко-инициативам",
      description:
        "Находите и участвуйте в экологических проектах в вашем регионе",
      iconName: "Leaf",
      gradient: "bg-gradient-to-r from-green-400 to-eco-green",
      features: [
        "Фильтрация по регионам",
        "Календарь событий",
        "Возможность участия",
        "Создание инициатив",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Сервисы платформы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный набор инструментов для экологического образования и развития
            сообщества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
