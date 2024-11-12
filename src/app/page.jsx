import Image from "next/image";
import logo from "/public/images/logo.jpg";

const menuItems = ["Inicio", "Nosotros", "Servicios", "Catálogo", "Contacto"];


export default function Home() {
  return (
    <div className={`  `}>
      <nav className={`  `}>
        <ul className={` w-min rounded-md bg-[#6A13EB] bg-opacity-80 my-10 mx-auto px-10 py-5 shadow-lg shadow-[rgba(0,0,0,0.5)] flex flex-row gap-4 justify-end`}>
          <li
          className={` cursor-pointer text-white text-opacity-80 hover:text-opacity-100 font-medium font-sans `}>
            <img src={logo.src} alt='' className={` w-10 h-auto `} />
          </li>
        {menuItems.map((item, index) => (
      <li key={index}
        className={` cursor-pointer text-white text-opacity-80 hover:text-opacity-100 font-medium font-sans `} >
        {item}
      </li>
    ))}
        </ul>
      </nav>
      <main className={` text-center `}>
        lala
      </main>
      <footer className={` text-center `}>
        lala
      </footer>
    </div>
  );
}
