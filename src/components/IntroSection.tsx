import { NounsGlasses } from "./NounsGlasses";
import { NaImage } from "./NaImage";
import { CpImage } from "./CpImage";

export const IntroSection = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-10">
        <NounsGlasses className="w-[200px] h-[200px]" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 theme-text force-black dark:force-white">
            Nouns X Platohedro
          </h1>
          <p className="text-xl md:text-2xl mb-12 theme-text force-black dark:force-white">
            Transformando comunidades a través del arte y la tecnología
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <NaImage className="w-[150px] h-[150px]" />
            <CpImage className="w-[150px] h-[150px]" />
          </div>
          <div className="prose prose-lg mx-auto theme-text force-black dark:force-white">
            <div
              dangerouslySetInnerHTML={{
                __html: `En Platohedro, hemos estado trabajando en la
              implementación de un programa de formación en tecnologías
              emergentes dirigido a diferentes grupos poblacionales de las
              comunas 8 y 9 de Medellín. Este proceso se ha desarrollado de
              manera articulada con el ecosistema comunitario y fortaleciendo el
              tejido social. Integrando el arte y la tecnología desde la
              participación comunitaria hemos abierto y generado espacios de
              confianza, creatividad y colaboración en donde niños, niñas,
              jóvenes, madres y mujeres cabeza de hogar han sido
              protagonistas.<br /><br />
            
             El proceso de formación ha requerido un trabajo
            de constante diálogo y articulación con líderes del <b>Faro</b>, otros
            colectivos de la ciudad, la acción comunal y habitantes del
            territorio, garantizando que el conocimiento se comparta y expanda
            dentro del ecosistema comunitario. Un avance clave para fortalecer
            este proceso ha sido la instalación de <b>conexión a interneten la
            sede del Faro</b> , lo que permitirá dar continuidad a la formación y
            explorar nuevas herramientas digitales en futuros encuentros.

            <br /><br />
            Adicionalmente, se ha continuado con mejoras en infraestructura,
            incluyendo la adecuación del sistema de manejo de aguas lluvias y la
            compra de materiales para la pintura del mural comunitario, que se
            realizará una vez finalicen los trabajos de obra y la adecuación de
            la instalación eléctrica y de alumbrado en su interior, asegurando
            de este modo un espacio más funcional, seguro y adecuado para el
            desarrollo de actividades de formación, culturales y comunitarias
            `.replace(/\n/g, '<br>'),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};