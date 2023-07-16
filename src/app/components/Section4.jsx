import Image from "next/image";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const Section4 = () => {
  return (
    <div className=" flex flex-col text-sec_text justify-center space-y-12 my-auto w-full items-center text-center bg-secundary px-2 md:px-16 py-6">
      <div>
        <h4 className="text-4xl md:text-5xl mt-6">Detalles del gran día</h4>
        <Image
                className="relative p-2 mx-auto"
                src="/separator.png"
                alt="Imagen separadora"
                width={140}
                height={80}
                priority
              />
      </div>

      <h4 className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <h4 className="font-bold text-3xl">Salón Agñe Rayen</h4>
          <div className="italic z-20 text-xl ">Araujo V. 3547, Mendoza</div>
          
          <div className="flex-col md:flex h-5/6">
            <Image
              className="relative w-full p-2 rounded-3xl"
              src="/salon.jpeg"
              alt="Imagen novios"
              width={400}
              height={400}
              priority
            />
            <iframe
              className="m-2 flex border-2 border-slate-800 mx-auto w-full h-64 md:h-full mr-2 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13405.298772466289!2d-68.7870498!3d-32.8631276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0f22839dd631%3A0x479679618621067a!2sAgne%20Rayen%20Sal%C3%B3n%20De%20Eventos!5e0!3m2!1ses-419!2sar!4v1689033972564!5m2!1ses-419!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div id="INFO" className="ml-0 md:ml-6">
          <div>
              <h4 className="font-bold text-3xl">Precio Tarjetas</h4>
              <div className="italic z-20 text-xl pt-4 pb-11 "></div>

            <div className="p-2 m-2 space-y-3 gap-5 bg-primary text-secundary rounded-lg mb-12" >
              <BsEnvelopePaperHeart className="mx-auto text-4xl m-4" />
              <div className="text-base pt-2 grid grid-cols-2 grid-">
                <div>$9500</div> <div className="text-left">Jul - Ago</div>
                <div>$10500</div> <div className="text-left">Sep - Oct</div>
                <div>$12000</div> <div className="text-left">Oct - Nov</div>
              </div>
              <h2 className="">Menores:</h2>
              <div className="text-base grid grid-cols-2">
                <div>De 4 a 9 años</div> <div className="text-left">50% de la tarjeta</div>
                <div>Menores a 4 años</div> <div className="text-left">No pagan</div>
              </div>
              <h2 className="mt-4">Medios de pago:</h2>
              <div>
                <p className="font-extrabold">Efectivo o transferencia</p>
                <p>Alias Banco:</p> <h3 className="text-2xl">lunademielgyp</h3>
                <div>(enviar comprobante por Whatsapp)</div>
                <a
          href="https://api.whatsapp.com/send?phone=5492614703877"
          target="_blank"
          rel="noreferrer"
        >
                  <AiOutlineWhatsApp className="mx-auto text-4xl mb-4" />
                </a>
              </div>
              <div>
                <p className="font-extrabold">MercadoPago</p>
                <p>Al teléfono 2614703877</p>
                <p>Alias MP:</p> <h3 className="text-2xl">lunademielgyp.mp</h3>
                <div>(enviar comprobante por Whatsapp)</div>
                <a
          href="https://api.whatsapp.com/send?phone=5492614703877"
          target="_blank"
          rel="noreferrer"
        >
                  <AiOutlineWhatsApp className="mx-auto text-4xl mb-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default Section4;
