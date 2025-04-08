import { useEffect, useRef } from "react";

import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import { NounsGlasses } from "./components/NounsGlasses";
import { NaImage } from "./components/NaImage";
import { CpImage } from "./components/CpImage";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Evidencias } from "./components/Evidencias";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

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
    title: "Taller con niñas y niños de Matinée en el Faro",
    description: "Introducción lúdica al mundo de Nouns",
    image:
      "/src/img/1.jpg",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: `A partir del grupo de 123 niños y niñas que conforman el grupo de Matinée del barrio El Faro, comuna 8 de Medellín, se llevó a cabo el día sábado 8 de febrero el taller # 1, que incluyó:

• Objetivo: Introducir el mundo de Nouns de manera lúdica.

• Actividades: A través del juego se desarrolló un espacio mediado por la lúdica en donde los participantes por medio de dinámicas participativas pudieron familiarizarse con el concepto de Nouns.

• Retos: Manejo del grupo debido a su gran cantidad (más de 100 participantes), por lo cual se dividió en dos subgrupos y jornadas diferentes, con el fin de poder optimizar el tiempo y desarrollo de la sesión.

• Avance clave: La instalación de internet en el Faro ha permitido de forma significativa un mejor desarrollo de las sesiones. Un segundo avance clave es el reconocimiento de un alto interés de los y las participantes de seguir haciendo parte de este tipo de espacios.`,
  },
  {
    id: 2,
    title: "Taller con niñas y niños de Matinée en Platohedro",
    description: "Exploración de dispositivos móviles y gobernanza descentralizada",
    image: "/src/img/2.jpg",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: `Contando con la participación de (# de niños y niñas), se llevó a cabo el taller # 2 con los niños y niñas integrantes del grupo Matinée del barrio Buenos Aires, Comuna 9 de Medellín el día 15 de marzo. En este caso niños y niñas exploraron el uso de dispositivos móviles y tuvieron un acercamiento a los conceptos de Gobernanza descentralizada:

• Objetivo: Explorar el uso de dispositivos digitales y la gobernanza descentralizada.

• Actividades:
  ○ A través de un juego niños y niñas se acercaron al concepto de Gobernanza descentralizada, el uso de monedas (dinero) y monedas digitales.
  ○ Introducción a wallets y descarga en dispositivos móviles de algunos participantes.

• Avances claves: Niños y niñas participantes mostraron un gran avance e interés en el manejo de herramientas digitales, reconocimiento de sus usos y aplicaciones y motivación para hacer parte de un aprendizaje basado en ejercicios prácticos.`,
  },
  {
    id: 3,
    title: "Taller con Amapolas (Mujeres jóvenes)",
    description: "Empoderamiento en finanzas descentralizadas",
    image:
      "/src/img/3.jpg",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: `Con madres y mujeres cabezas de hogar de las comunas 8 y 9 de Medellín, llevamos a cabo el día 7 de febrero, un encuentro centrado en reconocer las finanzas descentralizadas e introducir a las participantes en los principales conceptos y formas de las comunidades descentralizadas:

• Objetivo: Empoderar en el manejo de finanzas descentralizadas a madres y mujeres, introduciéndose al mundo de las comunidades y finanzas descentralizadas.

• Actividades:
  ○ En un primer momento se abrió un espacio de reflexión sobre la importancia de la autonomía financiera y, reconocer, cuáles son los conocimientos o ideas que las participantes tienen de las finanzas descentralizadas.
  ○ Introducción a las wallets y primeros pasos en su uso.

• Avances Claves: Primer acercamiento a herramientas digitales para fortalecer su independencia económica. Las participantes manifestaron un alto interés en conocer con mayor detalle las formas y usos de las finanzas descentralizadas y usos de herramientas digitales, con el fin de contribuir al fortalecimiento de sus emprendimientos, independencia económica y nuevas formas de gestión de recursos.`,
  },
  {
    id: 4,
    title: "Taller con Ideatorio (Adolescentes del Faro)",
    description: "Onboarding en Web3 para jóvenes",
    image:
      "/src/img/4.jpg",
    color: "bg-gradient-to-br from-red-500/90 to-red-600/90",
    content: `El día 14 de marzo nos reunimos con jóvenes y adolescentes del grupo Ideatorio del barrio El Faro, Comuna 8 de Medellín. Con este grupo generamos un proceso de introducción centrado en el recorrido histórico de las transformaciones que ha tenido el dinero, hasta llegar a las finanzas descentralizadas, abriendo paso para generar un proceso onboarding en Web3.

• Objetivo: Iniciar un proceso de onboarding en Web3 con jóvenes y adolescentes de Ideatorio.

• Actividades:
  ○ A partir de un recuento histórico, generamos el contexto para hacer una explicación de cómo funciona el ecosistema Web3 y su impacto en las comunidades descentralizadas.
  ○ Creación y configuración de wallets.
  ○ Ruta de aprendizaje para continuar profundizando en el tema.

• Avances Claves: Es nuestro interés generar un proceso de fortalecimiento de los conocimientos y usos de las tecnologías emergentes con el grupo de jóvenes y adolescentes, por lo cual este taller constituye un primer paso de un proceso a largo plazo que esperamos siga desarrollándose para generar procesos inclusión con esta población cada vez más efectivos.`,
  },
];

function DynamicMomentPage() {
  const { id } = useParams();
  const moment = moments.find((m) => m.id === Number(id));

  if (!moment) {
    return <Navigate to="/" replace />;
  }

  // Galería de imágenes para todos los momentos
  let galleryImages: string[] = [];
  
  // Cada momento usa las mismas imágenes de muestra para la galería
  switch(moment.id) {
    case 1:
      galleryImages = [
        "/src/img/momento1/1.jpg",
        "/src/img/momento1/2.jpg",
        "/src/img/momento1/3.jpg",
        "/src/img/momento1/4.jpg",
        "/src/img/momento1/5.jpg",
        "/src/img/momento1/6.jpg",
        "/src/img/momento1/7.jpg",
        "/src/img/momento1/8.jpg",
        "/src/img/momento1/9.jpg",
      ];
      break;
    case 2:
      galleryImages = [
        "/src/img/momento2/1.jpg",
        "/src/img/momento2/2.jpg",
        "/src/img/momento2/3.jpg",
        "/src/img/momento2/4.jpg",
        "/src/img/momento2/5.jpg",
        "/src/img/momento2/6.jpg",
        "/src/img/momento2/7.jpg",
      ];
      break;
    case 3:
      galleryImages = [
        "/src/img/momento3/1.jpg",
        "/src/img/momento3/2.jpg",
        "/src/img/momento3/3.jpg",
        "/src/img/momento3/4.jpg",
        "/src/img/momento3/5.jpg",
        "/src/img/momento3/13.jpg",
        "/src/img/momento3/12.jpg",
        "/src/img/momento3/11.jpg",
        "/src/img/momento3/10.jpg",
      ];
      break;
    case 4:
      galleryImages = [
        "/src/img/momento4/1.jpg",
        "/src/img/momento4/2.jpg",
        "/src/img/momento4/3.jpg",
   
      ];
      break;
    default:
      galleryImages = [];
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-8 relative overflow-hidden">
      <div className="container max-w-[95%] mx-auto relative z-10">
        <Link
          to="/"
          className="text-red-500 hover:text-red-400 flex items-center gap-2 mb-8"
        >
  
          <span>⌐◨-◨ Volver al inicio</span>
        </Link>
        <div
          className={`${moment.color} rounded-lg p-3 md:p-8 shadow-xl border-2 border-red-500 relative`}
        >
          <NaImage className="absolute -top-10 -right-8 w-12 md:w-24 h-12 md:h-24 transform rotate-12 opacity-20" />
          <CpImage className="absolute -bottom-8 -left-10 w-16 md:w-28 h-16 md:h-28 transform -rotate-6 opacity-20" />
          <img
            src={moment.image}
            alt={moment.title}
            className="w-full h-40 md:h-64 object-cover rounded-lg mb-3 md:mb-6"
          />
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 theme-text force-black dark:force-white">{moment.title}</h1>
          <p className="text-sm md:text-xl lg:text-2xl mb-3 md:mb-6 theme-text force-black dark:force-white">{moment.description}</p>
          <div className="prose prose-xs md:prose-base lg:prose-lg max-w-none theme-text">
            <div 
              className="text-xs md:text-base lg:text-xl force-black dark:force-white"
              dangerouslySetInnerHTML={{ 
                __html: moment.content
                  .split('\n\n')
                  .map(paragraph => {
                    if (paragraph.startsWith('•')) {
                      const items = paragraph.split('\n');
                      return `<ul class="space-y-2 md:space-y-4">${items.map(item => {
                        if (item.startsWith('  ○')) {
                          return `<li class="ml-4 md:ml-8 mt-1 md:mt-2">${item.replace('  ○', '')}</li>`;
                        } else if (item.startsWith('•')) {
                          return `<li class="font-medium">${item.replace('•', '')}</li>`;
                        }
                        return item;
                      }).join('')}</ul>`;
                    }
                    return `<p class="mb-3 md:mb-6">${paragraph}</p>`;
                  })
                  .join('\n')
              }}
            />
            
            {/* Galería de imágenes para todos los momentos */}
            {galleryImages.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-lg md:text-2xl font-bold theme-text force-black dark:force-white">Galería de imágenes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border-2 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src={img} 
                        alt={`Imagen ${index + 1} del ${moment.title}`} 
                        className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
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
          (glass as HTMLElement).style.transform = `translateY(${
            scrolled * speed
          }px) rotate(${index * 45}deg)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-black py-12 px-8 relative overflow-hidden">
      <div
        ref={backgroundGlassesRef}
        className="absolute inset-0 pointer-events-none"
      >
        <NounsGlasses className="text-red-500/10 w-96 h-96 absolute top-1/3 -left-20 transform" />
        <NaImage className="w-64 h-64 absolute bottom-1/4 -right-20 transform opacity-20" />

        <NaImage className="w-56 h-56 absolute bottom-0 left-1/3 transform opacity-20" />
        <CpImage className="w-72 h-72 absolute top-20 right-1/4 transform -rotate-6 opacity-20" />
        <NaImage className="w-64 h-64 absolute bottom-32 left-1/4 transform rotate-12 opacity-20" />
        <CpImage className="w-56 h-56 absolute top-1/2 right-1/3 transform rotate-45 opacity-15" />
      </div>

      <header className="py-8 px-4 md:px-8 relative z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NounsGlasses className="w-10 h-10 text-red-500" />
            <h1 className="text-3xl font-bold theme-text force-black dark:force-white">
              Platohedro X Nouns Amigos
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link 
              to="/evidencias" 
              className="px-4 py-2 text-base md:text-lg rounded-lg border-2 border-red-500 bg-white dark:bg-gray-900 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Evidencias
            </Link>
          </nav>
        </div>
      </header>

      <main className="container max-w-[95%] mx-auto relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 pointer-events-none">
            <NounsGlasses className="text-red-500/10 w-48 h-48 absolute -top-10 -left-10 transform rotate-12" />
            <CpImage className="w-40 h-40 absolute -top-8 right-0 transform -rotate-12 opacity-15" />
            <NaImage className="w-36 h-36 absolute top-1/2 -left-20 transform rotate-45 opacity-20" />
            <CpImage className="w-32 h-32 absolute bottom-0 right-1/4 transform rotate-6 opacity-15" />
          </div>
          <h2 className="text-4xl font-bold mb-6 theme-text force-black dark:force-white">
            <span className="text-red-500">⌐◨-◨</span> Nouns Amigos en el Faro
          </h2>
          <div className="prose prose-base md:prose-lg lg:prose-xl max-w-3xl mx-auto relative theme-text w-full px-4">
            <NaImage className="absolute -left-16 top-1/2 w-20 h-20 transform -rotate-12 opacity-15" />
            <CpImage className="absolute -right-16 bottom-0 w-24 h-24 transform rotate-12 opacity-15" />
            <div 
              className="text-base md:text-xl lg:text-2xl force-black dark:force-white whitespace-pre-line"
              dangerouslySetInnerHTML={{ 
                __html: `En el marco del proyecto Nouns Amigos - Platohedro, transformando
              comunidades en El Faro, se han generado procesos de adecuación
              infraestructural de la Sede Comunitaria, articulación de actores
              claves en el territorio y un proceso formativo centrado en Nouns,
              Nouns Amigos y Web3, que vincula a niños, niñas, jóvenes, madres y
              mujeres cabeza de hogar, brindándoles nuevas herramientas y
              conocimientos para comprender e interactuar con las tecnologías
              emergentes. Acoplados a sus necesidades, características
              poblacionales y contextos, los espacios formativos han permitido
              vincular la exploración lúdica y ejercicios prácticos sobre finanzas
              descentralizadas y Gobernanza en Comunidades. <br /><br />

              El proceso de formación, en el que a la fecha se han desarrollado 4
              talleres, ha requerido un trabajo constante de diálogo y
              articulación con líderes y lideresas del Faro, otros Colectivos de
              la ciudad, la Junta de Acción Comunal y sus habitantes. Generando de
              este modo una red de conocimiento compartido y extendido dentro del
              ecosistema comunitario y fortaleciendo el tejido social. Integrando
              el arte y la tecnología desde la participación comunitaria hemos
              abierto y generado espacios de confianza, creatividad y colaboración
              en donde niños, niñas, jóvenes, madres y mujeres cabeza de hogar han
              sido protagonistas.<br /><br />
            
             El proceso de formación ha requerido un trabajo
            de constante diálogo y articulación con líderes del Faro, otros
            colectivos de la ciudad, la acción comunal y habitantes del
            territorio, garantizando que el conocimiento se comparta y expanda
            dentro del ecosistema comunitario. Un avance clave para fortalecer
            este proceso ha sido la instalación de conexión a internet en la
            sede del Faro, lo que permitirá dar continuidad a la formación y
            explorar nuevas herramientas digitales en futuros encuentros.

            <br /><br />
            Adicionalmente, se ha continuado con mejoras en infraestructura,
            incluyendo la adecuación del sistema de manejo de aguas lluvias y la
            compra de materiales para la pintura del mural comunitario, que se
            realizará una vez finalicen los trabajos de obra y la adecuación de
            la instalación eléctrica y de alumbrado en su interior, asegurando
            de este modo un espacio más funcional, seguro y adecuado para el
            desarrollo de actividades de formación, culturales y comunitarias
            `.replace(/\n/g, '<br>') }}
            />
          </div>
        </div>
        <div className="py-16">

        <VideoSection />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative pt-16">
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`moment-section relative ${
                index % 2 === 0 ? "glasses-left" : "glasses-right"
              }`}
            >
              <Link to={`/momento/${moment.id}`} className="block">
                <div className="glasses-card">
                  <div
                    className={`glasses-frame ${moment.color} border-2 border-red-500`}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover card-image"
                      />
                      <div className="lens-effect" />
                    </div>
                    <div className="mt-4">
                      <h2 className="text-2xl font-bold theme-text force-black dark:force-white">
                        {moment.title}
                      </h2>
                      <p className="mt-2 text-lg theme-text force-black dark:force-white">
                        {moment.description}
                      </p>
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
 <div className="py-16">  <Footer /></div>
      
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/momento/:id" element={<DynamicMomentPage />} />
          <Route path="/evidencias" element={<Evidencias />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
