import SocialMediaIcon from "./assets/social-media-icon";
import profileImage from "./assets/John-Rolly-Image-Profile.jpg";

function SideBoxContent() {
  return (
    <div id="porfolio" className="side-box-content relative flex h-full flex-col
    items-center justify-center
    translate-y-20 sm:translate-y-18 md:translate-y-17 lg:translate-y-16
    ">
      <div className="relative mb-5 sm:mb-6">
        <div className="absolute -inset-2 rounded-full border border-white/40"></div>
        <div className="absolute -inset-4 rounded-full border border-white/20"></div>
        <div className="relative h-30 w-30 overflow-hidden rounded-full border-4 border-white/80 bg-[#1A4D4F] shadow-2xl
          sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56">
          <img
            src={profileImage}
            alt="John Rolly Cedillo"
            className="h-full w-full object-cover object-[center_25%]"
          />
        </div>
      </div>
      <div className="heading-and-subheading justify-center items-center text-center px-6">
        <h1 id="John Rolly Cedillo" className="justify-center flex 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          text-amber-50 font-semibold">John Rolly N. Cedillo</h1>
        <h2 id="portfolio" className="justify-center flex 
            text-lg sm:text-xl md:text-2xl lg:text-4xl
          text-black mt-2">Software Engineer</h2>
        <p className="mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-xs sm:max-w-md md:max-w-xl leading-relaxed">
          Building responsive React and TypeScript experiences with a strong focus on performance, usability, and clean, maintainable code.
        </p>
      </div>
      <SocialMediaIcon />
    </div>
  );
}

export default SideBoxContent;