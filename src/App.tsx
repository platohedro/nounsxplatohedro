import { useEffect, useRef } from 'react';
import { GlassesIcon } from 'lucide-react';
import { Link, BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { NounsGlasses } from './components/NounsGlasses';
import { NaImage } from './components/NaImage';
import { CpImage } from './components/CpImage';

interface Moment {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  content: string;
}

const moments: Moment[] = [
  {
    id: 1,
    title: "Primer Momento",
    description: "El inicio de nuestra aventura cultural",
    image: "https://images.unsplash.com/photo-1560932684-5e552e2894e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: "Descripción detallada del primer momento del proyecto..."
  },
  {
    id: 2,
    title: "Segundo Momento",
    description: "Explorando nuevas perspectivas",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: "Descripción detallada del segundo momento del proyecto..."
  },
  {
    id: 3,
    title: "Tercer Momento",
    description: "Construyendo comunidad",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: "Descripción detallada del tercer momento del proyecto..."
  },
  {
    id: 4,
    title: "Cuarto Momento",
    description: "El futuro es ahora",
    image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: "Descripción detallada del cuarto momento del proyecto..."
  }
];

function DynamicMomentPage() {
  const { id } = useParams();
  const moment = moments.find(m => m.id === Number(id));

  if (!moment) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <NounsGlasses className="text-red-500/10 w-96 h-96 absolute -top-20 -left-20 transform rotate-12" />
        <NounsGlasses className="text-red-500/10 w-96 h-96 absolute top-1/2 -right-20 transform -rotate-12" />
      </div>
      <div className="container mx-auto relative z-10">
        <Link to="/" className="text-red-500 hover:text-red-400 flex items-center gap-2 mb-8">
          <GlassesIcon className="w-6 h-6" />
          <span>Volver al inicio</span>
        </Link>
        <div className={`${moment.color} rounded-lg p-8 shadow-xl border-2 border-red-500`}>
          <img
            src={moment.image}
            alt={moment.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 text-white">{moment.title}</h1>
          <p className="text-xl mb-6 text-white">{moment.description}</p>
          <div className="prose prose-lg max-w-none text-white">
            <p className="text-lg">{moment.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundGlassesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundGlassesRef.current) {
        const scrolled = window.scrollY;
        const glasses = backgroundGlassesRef.current.children;
        Array.from(glasses).forEach((glass, index) => {
          const speed = index % 2 === 0 ? 0.5 : -0.5;
          (glass as HTMLElement).style.transform = `translateY(${scrolled * speed}px) rotate(${index * 45}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <div ref={backgroundGlassesRef} className="absolute inset-0 pointer-events-none">
        <NounsGlasses className="text-red-500/10 w-96 h-96 absolute -top-20 -left-20 transform" />
        <NaImage className="w-64 h-64 absolute top-1/2 -right-20 transform opacity-20" />
     
        <NaImage className="w-56 h-56 absolute bottom-0 left-1/3 transform opacity-20" />
      </div>

      <header className="py-8 px-4 md:px-8 relative z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NounsGlasses className="w-10 h-10 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">Platohedro X Nouns Amigos</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Nuestro Viaje Cultural</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploramos cuatro momentos transformadores que han dado forma a nuestra 
            iniciativa cultural, cada uno representando un paso significativo en 
            nuestra misión de crear impacto en la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              ref={el => sectionRefs.current[index] = el}
              className={`moment-section relative ${index % 2 === 0 ? 'glasses-left' : 'glasses-right'}`}
            >
              <Link to={`/momento/${moment.id}`} className="block">
                <div className="glasses-card">
                  <div className={`glasses-frame ${moment.color} border-2 border-red-500`}>
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover card-image"
                      />
                      <div className="lens-effect" />
                    </div>
                    <div className="mt-4">
                      <h2 className="text-2xl font-bold text-white">{moment.title}</h2>
                      <p className="mt-2 text-lg text-white/90">{moment.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
              {index % 2 === 0 && index < moments.length - 1 && (
                <div className="glasses-bridge" />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/momento/:id" element={<DynamicMomentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;