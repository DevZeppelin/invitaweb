import Image from "next/image";
import { GiShutRose } from "react-icons/gi";

export const Section5 = () => {
  return (
    <div className=" flex flex-col text-sec_text justify-center space-y-3 my-auto w-full items-center text-center bg-secunddary px-2 md:px-48">

      <div className="p-6">
        <GiShutRose className="text-6xl mt-12" />
      </div>
      <h3 className="text-xl">Muy Importate para nosotros</h3>
      <h4 className="text-5xl">¡Que disfrutes mucho!</h4>
      <div id="INFO" className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center text-6xl">
          <Image
              className="relative p-2"
              src="/foto.png"
              alt="Imagen novios"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="p-10 mt-4 space-y-2 bg-primary text-secundary text-left">
            <h4 className="text-3xl">Fotografìa y filmación</h4>
            <h3 className="text-xl pb-4">Relax</h3>
            <p className="text-base">
              Contamos con un servicio profesional de fotografía y filmación. Te
              invitamos a guardar el teléfono en los momentos más importantes y
              que los vivamos juntos mirándonos a los ojos y sintiendo a pleno
              las emociones.
            </p>
          </div>
        </div>

        <div className="md:grid flex flex-col-reverse grid-cols-1 md:grid-cols-2">

        <div className="p-10 space-y-2 bg-primary text-secundary text-left">
            <h4 className="text-3xl">Código de vestimenta</h4>
            <h3 className="text-xl pb-4">Formal Tranqui</h3>
            <p className="text-base">
              Cualquiera de sus posibles variaciones, están más que bien para
              que disfrutemos todos, y sobre todo, estemos cómodos a la hora de
              tirar pasos en la pista de baile y salir facheros en las fotos.
            </p>
          </div>
          <div className="flex items-center justify-center text-6xl">
          <Image
              className="relative p-2"
              src="/vestimenta.png"
              alt="Imagen novios"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center text-6xl">
          <Image
              className="relative p-2"
              src="/regalos.png"
              alt="Imagen novios"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="p-10 space-y-2 bg-primary text-secundary text-left">
            <h4 className="text-3xl">Regalos</h4>
            <h3 className="text-xl pb-4">¡Gracias!</h3>
            <p className="text-base">
              Significa mucho para nosotros tu ayuda, para que así pueda nuestro
              sueño, ser una realidad.
            </p>
            <h3>Alias Banco: <span className="text-2xl">lunademielgyp</span></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
