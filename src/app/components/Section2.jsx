import Image from "next/image"

export const Section2 = () => {
  return (
    <div className=" flex flex-col text-black justify-center space-y-12 my-auto h-auto w-full items-center text-center bg-secundary px-2 md:px-20">
       <Image
          className="flex p-4"
          src="/novios.png"
          alt="Imagen novios"
          width={600}
          height={800}
          priority
        />
      
    </div>
  );
};

export default Section2;
