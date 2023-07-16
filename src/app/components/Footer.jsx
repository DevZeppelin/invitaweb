

const Footer = () => {
  return (
    <section
        id="FOOTER"
        className="grid grid-cols-2 w-full bg-primary text-secundary text-sm md:text-base text-center z-30 bg-black p-4 md:p-12"
      >
        <div className="my-auto">
          {" "}
          Invitación Web &copy; &nbsp; {new Date().getFullYear()}{" "}
        </div>

        

        <div className="w-full text-right">
          <a
            className="flex flex-col"
            href="https://www.devzeppelin.ar"
            target="_blank"
          >
            <p className="text-xs">Web programada por</p>
            <p>DevZeppelin.ar</p>
          </a>
        </div>
      </section>
  )
}

export default Footer