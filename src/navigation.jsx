function Navigation() {
  return (
    <nav className="
    sticky top-0 z-50
    w-full
    pb-2.5
    flex justify-center md:justify-end
    pt-3
    px-4 sm:px-6 md:px-8
    ">
      <div className="
        max-w-[100%] sm:max-w-[85%] md:max-w-xl lg:max-w-2xl
        backdrop-blur-lg bg-gradient-to-b from-gray-900/60 to-gray-900/40
        border border-white/10
        shadow-xl
        rounded-full
        px-3 sm:px-4 md:px-5 py-1.5 md:py-2.5
      ">
        <ul className="
        flex justify-center items-center flex-nowrap
        gap-1.5 sm:gap-2 md:gap-3 lg:gap-5
        text-[10px] sm:text-xs md:text-xs lg:text-sm
        font-montserrat
        "
        >
          <li>
            <a
              className="
        text-gray-300
        hover:text-[#1ABC9C]
        px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5
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
          px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5
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
          px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5
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
          bg-gray-800
          text-white
          hover:bg-[#1ABC9C]
          hover:!text-gray-900
          px-2 sm:px-3 md:px-4 py-1 sm:py-1.5
          rounded-full
          transition-all duration-300
          font-semibold
          hover:scale-105
          whitespace-nowrap"
              style={{
                boxShadow: '0 0 20px rgba(26, 188, 156, 0.5), inset 0 0 20px rgba(26, 188, 156, 0.1)'
              }}
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