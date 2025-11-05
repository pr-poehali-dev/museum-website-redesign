import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const artworks = [
  {
    id: 1,
    title: "Цифровые грёзы",
    artist: "Анна Волкова",
    year: "2024",
    period: "Современность",
    style: "Цифровое искусство",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/52869d61-bc9f-4a6b-bac8-0a22a84119c1.jpg",
    description: "Погружение в цифровую реальность через призму неоновых снов и киберпространства. Работа исследует границы между физическим и виртуальным мирами.",
    medium: "Цифровая печать на холсте",
    dimensions: "150 x 200 см",
    location: "Зал 4, Современное искусство"
  },
  {
    id: 2,
    title: "Абстракция времени",
    artist: "Марк Петров",
    year: "2023",
    period: "2020-е",
    style: "Абстракционизм",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/b16d3214-329d-4e5a-bc4d-f3808a0439fc.jpg",
    description: "Геометрические формы взаимодействуют в пространстве, создавая иллюзию движения времени. Цветовая палитра отражает контраст прошлого и будущего.",
    medium: "Масло на холсте",
    dimensions: "120 x 180 см",
    location: "Зал 2, Абстракционизм"
  },
  {
    id: 3,
    title: "Скульптура будущего",
    artist: "Елена Соколова",
    year: "2024",
    period: "Современность",
    style: "Скульптура",
    image: "https://cdn.poehali.dev/projects/f76ec7a8-7e4f-41e4-8d9e-f74db0ea4bff/files/061e0b78-23c3-44b6-a318-a459f1a483c1.jpg",
    description: "Монументальная инсталляция, объединяющая органические формы и технологические материалы. Работа размышляет о симбиозе природы и техники.",
    medium: "Смешанная техника, сталь, бетон",
    dimensions: "300 x 200 x 150 см",
    location: "Зал 1, Главная галерея"
  }
];

const Artwork = () => {
  const { id } = useParams();
  const artwork = artworks.find(art => art.id === Number(id));

  if (!artwork) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <Icon name="AlertCircle" size={64} className="mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-4">Произведение не найдено</h1>
          <Link to="/">
            <Button className="rounded-full">Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-xl sm:text-2xl font-bold gradient-text">SFMOMA</h1>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="rounded-full">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              <span className="hidden sm:inline">Назад к галерее</span>
              <span className="sm:hidden">Назад</span>
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="animate-fade-in">
              <div className="sticky top-24">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="animate-slide-up space-y-6 sm:space-y-8">
              <div>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <Badge variant="secondary" className="text-xs sm:text-sm">{artwork.style}</Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">{artwork.period}</Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 gradient-text leading-tight">
                  {artwork.title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 mb-2">{artwork.artist}</p>
                <p className="text-base sm:text-lg text-gray-500">{artwork.year}</p>
              </div>

              <div className="border-l-4 border-primary pl-4 sm:pl-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              <Card className="p-4 sm:p-6 bg-gray-50 border-0 rounded-3xl">
                <h3 className="font-semibold text-base sm:text-lg mb-4">Детали произведения</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Palette" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Техника</p>
                      <p className="font-medium text-sm sm:text-base">{artwork.medium}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Maximize" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Размеры</p>
                      <p className="font-medium text-sm sm:text-base">{artwork.dimensions}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Расположение</p>
                      <p className="font-medium text-sm sm:text-base">{artwork.location}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-full sm:w-auto">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться
                </Button>
              </div>

              <Card className="p-4 sm:p-6 bg-purple-50 border-purple-200 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 sm:p-3 rounded-full bg-purple-200 flex-shrink-0">
                    <Icon name="Info" size={20} className="sm:w-6 sm:h-6 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Посетите музей</h4>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                      Увидьте это произведение вживую в нашей галерее. Билеты доступны онлайн.
                    </p>
                    <Button variant="outline" className="rounded-full">Купить билет</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Похожие <span className="gradient-text">произведения</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {artworks.filter(art => art.id !== artwork.id).slice(0, 3).map((art) => (
                <Link to={`/artwork/${art.id}`} key={art.id}>
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-3xl">
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{art.title}</h3>
                        <p className="text-xs sm:text-sm opacity-90">{art.artist}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4">SFMOMA</h3>
              <p className="text-gray-400 text-sm">
                Музей современного искусства Сан-Франциско
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Навигация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Коллекция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Выставки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">События</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Магазин</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Информация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Соцсети</h4>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Icon name="Instagram" size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Icon name="Facebook" size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Icon name="Twitter" size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>© 2024 SFMOMA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Artwork;
