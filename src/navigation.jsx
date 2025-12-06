function Navigation() {
  return (
    <nav className="
    w-full
    pb-2.5
    justify-center
    md:pl-90 lg:pl-128 xl:pl-150
    md:pt-5
    px-2
    ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <ul className="
        relative
        top-4
        flex justify-center items-center flex-wrap
        gap-2 sm:gap-3 md:gap-2 lg:gap-4 xl:gap-6
        text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl
        font-montserrat
        px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4
        "
        >
          <li>
            <a
              className="
        text-gray-300
        hover:text-[#1ABC9C]
        px-2 sm:px-3 md:px-4 py-1.5 sm:py-2
        rounded-full
        transition-all duration-300
        font-medium
        hover:bg-gray-700/50
        whitespace-nowrap
      "
              href="#summary"
            >
              Summary
            </a>
          </li>
          <li>
            <a className="
          text-gray-300
          hover:text-[#1ABC9C]
          px-2 sm:px-3 md:px-4 py-1.5 sm:py-2
          rounded-full
          transition-all duration-300
          font-medium
          hover:bg-gray-700/50
          whitespace-nowrap"
              href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="
          text-gray-300
          hover:text-[#1ABC9C]
          px-2 sm:px-3 md:px-4 py-1.5 sm:py-2
          rounded-full
          transition-all duration-300
          font-medium
          hover:bg-gray-700/50
          whitespace-nowrap"
              href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="
          bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C]
          text-white
          hover:from-[#1ABC9C] hover:to-[#16A085]
          hover:!text-gray-900
          px-3 sm:px-4 md:px-6 py-1.5 sm:py-2
          rounded-full
          transition-all duration-300
          font-semibold
          shadow-md
          hover:shadow-lg
          hover:scale-105
          whitespace-nowrap"
              href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;