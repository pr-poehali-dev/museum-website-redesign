import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const artworks = [
  {
    id: 1,
    title: "Цифровые грёзы",
    artist: "Анна Волкова",
    year: "2024",
    period: "Современность",
    style: "Цифровое искусство",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/52869d61-bc9f-4a6b-bac8-0a22a84119c1.jpg"
  },
  {
    id: 2,
    title: "Абстракция времени",
    artist: "Марк Петров",
    year: "2023",
    period: "2020-е",
    style: "Абстракционизм",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/b16d3214-329d-4e5a-bc4d-f3808a0439fc.jpg"
  },
  {
    id: 3,
    title: "Скульптура будущего",
    artist: "Елена Соколова",
    year: "2024",
    period: "Современность",
    style: "Скульптура",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/061e0b78-23c3-44b6-a318-a459f1a483c1.jpg"
  },
  {
    id: 4,
    title: "Неоновая реальность",
    artist: "Иван Кузнецов",
    year: "2023",
    period: "2020-е",
    style: "Инсталляция",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/52869d61-bc9f-4a6b-bac8-0a22a84119c1.jpg"
  },
  {
    id: 5,
    title: "Геометрия света",
    artist: "Анна Волкова",
    year: "2024",
    period: "Современность",
    style: "Абстракционизм",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/b16d3214-329d-4e5a-bc4d-f3808a0439fc.jpg"
  },
  {
    id: 6,
    title: "Пространство мечты",
    artist: "Марк Петров",
    year: "2022",
    period: "2020-е",
    style: "Инсталляция",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/061e0b78-23c3-44b6-a318-a459f1a483c1.jpg"
  }
];

const Index = () => {
  const [selectedArtist, setSelectedArtist] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const artists = [...new Set(artworks.map(art => art.artist))];
  const periods = [...new Set(artworks.map(art => art.period))];
  const styles = [...new Set(artworks.map(art => art.style))];

  const filteredArtworks = artworks.filter(art => {
    const matchesArtist = !selectedArtist || art.artist === selectedArtist;
    const matchesPeriod = !selectedPeriod || art.period === selectedPeriod;
    const matchesStyle = !selectedStyle || art.style === selectedStyle;
    const matchesSearch = !searchQuery || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.artist.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesArtist && matchesPeriod && matchesStyle && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedArtist('');
    setSelectedPeriod('');
    setSelectedStyle('');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">SFMOMA</h1>
          <div className="flex gap-6 items-center">
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Коллекция
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О музее
            </a>
            <Button variant="outline" size="sm">
              Билеты
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              Где искусство <br />
              <span className="gradient-text">встречает будущее</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Самая инновационная коллекция современного искусства в Сан-Франциско
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
                Смотреть коллекцию
              </Button>
              <Button size="lg" variant="outline">
                Планировать визит
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <img 
              src="https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/061e0b78-23c3-44b6-a318-a459f1a483c1.jpg"
              alt="Art 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <img 
              src="https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/52869d61-bc9f-4a6b-bac8-0a22a84119c1.jpg"
              alt="Art 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <img 
              src="https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/b16d3214-329d-4e5a-bc4d-f3808a0439fc.jpg"
              alt="Art 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent" />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Интерактивная <span className="gradient-text">галерея</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Исследуйте нашу коллекцию с умными фильтрами
          </p>

          <div className="mb-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по названию или автору..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Автор:</span>
                {artists.map(artist => (
                  <Badge
                    key={artist}
                    variant={selectedArtist === artist ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => setSelectedArtist(selectedArtist === artist ? '' : artist)}
                  >
                    {artist}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Период:</span>
                {periods.map(period => (
                  <Badge
                    key={period}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => setSelectedPeriod(selectedPeriod === period ? '' : period)}
                  >
                    {period}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Стиль:</span>
                {styles.map(style => (
                  <Badge
                    key={style}
                    variant={selectedStyle === style ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => setSelectedStyle(selectedStyle === style ? '' : style)}
                  >
                    {style}
                  </Badge>
                ))}
              </div>
            </div>

            {(selectedArtist || selectedPeriod || selectedStyle || searchQuery) && (
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Найдено работ: {filteredArtworks.length}
                </p>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <Icon name="X" size={16} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((art, index) => (
              <Link to={`/artwork/${art.id}`} key={art.id}>
                <Card 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold mb-2">{art.title}</h3>
                      <p className="text-sm opacity-90">{art.artist} • {art.year}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">{art.style}</Badge>
                      <Badge variant="outline">{art.period}</Badge>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-600">Ничего не найдено</p>
              <p className="text-gray-400 mt-2">Попробуйте изменить фильтры</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Музей современного <span className="gradient-text">искусства</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SFMOMA — это ведущий музей современного и современного искусства на западном побережье США. 
                Наша коллекция включает более 33 000 произведений искусства, созданных с начала 20-го века до наших дней.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Часы работы</h4>
                    <p className="text-gray-600">Вт-Вс: 10:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-600">151 Third Street, San Francisco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Icon name="Ticket" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Билеты</h4>
                    <p className="text-gray-600">От $25 | Дети до 18 лет бесплатно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/061e0b78-23c3-44b6-a318-a459f1a483c1.jpg"
                  alt="Museum"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">SFMOMA</h3>
              <p className="text-gray-400">
                Музей современного искусства Сан-Франциско
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Коллекция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Выставки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">События</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Магазин</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 SFMOMA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
