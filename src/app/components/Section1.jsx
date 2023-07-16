import {IoMdRose} from "react-icons/io"

export const Section1 = () => {
  return (
    <div className=" flex flex-col justify-center my-auto h-96 w-full items-center text-center bg-primary px-2 md:px-20 text-secundary">
      <IoMdRose className="text-4xl"/>
      <h1 className="text-7xl">Te invitamos</h1>
      <h3 className="text-3xl">- A nuestra boda -</h3>
    </div>
  );
};

export default Section1;
