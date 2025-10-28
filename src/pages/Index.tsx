import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: "Sparkles",
      title: "Полная покраска",
      description: "Комплексная покраска кузова с подготовкой поверхности и защитным покрытием"
    },
    {
      icon: "Brush",
      title: "Локальная покраска",
      description: "Устранение сколов, царапин и повреждений на отдельных элементах кузова"
    },
    {
      icon: "Shield",
      title: "Антикоррозийная обработка",
      description: "Защита металла от коррозии с использованием современных материалов"
    },
    {
      icon: "Palette",
      title: "Подбор цвета",
      description: "Компьютерный подбор краски с точностью до оригинального оттенка"
    }
  ];

  const pricing = [
    { service: "Окраска одного элемента", price: "от 10 000 ₽" },
    { service: "Окраска трех элементов", price: "от 26 000 ₽" },
    { service: "Полная покраска автомобиля", price: "от 150 000 ₽" },
    { service: "Локальный ремонт (до 10 см)", price: "от 5 000 ₽" },
    { service: "Подбор цвета по коду", price: "от 1 500 ₽" },
    { service: "Антикоррозийная обработка", price: "от 8 000 ₽" },
    { service: "Полировка кузова", price: "от 15 000 ₽" },
    { service: "Керамическое покрытие", price: "от 25 000 ₽" }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/0fc07943-09b3-45db-910b-3d60e60920f1/files/58cbd3ea-355f-4226-8ea2-a0ce4d7d29a9.jpg",
      title: "BMW 5 Series",
      description: "Полная покраска в metallic blue"
    },
    {
      image: "https://cdn.poehali.dev/projects/0fc07943-09b3-45db-910b-3d60e60920f1/files/bd1241a8-d603-490b-bf87-29ec7a07fcfb.jpg",
      title: "Mercedes-Benz C-Class",
      description: "Восстановление лакокрасочного покрытия"
    },
    {
      image: "https://cdn.poehali.dev/projects/0fc07943-09b3-45db-910b-3d60e60920f1/files/6b57828f-99fb-48c0-98af-387e4733ea5f.jpg",
      title: "Audi A4",
      description: "Локальная покраска элементов"
    }
  ];

  const reviews = [
    {
      author: "Дмитрий",
      rating: 5,
      text: "Отличная работа! Покрасил крыло и дверь, всё сделано качественно, цвет подобран идеально. Цена адекватная.",
      date: "2 недели назад"
    },
    {
      author: "Алексей",
      rating: 5,
      text: "Профессиональный мастер, делает всё аккуратно. Красил бампер, результат превзошёл ожидания. Рекомендую!",
      date: "1 месяц назад"
    },
    {
      author: "Сергей",
      rating: 5,
      text: "Обращался за полной покраской. Работа выполнена на высшем уровне, сроки соблюдены. Очень доволен!",
      date: "3 месяца назад"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Paintbrush" className="text-primary" size={32} />
            <span className="text-xl font-bold">Вася-красит</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="sm" variant="ghost" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="Wrench" size={20} />
                    Услуги
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-lg hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="DollarSign" size={20} />
                    Цены
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-lg hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="Image" size={20} />
                    Портфолио
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon name="Mail" size={20} />
                    Контакты
                  </a>
                  <Button className="mt-4 w-full">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Частный мастер по покраске автомобилей
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Качественная покраска <span className="text-primary">по честной цене</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Работаю на профессиональном оборудовании. 5 лет опыта и индивидуальный подход к каждому автомобилю. 
                Гарантирую качество работы.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Расчет стоимости
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Авто покрашено</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/0fc07943-09b3-45db-910b-3d60e60920f1/files/6b57828f-99fb-48c0-98af-387e4733ea5f.jpg"
                alt="Покрасочный цех"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по покраске и восстановлению лакокрасочного покрытия автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши цены</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Стоимость работ по покраске автомобилей
            </p>
          </div>
          <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {pricing.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                      </div>
                      <span className="text-lg">{item.service}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-8">
            Точная стоимость рассчитывается после осмотра автомобиля
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы моих клиентов с Авито
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.author}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="https://www.avito.ru/sergiev_posad/predlozheniya_uslug/byudzhetnaya_kachestvennaya_pokraska_avto._avtomalyar_3535025776" target="_blank" rel="noopener noreferrer">
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Все отзывы на Авито
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Мои работы</Badge>
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных работ по покраске автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all bg-card/80 backdrop-blur">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку и я свяжусь с вами в ближайшее время для уточнения деталей
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Автомобильная, 15</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Сб: 9:00 - 20:00, Вс: 10:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и я перезвоню вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем автомобиле и требуемых работах"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Paintbrush" className="text-primary" size={24} />
              <span className="font-bold">Вася-красит</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Вася-красит. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;