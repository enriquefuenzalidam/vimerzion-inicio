import Image from "next/image";
import logo from "/public/images/logo.jpg";

const menuItems = ["Inicio", "Nosotros", "Servicios", "Catálogo", "Contacto"];


export default function Home() {
  return (
    <div>
      <div className={` absolute top-0 left-0 bg-[url('/images/fondo_a.jpg')] bg-no-repeat bg-cover bg-center w-full h-full `} />
      <nav className={` relative `}>
        <ul className={` absolute top-10 left-1/2 -translate-x-1/2 w-min rounded-md bg-[linear-gradient(to_top,#1F1363,_#3A1E96,_#562BC8)] my-10 mx-auto px-10 shadow-lg shadow-[rgba(0,0,0,0.5)] flex flex-row gap-4 justify-between items-center`}>
          <li
          className={` w-max whitespace-nowrap flex flex-row items-center pr-10 `}>
            <img src={logo.src} alt='' className={` inline-block w-20 h-auto `} />
            <span className={` inline-block uppercase font-bold text-white text-xl `}>Vermizon</span>
          </li>
        {menuItems.map((item, index) => (
      <li key={index}
        className={` font-Inter cursor-pointer text-white text-opacity-80 hover:text-opacity-100 font-medium `} >
        {item}
      </li>
    ))}
        </ul>
      </nav>
      <main className={` text-center `}>
        lala
        sdfasdf
      </main>
      <footer className={` text-center `}>
        lala
      </footer>
    </div>
  );
}
