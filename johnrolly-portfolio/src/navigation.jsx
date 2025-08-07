function Navigation() {
  return (
    <div className="
    w-screen
    pb-2.5
    justify-center
    md:pl-90 lg:pl-128 xl:pl-150
    md:pt-5

    ">
      <ul className="
      relative
      top-4
      flex justify-center
      gap-1 sm:gap-6 md:gap-2 lg:gap-5 xl:gap-12
      text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl 2xl:text-3xl
      font-montserrat
      ">
        <li>
          <a
            className="
      text-[#1ABC9C]
      hover:bg-[#1ABC9C]
      hover:text-black
      hover:w-10
      px-2 py-1
      rounded-full
      transition-all duration-300
    "
            href="#summary"
          >
            Summary
          </a>
        </li>
        <li><a className="
        text-[#1ABC9C] 
        hover:bg-[#1ABC9C]
      hover:text-black
        hover:w-10
        px-2 py-1
        rounded-full
        transition-all duration-300" href="#skills">Skills</a></li>
        <li><a className="
        text-[#1ABC9C] 
        hover:bg-[#1ABC9C]
      hover:text-black
        hover:w-10
        px-2 py-1
        rounded-full
        transition-all duration-300" href="#projects">Projects</a></li>
        <li><a className="
      text-[#1ABC9C] 
      bg-[#1A4D4F]
      hover:bg-[#1ABC9C]
       hover:text-black
        hover:w-10
        px-2 md:px-4 py-1
        rounded-full
        transition-all duration-300" href="#contact">Contact Me</a></li>
      </ul>
    </div>
  );
}

export default Navigation;