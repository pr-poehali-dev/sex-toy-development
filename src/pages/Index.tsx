import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');

  const products = [
    {
      id: 1,
      name: 'Нежное прикосновение',
      category: 'Для начинающих',
      price: '2 990 ₽',
      image: 'https://cdn.poehali.dev/projects/3771af67-5467-4ea9-b970-bfccb7009a24/files/5391d44f-911a-41cd-ab2d-f4a7a5e646af.jpg'
    },
    {
      id: 2,
      name: 'Розовая мечта',
      category: 'Премиум',
      price: '4 990 ₽',
      image: 'https://cdn.poehali.dev/projects/3771af67-5467-4ea9-b970-bfccb7009a24/files/dc3a2e6f-4a14-40a9-a0a0-46a68758aee6.jpg'
    },
    {
      id: 3,
      name: 'Лавандовое блаженство',
      category: 'Новинка',
      price: '3 490 ₽',
      image: 'https://cdn.poehali.dev/projects/3771af67-5467-4ea9-b970-bfccb7009a24/files/cc752587-fdf7-412a-ac01-19a83f2a7b0e.jpg'
    }
  ];

  const guides = [
    {
      title: 'Первые шаги: руководство для начинающих',
      description: 'Всё, что нужно знать о выборе первого продукта и безопасности использования',
      icon: 'BookOpen'
    },
    {
      title: 'Гид по материалам',
      description: 'Подробная информация о материалах и их преимуществах',
      icon: 'Sparkles'
    },
    {
      title: 'Уход и хранение',
      description: 'Как правильно ухаживать за продуктами для максимального срока службы',
      icon: 'Heart'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/20">
      <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Intimate Care</h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'catalog' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => setActiveSection('guides')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'guides' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
                }`}
              >
                Гайды
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'catalog' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Ваше личное пространство заботы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя мир деликатных удовольствий в атмосфере полной конфиденциальности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <Card className="bg-secondary/50 border-none hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="ShieldCheck" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">100% анонимность</h3>
                  <p className="text-sm text-muted-foreground">Нейтральная упаковка без логотипов</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-none hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Lock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Защита данных</h3>
                  <p className="text-sm text-muted-foreground">Шифрование всех персональных данных</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/50 border-none hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Truck" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Быстрая доставка</h3>
                  <p className="text-sm text-muted-foreground">Доставка в течение 1-2 дней</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-white/60 backdrop-blur">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="beginners">Для начинающих</TabsTrigger>
              <TabsTrigger value="premium">Премиум</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white animate-scale-in"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-secondary/30 to-accent/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">О нас</h2>
            <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6 text-foreground/80">
                  <p className="text-lg leading-relaxed">
                    Мы создали пространство, где каждый может чувствовать себя комфортно, исследуя мир
                    интимного ухода. Наша миссия — сделать заботу о себе простой, приятной и абсолютно
                    конфиденциальной.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Все наши товары тщательно отобраны с учётом качества, безопасности и комфорта.
                    Мы работаем только с проверенными производителями, которые используют безопасные
                    материалы и современные технологии.
                  </p>
                  <div className="bg-secondary/30 p-6 rounded-2xl mt-8">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Icon name="Heart" className="text-primary" />
                      Наши ценности
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Абсолютная конфиденциальность на всех этапах покупки</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Качественные продукты от проверенных брендов</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Деликатная поддержка и консультации</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>Безопасность данных и платежей</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'guides' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Гайды и статьи</h2>
            <p className="text-center text-muted-foreground mb-12">
              Полезная информация для комфортного выбора
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card
                  key={index}
                  className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon name={guide.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                    <Button variant="ghost" className="mt-4 p-0 text-primary hover:text-primary/80">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'contacts' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Контакты</h2>
            <Card className="bg-white/80 backdrop-blur border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@intimatecare.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Онлайн-чат</h3>
                      <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Без выходных, круглосуточный прием заказов</p>
                    </div>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-2xl mt-8">
                    <p className="text-sm text-foreground/70 flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span>
                        Все обращения обрабатываются конфиденциально. Мы никогда не разглашаем
                        информацию о наших клиентах третьим лицам.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <footer className="bg-white/60 backdrop-blur border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Intimate Care. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
