import { useState, useEffect, useRef } from 'react';
import HealthTech from './assets/HealthTech.jpg'
import VetConnect from './assets/VetConnect.jpg'
import TravelSpot from './assets/TravelSpot.jpg'
import MrOwl from './assets/MrOwl.jpg'
import projectDescriptions from './DataJsons/carousel-description.json';

const projImages = [
    HealthTech,
    VetConnect,
    TravelSpot,
    MrOwl
];

function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === projImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            id="carousel"
            className="pb-25 projects-carousel mt-15 px:5 lg:px-8 2xl:px-10 pt-15 lg:pt-20 xl:pt-25*
            hover:bg-[#1a4d4f1a] duration-300
            "
        >
            <h1
                id="projects"
                className="justify-center block text-center 
                    text-2xl sm:text-3xl lg:text-4xl xl:text-[40px]
                    text-[#1ABC9C]"
            >
                PROJECTS
            </h1>

            <div className="flex justify-items-center lg:pt-8 xl:pt-10 2xl:pt-12">
                <div
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                    onTouchStart={stopAutoSlide}
                    onTouchEnd={startAutoSlide}
                >
                    <div className="relative w-full max-w-[1200px] mx-auto">
                        {/* Image */}
                        <div className="h-45 sm:h-75 md:h-89.5 lg:h-110 overflow-hidden rounded">
                            <img
                                key={currentIndex}
                                src={projImages[currentIndex]}
                                alt={`Project ${currentIndex + 1}`}
                                className="w-full h-full object-cover animate-fade-in"
                            />
                        </div>

                        <button
                            onClick={handlePrevious}
                            className="absolute top-1/2 left-0 -translate-y-1/2 
                                bg-black opacity-20 hover:opacity-50
                                transition-opacity duration-300
                                px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7
                                py-20 sm:py-34 md:py-42 lg:py-56 xl:py-47.5
                                z-10"
                        >
                            <svg className='h-5 xl:h-15' viewBox="0 0 33 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.1419 7.84231C33.3337 5.97543 33.2771 3.03261 32.0153 1.26937C30.7532 -0.493875 28.7641 -0.409856 27.5724 1.45708L0.85797 43.3042C-0.285932 45.0957 -0.285996 47.8971 0.857813 49.6891L27.5724 91.5425C28.7641 93.4098 30.7532 93.494 32.015 91.7308C33.2768 89.9677 33.334 87.0249 32.1423 85.1581L7.4655 46.4971L32.1419 7.84231Z" fill="#1ABC9C" />
                            </svg>

                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-0 -translate-y-1/2 
                                bg-black opacity-20 hover:opacity-50
                                transition-opacity duration-300
                                px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7
                                py-20 sm:py-34 md:py-42 lg:py-56 xl:py-47.5
                                z-10"
                        >
                            <svg className='h-5 xl:h-15' viewBox="0 0 33 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.858059 7.84231C-0.333677 5.97543 -0.277109 3.03261 0.984711 1.26937C2.24684 -0.493875 4.2359 -0.409856 5.42763 1.45708L32.142 43.3042C33.2859 45.0957 33.286 47.8971 32.1422 49.6891L5.42763 91.5425C4.2359 93.4098 2.24684 93.494 0.985023 91.7308C-0.276796 89.9677 -0.333993 87.0249 0.857742 85.1581L25.5345 46.4971L0.858059 7.84231Z" fill="#1ABC9C" />
                            </svg>

                        </button>
                    </div>

                    <div className="flex justify-center space-x-3 h-20 py-5 absolute left-1/2 -translate-x-1/2 bottom-[-500]">
                        {projImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300
                                    ${currentIndex === index
                                        ? 'bg-[#1ABC9C] scale-125'
                                        : 'bg-gray-400 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>

                    <div id="description" className="text-center transition-all duration-500 h-80 pt-15">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1ABC9C]">
                            {projectDescriptions[currentIndex].title}
                        </h2>
                        <p className="text-black text-sm md:text-lg lg:text-xl xl:text-xl px-6 sm:px-2 max-w-5xl mx-auto text-justify">
                            {projectDescriptions[currentIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCarousel;
