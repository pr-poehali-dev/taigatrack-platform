import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  gradient: string;
  features: string[];
}

const ServiceCard = ({
  title,
  description,
  iconName,
  gradient,
  features,
}: ServiceCardProps) => {
  return (
    <Card className="hover-scale cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`h-2 ${gradient}`}></div>

      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-3">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${gradient.replace("bg-gradient-to-r", "bg-gradient-to-br")} shadow-sm`}
          >
            <Icon name={iconName as any} size={24} className="text-white" />
          </div>
          <CardTitle className="text-xl font-heading font-semibold text-gray-900 group-hover:text-eco-forest transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-700"
            >
              <div className="w-1.5 h-1.5 bg-eco-green rounded-full flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          className="w-full border-eco-green/30 text-eco-forest hover:bg-eco-light hover:border-eco-green transition-colors"
        >
          Подробнее
          <Icon name="ArrowRight" size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
