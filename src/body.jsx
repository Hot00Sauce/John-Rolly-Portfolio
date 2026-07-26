import { useEffect } from "react";
import CircularProgressBar from "./assets/progress-bar";
import ProjectCarousel from "./projects-carousel";
import Experience from './experience'

function Body() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Remove this line if you want it to trigger only once:
            // observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove("visible"); // comment this if you want it once
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="body w-full mt-15 md:mt-10 pt-20 md:pt-40 lg:pt-45 xl:pt-90 2xl:pt-95 justify-items-center pb-15">
      <ProjectCarousel />

      <h1
        id="skills"
        className="mt-50 justify-center block text-center text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] text-[#1ABC9C] font-bold"
      >
        SKILLS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 md:pt-6 lg:pt-8 xl:pt-9 2xl:pt-12 justify-items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="justify-items-center fade-in shadow-2xl rounded-xl w-full max-w-md lg:max-w-xl xl:max-w-2xl pb-5 overflow-hidden">
          <h1
            id="vanilla"
            className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400"
          >
            FRONT-END
          </h1>
          <div className="justify-center grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full px-3 sm:px-4 lg:px-6">
            <CircularProgressBar percentage={90} skill="React" />
            <CircularProgressBar percentage={85} skill="TypeScript" />
            <CircularProgressBar percentage={85} skill="Angular" />
            <CircularProgressBar percentage={90} skill="HTML5" />
            <CircularProgressBar percentage={90} skill="CSS3" />
            <CircularProgressBar percentage={85} skill="Tailwind" />
          </div>
        </div>

        <div id="website builder" className="fade-in shadow-2xl rounded-xl w-full max-w-md lg:max-w-xl xl:max-w-2xl pb-5 overflow-hidden">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            CMS & PLATFORMS
          </h1>
          <div className="justify-center grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full px-3 sm:px-4 lg:px-6">
            <CircularProgressBar percentage={90} skill="WordPress" />
            <CircularProgressBar percentage={85} skill="Elementor" />
            <CircularProgressBar percentage={80} skill="WooCommerce" />
            <CircularProgressBar percentage={75} skill="WPCode" />
            <CircularProgressBar percentage={80} skill="SEO" />
            <CircularProgressBar percentage={78} skill="CRM" />
          </div>
        </div>

        <div id="back end" className="fade-in shadow-2xl rounded-xl w-full max-w-md lg:max-w-xl xl:max-w-2xl pb-5 overflow-hidden">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            BACK-END & DB
          </h1>
          <div className="justify-center grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full px-3 sm:px-4 lg:px-6">
            <CircularProgressBar percentage={80} skill="Node.js" />
            <CircularProgressBar percentage={85} skill="PHP" />
            <CircularProgressBar percentage={80} skill="CodeIgniter" />
            <CircularProgressBar percentage={85} skill="MySQL" />
            <CircularProgressBar percentage={80} skill="PostgreSQL" />
            <CircularProgressBar percentage={78} skill="MongoDB" />
          </div>
        </div>

        <div id="data analytics" className="fade-in shadow-2xl rounded-xl w-full max-w-md lg:max-w-xl xl:max-w-2xl pb-5 overflow-hidden">
          <h1 className="justify-center block text-center text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            DEVOPS & TOOLS
          </h1>
          <div className="justify-center grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full px-3 sm:px-4 lg:px-6">
            <CircularProgressBar percentage={80} skill="Docker" />
            <CircularProgressBar percentage={78} skill="AWS" />
            <CircularProgressBar percentage={85} skill="Vercel" />
            <CircularProgressBar percentage={90} skill="Git/GitHub" />
            <CircularProgressBar percentage={75} skill="n8n" />
            <CircularProgressBar percentage={80} skill="Figma" />
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
}

export default Body;
