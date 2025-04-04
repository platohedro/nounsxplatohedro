import { CpImage } from './CpImage';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Evidencias = () => {
  return (
    <>
      <nav className="bg-white/80 dark:bg-white/10 backdrop-blur-sm fixed top-0 w-full z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors text-lg"
          >
            <span className="text-lg mr-1">⌐◨-◨</span>
            <span className="text-gray-900 dark:text-white text-lg">Inicio</span>
          </Link>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <div className="container max-w-[95%] mx-auto relative z-10 pt-24 md:pt-28">
        <div className="mb-16 relative">
          {/* Move images outside the content flow and make them more transparent */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <CpImage className="text-red-500/5 w-48 h-48 absolute -bottom-10 -right-10 transform -rotate-12" />
          </div>
          
          {/* Add padding and background to content to separate from images */}
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 theme-text force-black dark:force-white text-center">
              <span className="text-red-500">⌐◨-◨</span> Evidencias y documentación
            </h1>
            
            <div className="max-w-none mx-auto relative w-full px-6 md:px-8 md:pl-12">
              {/* Text container without prose classes */}
              <div className="text-lg mb-12">
                <p className="theme-text force-black dark:force-white mb-6">
                  Se han generado registros audiovisuales y publicaciones en redes sociales y la página web
                  de <strong className="text-red-500">Platohedro</strong> para documentar y difundir los aprendizajes de estos talleres.
                </p>
                <p className="theme-text force-black dark:force-white mb-8">
                  En el marco de cada una de las acciones adelantadas en el proyecto, la estrategia de
                  comunicaciones ha llevado registro, difusión y promoción de cada una de las actividades. A
                  continuación, se detallan cada una de las evidencias y registros de las actividades:
                </p>
              </div>

              {/* Table container */}
              <div className="prose prose-xs md:prose-base lg:prose-lg">
                <div className="overflow-hidden rounded-2xl shadow-sm mt-8">
                  <table className="min-w-full border-[3px] border-red-500">
                    <thead className="bg-red-500 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-medium text-lg">Actividades</th>
                        <th className="px-6 py-4 text-left font-medium text-lg">Fechas</th>
                        <th className="px-6 py-4 text-left font-medium text-lg">Enlaces</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/95 dark:bg-gray-900/95">
                      <tr className="border-b border-red-200 dark:border-red-800">
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">Taller Matinée barrio El Faro</td>
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">sábado 8 de febrero</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            <a href="https://drive.google.com/drive/folders/1-IqgSU_w0DVk6nTFfjpZBskzTMPLDRIu?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Fotografías</a>
                            <a href="https://drive.google.com/drive/folders/1YFkWwiu--1_BwDO3pw4nBfnKUUO49XmI?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Videos</a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-red-200 dark:border-red-800">
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">Taller Matinée barrio Buenos Aires</td>
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">sábado 15 de marzo</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            <a href="https://drive.google.com/drive/folders/1yOJ3kGyzuFWYjQ5-Xg9V9RSMyJ1vBHmb?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Fotografías</a>
                            <a href="https://drive.google.com/drive/folders/1kSo3wX_rpWgVO4SnpcyXQA5gCiOaLcmt?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Videos</a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-red-200 dark:border-red-800">
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">Taller Amapolas barrio El Faro</td>
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">viernes 7 de febrero</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            <a href="https://drive.google.com/drive/folders/1ZP4KXe5OVZFSMY4jLYbDxm7Vv8wPDm0O?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Fotografías</a>
                            <a href="https://drive.google.com/drive/folders/1CqnaO2pAmjFB_T33bVY-eg_NhPl4vYUp?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Videos</a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-red-200 dark:border-red-800">
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">Taller Ideatorio barrio El Faro</td>
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">viernes 14 de marzo</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            <a href="https://drive.google.com/drive/folders/1OQ-RkvzWjhggVvhd5ESbiHjSiD2r4HZf?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Fotografías</a>
                            <a href="https://drive.google.com/drive/folders/1XkVLq9DjQDfAKbmD7weAVpl-n5LKgFX8?usp=drive_link" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Videos</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">Promoción y difusión de actividades a través de redes sociales</td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-4">
                            <div>
                              <div className="font-medium mb-2 text-gray-900 dark:text-white text-lg">Instagram:</div>
                              <div className="flex flex-col gap-2 ml-3">
                                <a href="https://www.instagram.com/reel/DGTkAcDROKV/" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Link 1</a>
                                <a href="https://www.instagram.com/reel/DHWsNxXhz-f/" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Link 2</a>
                                <a href="https://www.instagram.com/reel/DHbYdKigcpi/" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Link 3</a>
                              </div>
                            </div>
                            <div>
                              <div className="font-medium mb-2 text-gray-900 dark:text-white text-lg">Facebook:</div>
                              <div className="flex flex-col gap-2 ml-3">
                                <a href="https://www.facebook.com/reel/2985943291581859" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Link 1</a>
                                <a href="https://www.facebook.com/reel/990415859724541" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Link 2</a>
                                <a href="https://www.facebook.com/reel/2077068706129377" className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-lg">Link 3</a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure and Conclusion Sections */}
        <div className="max-w-none mx-auto px-6 md:px-8 md:pl-12 mb-16">
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 theme-text force-black dark:force-white">
              <span className="text-red-500">⌐◨-◨</span> Avances en Infraestructura
            </h2>
            <div className="text-lg space-y-6">
              <p className="theme-text force-black dark:force-white">
                Además de las sesiones formativas, se han realizado avances importantes en la mejora de la sede del Faro:
              </p>
              <ul className="list-disc pl-6 space-y-3 theme-text force-black dark:force-white">
                <li>
                  <strong>Infraestructura para manejo de aguas lluvias:</strong> En proceso de implementación.
                </li>
                <li>
                  <strong>Mural comunitario:</strong> Compra de materiales completada, pendiente ejecución tras finalizar las obras de construcción.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-6 theme-text force-black dark:force-white">
              <span className="text-red-500">⌐◨-◨</span> Conclusión y próximos pasos
            </h2>
            <div className="text-lg space-y-4">
              <p className="theme-text force-black dark:force-white">
                Las sesiones formativas han sido un paso fundamental en la construcción de una comunidad más consciente y autónoma en el uso de herramientas descentralizadas. Cada grupo ha avanzado a su ritmo, y el trabajo continuará en futuras sesiones para fortalecer estos conocimientos.
              </p>
              <p className="theme-text force-black dark:force-white">
                En términos de infraestructura, las mejoras en el Faro permiten consolidar un espacio más adecuado para el aprendizaje y la convivencia. El compromiso de la comunidad y los aliados será clave para seguir fortaleciendo estos procesos.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
