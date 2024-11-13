import Image from "next/image";
import logo from "/public/images/logo.png";

export default function Eventos() {
  return (
    <>
      <div className={` absolute top-0 left-0 bg-[url('/images/fondo_a.jpg')] bg-no-repeat bg-cover bg-center inset-0 `} />
      <div className={` absolute top-0 left-0 backdrop-blur-sm w-full h-full `} />
      <div className={` absolute top-0 left-0 bg-[linear-gradient(to_top,#1F1363,_#3A1E96,_#562BC8)] opacity-60 backdrop-blur-sm w-full h-full `} />

      <main className={` relative `}>

        <div className={` max-w-5xl mx-auto `}>
          <div className={`  text-center `}>
            <img className={`  w-32 h-auto mx-auto my-5 `} src={logo.src} alt='' />
            <p className={` font-Inter font-bold uppercase text-4xl text-white tracking-widest `}>Vimerzion</p>
            <p className={` font-Inter font-normal uppercase text-lg text-white tracking-widest `}>Realidad Virtual</p>

            <p className={` font-Inter font-light text-lg text-white tracking-widest mt-16 indent-5 hyphens-auto text-left `}>
              Descubre la tecnología Háptica, una experiencia emocionante y revolucionaria que te sumerge en un mundo de sensaciones palpables. Mediante el uso de vibraciones sutiles, movimientos precisos y retroalimentación táctil, esta tecnología te permite sentir y experimentar visualmente cualquier cosa.
            </p>
            <p className={` font-Inter font-light text-lg text-white tracking-widest mt-5 mb-16 indent-5 hyphens-auto text-left `}>
              Ya sea que estés explorando un videojuego, un metaverso o incluso participando en un entrenamiento virtual, la tecnología háptica te sumergirá por completo.
            </p>

            <ul className={` flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center font-Inter font-semibold text-lg uppercase text-white tracking-normal text-center p-0 m-0 `}>
              <li className={` cursor-pointer border-b-2 border-white border-solid border-opacity-20 hover:border-opacity-100 transition-all duration-300 ease-in-out `} >Catálogo</li>
              <li className={` cursor-pointer border-b-2 border-white border-solid border-opacity-20 hover:border-opacity-100 transition-all duration-300 ease-in-out `} >Eventos</li>
              <li className={` cursor-pointer border-b-2 border-white border-solid border-opacity-20 hover:border-opacity-100 transition-all duration-300 ease-in-out `} >Tecnología</li>
              <li className={` cursor-pointer border-b-2 border-white border-solid border-opacity-20 hover:border-opacity-100 transition-all duration-300 ease-in-out `} >Contacto</li>
            </ul>

          </div>
        </div>
      </main>
    </>
  );
}
