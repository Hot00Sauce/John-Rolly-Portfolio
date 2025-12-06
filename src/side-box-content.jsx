import SocialMediaIcon from "./assets/social-media-icon";

function SideBoxContent() {
  return (
    <div id="porfolio" className="side-box-content justify-items-center 
    pt-7 sm:pt-23 md:pt-30 lg:pt-55 xl:pt-70
    relative
    ">
      <div className="heading-and-subheading justify-center items-center">
        <h1 id="John Rolly Cedillo" className="justify-center flex 
            text-3xl sm:text-4xl lg:text-5xl
          text-amber-50">John Rolly Cedillo</h1>
        <h2 id="portfolio" className="justify-center flex 
            text-2xl sm:text-3xl md:text-4xl
          text-black">Portfolio</h2>
      </div>
      <SocialMediaIcon />
    </div>
  );
}

export default SideBoxContent;