import Image from "next/image";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const Section4 = () => {
  return (
    <div className=" flex flex-col text-sec_text justify-center space-y-12 my-auto w-full items-center text-center bg-secundary px-2 md:px-16 py-6">
      <div>
        <h4 className="text-5xl mt-6">Detalles del gran día</h4>
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
          <h3 className="font-bold text-3xl">Salón Agñe Rayen</h3>
          <div className="italic">Araujo V. 3547, Mendoza</div>
          <div className="flex-col md:flex justify-between ">
            <Image
              className="relative w-full p-2"
              src="/salon.jpeg"
              alt="Imagen novios"
              width={400}
              height={400}
              priority
            />
            <iframe
              className="m-2 border-2 border-slate-800 h-64 mx-auto w-full mr-2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13405.298772466289!2d-68.7870498!3d-32.8631276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0f22839dd631%3A0x479679618621067a!2sAgne%20Rayen%20Sal%C3%B3n%20De%20Eventos!5e0!3m2!1ses-419!2sar!4v1689033972564!5m2!1ses-419!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div id="INFO" className="p-6 ml-6 my-auto">
          <div>
            <div className="p-4 space-y-4 gap-5 bg-primary text-secundary rounded-lg" >
              <BsEnvelopePaperHeart className="mx-auto text-4xl m-4" />
              <h2>Precio Tarjetas</h2>
              <div className="text-base pt-2 grid grid-cols-2">
                <div>$9500</div> <div>(Julio-Agosto)</div>
                <div>$10500</div>
                <div>(Septiembre-Octubre)</div>
                <div>$12000</div>
                <div>(Octubre-Noviembre)</div>
              </div>
              <h2 className="pt-3">Menores:</h2>
              <div className="text-base grid grid-cols-2">
                <div>De 4 a 9 años</div> <div>50% del valor de la tarjeta</div>
                <div>Menores a 4 años</div> <div>No pagan</div>
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
