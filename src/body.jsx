import { useEffect } from "react";
import CircularProgressBar from "./assets/progress-bar";
import ProjectCarousel from "./projects-carousel";

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
    <div className="body w-screen pt-15 md:pt-60 lg:pt-70 xl:pt-90 2xl:pt-95 justify-items-center pb-15">
      <h1
        id="skills"
        className="justify-center block text-center text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] text-[#1ABC9C]"
      >
        SKILLS
      </h1>

      <div className="grid md:grid-cols-2 lg:w-250 xl:w-310 gap-5 pt-3 md:pt-6 lg:pt-8 xl:pt-9 2xl:pt-12 justify-items-center">
        {/* VANILLA */}
        <div className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 pb-5">
          <h1
            id="vanilla"
            className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-[#1A4D4F]"
          >
            VANILLA FRONT-END
          </h1>
          <div className="justify-items-center grid grid-cols-3 gap-1 w-90 md:w-80 lg:w-120">
            <CircularProgressBar percentage={80} skill="HTML" />
            <CircularProgressBar percentage={75} skill="CSS" />
            <CircularProgressBar percentage={65} skill="JavaScript" />
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div id="frameworks" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 md:h-65 lg:h-auto pb-5">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-[#1A4D4F]">
            FRAMEWORKS
          </h1>
          <div className="justify-items-center grid grid-cols-2 gap-1 w-60 md:w-75 lg:w-90 xl:w-100 2xl:w-120">
            <CircularProgressBar percentage={70} skill="React" />
            <CircularProgressBar percentage={70} skill="Tailwind" />
          </div>
        </div>

        {/* PREPROCESSOR */}
        <div id="preprocessor" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 md:h-70 xl:h-75 2xl:h-78 pb-5">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-[#1A4D4F]">
            PREPROCESSOR
          </h1>
          <div className="justify-items-center grid grid-cols-1 gap-1">
            <CircularProgressBar percentage={60} skill="Sass" />
          </div>
        </div>

        {/* BACK-END */}
        <div id="back end" className="fade-in shadow-2xl rounded-xl w-90 md:w-80 lg:w-120 xl:w-150 pb-5">
          <h1 className="justify-center block text-center pt-8 text-lg sm:text-xl md:text-[23px] xl:text-[30px] 2xl:text-3xl text-[#1A4D4F]">
            BACK-END
          </h1>
          <div className="justify-items-center grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:w-140 2xl:grid-cols-3 gap-1 w-90 md:w-80 lg:w-120 2xl:w-150">
            <CircularProgressBar percentage={60} skill="Python" />
            <CircularProgressBar percentage={65} skill="PHP" />
            <CircularProgressBar percentage={50} skill="NodeJs" />
            <CircularProgressBar percentage={75} skill="PostgreSQL" />
            <CircularProgressBar percentage={80} skill="MySQL" />
          </div>
        </div>
      </div>

      <ProjectCarousel />
    </div>
  );
}

export default Body;
