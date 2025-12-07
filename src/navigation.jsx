import { useState, useEffect } from 'react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['summary', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Smooth scroll handler for navigation links
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setActiveSection(targetId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Add click listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => link.removeEventListener('click', handleNavClick));
    };
  }, []);

  return (
    <nav className="
    sticky top-0 z-50
    w-full
    pb-2.5
    pt-3
    ">
      <div className="
        flex justify-center md:justify-end
        md:pr-7 lg:pr-15 xl:pr-25
      ">
        <div className="
        max-w-[100%] sm:max-w-[85%] md:max-w-md lg:max-w-xl xl:max-w-2xl
        backdrop-blur-lg bg-gradient-to-b from-gray-900/60 to-gray-900/40
        border border-white/10
        shadow-xl
        rounded-full
        px-3 sm:px-4 md:px-3 lg:px-5 xl:px-6 py-1.5 md:py-1.5 lg:py-2.5 xl:py-3
      ">
          <ul className="
        flex justify-center items-center flex-nowrap
        gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-3 xl:gap-4
        text-[10px] sm:text-xs md:text-[11px] lg:text-sm xl:text-base
        font-montserrat
        "
          >
            <li>
              <a
                className={`
        ${activeSection === 'summary' ? 'bg-[#1ABC9C] !text-gray-900' : 'text-gray-300 hover:text-[#1ABC9C]'}
        focus:text-[#1ABC9C]
        focus:bg-gray-700/50
        active:bg-[#1ABC9C]
        active:!text-gray-900
        px-1.5 sm:px-2 md:px-2 lg:px-3 xl:px-4 py-1 sm:py-1.5 md:py-1 lg:py-1.5 xl:py-2
        rounded-full
        transition-all duration-300
        font-medium
        hover:bg-gray-700/50
        whitespace-nowrap
        outline-none
      `}
                href="#summary"
                onClick={() => setActiveSection('summary')}
              >
                Summary
              </a>
            </li>
            <li>
              <a className={`
          ${activeSection === 'skills' ? 'bg-[#1ABC9C] !text-gray-900' : 'text-gray-300 hover:text-[#1ABC9C]'}
          focus:text-[#1ABC9C]
          focus:bg-gray-700/50
          active:bg-[#1ABC9C]
          active:!text-gray-900
          px-1.5 sm:px-2 md:px-2 lg:px-3 xl:px-4 py-1 sm:py-1.5 md:py-1 lg:py-1.5 xl:py-2
          rounded-full
          transition-all duration-300
          font-medium
          hover:bg-gray-700/50
          whitespace-nowrap
          outline-none
        `}
                href="#skills"
                onClick={() => setActiveSection('skills')}>
                Skills
              </a>
            </li>
            <li>
              <a
                className={`
        ${activeSection === 'experience' ? 'bg-[#1ABC9C] !text-gray-900' : 'text-gray-300 hover:text-[#1ABC9C]'}
        focus:text-[#1ABC9C]
        focus:bg-gray-700/50
        active:bg-[#1ABC9C]
        active:!text-gray-900
        px-1.5 sm:px-2 md:px-2 lg:px-3 xl:px-4 py-1 sm:py-1.5 md:py-1 lg:py-1.5 xl:py-2
        rounded-full
        transition-all duration-300
        font-medium
        hover:bg-gray-700/50
        whitespace-nowrap
        outline-none
      `}
                href="#experience"
                onClick={() => setActiveSection('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a className={`
          ${activeSection === 'projects' ? 'bg-[#1ABC9C] !text-gray-900' : 'text-gray-300 hover:text-[#1ABC9C]'}
          focus:text-[#1ABC9C]
          focus:bg-gray-700/50
          active:bg-[#1ABC9C]
          active:!text-gray-900
          px-1.5 sm:px-2 md:px-2 lg:px-3 xl:px-4 py-1 sm:py-1.5 md:py-1 lg:py-1.5 xl:py-2
          rounded-full
          transition-all duration-300
          font-medium
          hover:bg-gray-700/50
          whitespace-nowrap
          outline-none
        `}
                href="#projects"
                onClick={() => setActiveSection('projects')}>
                Projects
              </a>
            </li>
            <li>
              <a className={`
          ${activeSection === 'contact' ? 'bg-[#16A085]' : 'bg-gray-800'}
          text-white
          hover:bg-[#1ABC9C]
          hover:!text-gray-900
          focus:bg-[#1ABC9C]
          focus:!text-gray-900
          active:bg-[#16A085]
          active:scale-95
          px-2 sm:px-3 md:px-2.5 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-1 lg:py-1.5 xl:py-2
          rounded-full
          transition-all duration-300
          font-semibold
          hover:scale-105
          whitespace-nowrap
          outline-none
        `}
                style={{
                  boxShadow: '0 0 20px rgba(26, 188, 156, 0.5), inset 0 0 20px rgba(26, 188, 156, 0.1)'
                }}
                href="#contact"
                onClick={() => setActiveSection('contact')}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;