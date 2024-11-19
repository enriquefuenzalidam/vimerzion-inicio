import Image from "next/image";
import logo from "/public/images/logo.png";
import Nav from "../components/nav";

export default function Eventos() {
  return (
    <>
      <div className={` absolute top-0 left-0 bg-[linear-gradient(_to_bottom,_#1F1363,_#3A1E96,_#562BC8)] opacity-80 backdrop-blur-sm w-full h-full `} />
      <div className={` absolute top-0 left-0 bg-[url('/images/logo_bg_.png')] bg-[length:6em] bg-repeat w-full h-full opacity-5`} />

      <main className={` relative `}>

        <div className={` max-w-5xl mx-auto `}>
          <div className={`  `}>
            <h2 className={` font-Inter font-light uppercase text-3xl text-[#9EE2FF] tracking-wide text-center [text-shadow:_0_0_0.6em_black] `}>Productos</h2>
            <h3 className={` font-Inter font-extrabold uppercase text-6xl text-[#9EE2FF] tracking-wide text-center [text-shadow:_0_0_0.4em_black] `} >Personas</h3>

          </div>
        </div>
      </main>

    </>
  );
}
