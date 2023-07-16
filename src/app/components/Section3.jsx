import {FiHeart} from "react-icons/fi"

export const Section3 = () => {
  return (
    <div className="flex flex-col text-white justify-center space-y-6 my-auto py-16 w-full items-center text-center bg-primary px-2 md:px-20 text-secundary">
      <h4 className="text-5xl">¡Empezo la cuenta regresiva!</h4>
      <FiHeart className="text-5xl" />
     
      <h3 className="text-3xl">#chinitaypablo</h3>
      <div className="italic">Te invitamos a festejar nuestro amor. ¡Nos encantaría que estuvieras allí!</div>
      <div className="text-3xl">3 de Marzo de 2024</div>
      <div>16:30 A 00:30</div>
      
    </div>
  );
};

export default Section3;
