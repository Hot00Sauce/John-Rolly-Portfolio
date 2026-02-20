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

      <div className="grid md:grid-cols-2 lg:w-250 xl:w-310 gap-5 pt-3 md:pt-6 lg:pt-8 xl:pt-9 2xl:pt-12 justify-items-center">
        {/* VANILLA */}
        <div className="justify-items-center fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 pb-5">
          <h1
            id="vanilla"
            className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400"
          >
            FRONT-END
          </h1>
          <div className="justify-center grid grid-cols-3 gap-1 w-90 md:w-80 lg:w-120">
            <CircularProgressBar percentage={85} skill="HTML" />
            <CircularProgressBar percentage={85} skill="CSS" />
            <CircularProgressBar percentage={80} skill="JavaScript" />
            <CircularProgressBar percentage={80} skill="React" />
            <CircularProgressBar percentage={80} skill="Tailwind" />
          </div>
        </div>

        {/* WEBSITE BUILDER */}
        <div id="website builder" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 md:h-70 xl:h-75 2xl:h-78 pb-5">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            WEBSITE BUILDER
          </h1>
          <div className="justify-items-center grid grid-cols-1 gap-1">
            <CircularProgressBar percentage={85} skill="WordPress" />
          </div>
        </div>

        {/* BACK-END */}
        <div id="back end" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 pb-5">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            BACK-END
          </h1>
          <div className="justify-items-center grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:w-140 2xl:grid-cols-3 gap-1 w-90 md:w-80 lg:w-120 2xl:w-150">
            <CircularProgressBar percentage={75} skill="Python" />
            <CircularProgressBar percentage={80} skill="PHP" />
            <CircularProgressBar percentage={75} skill="NodeJs" />
            <CircularProgressBar percentage={80} skill="PostgreSQL" />
            <CircularProgressBar percentage={80} skill="MySQL" />
          </div>
        </div>

        {/* DATA ANALYTICS */}
        <div id="data analytics" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 md:h-70 xl:h-75 2xl:h-78 pb-5">
          <h1 className="justify-center block text-center text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            DATA ANALYTICS
          </h1>
          <div className="justify-items-center grid grid-cols-1 gap-1">
            <CircularProgressBar percentage={80} skill="Power BI" />
          </div>
        </div>

        {/* DEVOPS */}
        <div id="devops" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 md:h-70 xl:h-100 2xl:h-100 pb-5">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-gray-400">
            DEVOPS
          </h1>
          <div className="flex justify-center">
            <div className="justify-items-center grid grid-cols-2 gap-1 w-60 md:w-75 lg:w-90 xl:w-100 2xl:w-120">
              <CircularProgressBar percentage={80} skill="Git" />
              <CircularProgressBar percentage={75} skill="GitLab" />
              <CircularProgressBar percentage={75} skill="Docker" />
            </div>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
}

export default Body;
