import { FiHeart } from "react-icons/fi";
import Countdown from "./Countdown";

export const Section3 = () => {
  const targetDate = new Date("2024-03-03T00:00:00");

  return (
    <div className="flex flex-col text-white justify-center space-y-6 my-auto py-16 w-full items-center text-center bg-primary px-2 md:px-20 text-secundary">
      <h3 className="text-3xl">#chinitaypablo</h3>
      <h4 className="text-5xl">¡Empezo la cuenta regresiva!</h4>
      <FiHeart className="text-5xl" />

      <Countdown targetDate={targetDate} />
      <div className="italic text-xl py-8">
        <p>Te invitamos a festejar nuestro amor.</p> <p>
          ¡Nos encantaría que estuvieras
          allí!
        </p>
      </div>
      <div className="text-3xl">3 de Marzo de 2024</div>
      <div>16:30 A 00:30</div>
    </div>
  );
};

export default Section3;
