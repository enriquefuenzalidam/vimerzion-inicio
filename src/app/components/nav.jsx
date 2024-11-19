import Image from "next/image";
import logo from "/public/images/logo.png";

const menuItems = ["Empresas", "Particulares"];


export default function Nav() {
  return (
    <nav className={` absolute top-10 left-1/2 -translate-x-1/2 w-min `}>
      <ul className={` rounded-md bg-[linear-gradient(to_top,#1F1363,_#3A1E96,_#562BC8)] my-10 mx-auto px-10 shadow-lg shadow-[rgba(0,0,0,0.5)] flex flex-row gap-4 justify-between items-center`}>
        <li
          className={` w-max whitespace-nowrap flex flex-row items-center pr-10 py-2`}>
          <img src={logo.src} alt='' className={` inline-block w-14 h-auto `} />
          <span className={` inline-block uppercase font-bold text-white text-xl ml-3 `}>Vimerzion</span>
        </li>
        {menuItems.map((item, index) => (
          <li key={index}
            className={` font-Inter cursor-pointer text-white text-opacity-80 hover:text-opacity-100 font-medium `} >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
