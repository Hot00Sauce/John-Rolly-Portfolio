import SocialMediaIcon from "./assets/social-media-icon";

function SideBoxContent() {
  return (
    <div id="porfolio" className="side-box-content justify-items-center 
    pt-11 sm:pt-16 md:pt-24 lg:pt-55 xl:pt-65
    relative
    ">
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