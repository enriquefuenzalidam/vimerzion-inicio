import Image from "next/image";
import logo from "/public/images/logo.png";

const menuItems = ["Inicio", "Nosotros", "Servicios", "Catálogo", "Contacto"];


export default function Home() {
  return (
    <>
    <div className={` absolute top-0 left-0 bg-[url('/images/fondo_a.jpg')] bg-no-repeat bg-cover bg-center w-full h-full `} />
    <div className={` absolute top-0 left-0 backdrop-blur-sm w-full h-full `} />
    <div className={` absolute top-0 left-0 bg-[linear-gradient(to_top,#1F1363,_#3A1E96,_#562BC8)] opacity-60 backdrop-blur-sm w-full h-full `} />
      <main className={` relative flex flex-auto w-full h-full `}>

        <div className={` mx-10 `}>
        <div className={`  text-center w-full py-16 max-w-5xl mx-auto`}>
          <img className={`  w-32 h-auto mx-auto `} src={logo.src} alt='' />
          <p className={` font-Inter font-bold uppercase text-4xl text-white tracking-widest `}>Vimerzion</p>
          <p className={` font-Inter font-normal uppercase text-lg text-white tracking-widest `}>Realidad Virtual</p>

          <p className={` font-Inter font-light text-lg text-white tracking-widest mt-16 indent-5 hyphens-auto text-left `}>
          Descubre la tecnología Háptica, una experiencia emocionante y revolucionaria que te sumerge en un mundo de sensaciones palpables. Mediante el uso de vibraciones sutiles, movimientos precisos y retroalimentación táctil, esta tecnología te permite sentir y experimentar visualmente cualquier cosa.
          </p>
          <p className={` font-Inter font-light text-lg text-white tracking-widest mt-5 indent-5 hyphens-auto text-left `}>
          Ya sea que estés explorando un videojuego, un metaverso o incluso participando en un entrenamiento virtual, la tecnología háptica te sumergirá por completo.
          </p>
{/*
          <ul className={` font-Inter font-semibold text-lg uppercase text-white tracking-normal my-16 text-center p-0 `}>
            <li className={` inline-block mr-10 p-0 `} >Catálogo</li>
            <li className={` inline-block mr-10 p-0 `} >Eventos</li>
            <li className={` inline-block mr-10 p-0 `} >Tecnología</li>
            <li className={` inline-block p-0 `} >Contacto</li>
          </ul>
*/}
        </div>
        </div>
      </main>
    </>
  );
}
