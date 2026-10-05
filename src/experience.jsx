function Experience() {
    return (
        <div className="w-full mt-30 md:mt-2 lg:-mt-50 pt-5 m:pt-16 md:pt-40 lg:pt-45 xl:pt-90 2xl:pt-95 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
            <h1 id="experience" className="justify-center block text-center text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] text-[#1ABC9C] font-bold mb-8 sm:mb-10 md:mb-12">
                EXPERIENCE
            </h1>

            <div className="max-w-7xl mx-auto relative">
                {/* Horizontal Timeline for Mobile - Visible only on mobile */}
                <div className="lg:hidden flex justify-center items-center mb-6">
                    <div className="flex items-center gap-3">
                        {/* Start year */}
                        <span className="text-[#1ABC9C] font-bold text-lg">1</span>

                        {/* Horizontal line with dots */}
                        <div className="relative w-32 md:w-64 h-0.5 bg-gradient-to-r from-[#1ABC9C] via-[#16A085] to-[#1ABC9C]">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse shadow-lg shadow-[#1ABC9C]/50"></div>
                            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#16A085] rounded-full"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1ABC9C] rounded-full"></div>
                            <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#16A085] rounded-full"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse shadow-lg shadow-[#1ABC9C]/50"></div>
                        </div>

                        {/* End year */}
                        <span className="text-[#1ABC9C] font-bold text-lg">5</span>

                        {/* Years label */}
                        <span className="text-gray-400 text-xs font-medium ml-2">YEARS</span>
                    </div>
                </div>

                {/* Vertical Timeline - Hidden on mobile, visible on larger screens */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16">
                    <div className="sticky top-32 flex flex-col items-center h-full">
                        {/* Year indicator */}
                        <div className="relative flex flex-col items-center">
                            {/* Top year */}
                            <div className="mb-2">
                                <span className="text-[#1ABC9C] font-bold text-xl tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                                    5
                                </span>
                            </div>

                            {/* Vertical line with gradient */}
                            <div className="relative h-64 w-0.5 bg-gradient-to-b from-[#1ABC9C] via-[#16A085] to-[#1ABC9C] my-2">
                                {/* Animated pulse dots */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse shadow-lg shadow-[#1ABC9C]/50"></div>
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#16A085] rounded-full"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1ABC9C] rounded-full"></div>
                                <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#16A085] rounded-full"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse shadow-lg shadow-[#1ABC9C]/50"></div>
                            </div>

                            {/* Bottom year */}
                            <div className="mt-2">
                                <span className="text-[#1ABC9C] font-bold text-xl tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                                    1
                                </span>
                            </div>

                            {/* Years label */}
                            <div className="mt-4">
                                <span className="text-gray-400 text-xs font-medium tracking-wide" style={{ writingMode: 'vertical-rl' }}>
                                    YEARS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 lg:ml-20">
                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-[#1ABC9C]/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-700/50 hover:border-[#1ABC9C]/50">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="w-full">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#1ABC9C] transition-colors">
                                    MetroSeek
                                </h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C] rounded-full mb-2">
                                    <p className="text-xs sm:text-xs lg:text-sm text-white font-medium">Lead Full-Stack Developer (Project)</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">January 2025 – March 2026</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-30 mb-3 sm:mb-4"></div>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Led a team of 3 and delivered 100% of milestones on time using Agile.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Built a GPS-based alert system notifying users within a 50km radius.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Developed a React.js PWA that improved load speed by approximately 30% through caching and lazy loading.</span></li>
                        </ul>
                    </div>

                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-[#1ABC9C]/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-700/50 hover:border-[#1ABC9C]/50">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="w-full">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#1ABC9C] transition-colors">
                                    VetConnect
                                </h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C] rounded-full mb-2">
                                    <p className="text-xs sm:text-xs lg:text-sm text-white font-medium">Lead Full Stack Developer (Project)</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">October 2024 – December 2025</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-30 mb-3 sm:mb-4"></div>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Built a PHP/MySQL platform supporting appointment scheduling for veterinary clinics.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Implemented secure data handling and appointment scheduling workflows.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Developed a mobile-first UI with a dual-panel notification system.</span></li>
                        </ul>
                    </div>

                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-[#1ABC9C]/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-700/50 hover:border-[#1ABC9C]/50">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="w-full">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#1ABC9C] transition-colors">
                                    TravelSpotPH
                                </h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C] rounded-full mb-2">
                                    <p className="text-xs sm:text-xs lg:text-sm text-white font-medium">Lead Full-Stack Developer (Project)</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">February 2023 – March 2024</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-30 mb-3 sm:mb-4"></div>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Built a travel platform using PHP, MySQL, and MongoDB.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Deployed the project on Vercel and optimized performance with compression and caching.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Created a responsive UI with secure authentication and session management.</span></li>
                        </ul>
                    </div>

                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-[#1ABC9C]/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-700/50 hover:border-[#1ABC9C]/50">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="w-full">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#1ABC9C] transition-colors">
                                    OSMUN Health-Tech
                                </h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C] rounded-full mb-2">
                                    <p className="text-xs sm:text-xs lg:text-sm text-white font-medium">Full-Stack (Freelance)</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">April 2024 – August 2025</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-30 mb-3 sm:mb-4"></div>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Built a PHP CodeIgniter and MySQL backend for reliable data processing.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Improved patient and admin interfaces with real-time validation and notifications.</span></li>
                        </ul>
                    </div>

                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-[#1ABC9C]/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-700/50 hover:border-[#1ABC9C]/50">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="w-full">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#1ABC9C] transition-colors">
                                    Spindiv Kinetics
                                </h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C] rounded-full mb-2">
                                    <p className="text-xs sm:text-xs lg:text-sm text-white font-medium">Web Developer</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">October 2025 – July 2026</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-30 mb-3 sm:mb-4"></div>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Developed high-traffic websites using PHP, HTML, CSS, and JavaScript.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Managed Hostinger server infrastructure and 10+ domains while maintaining 99.9% uptime.</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Implemented security measures, managed multi-site eCommerce platforms, and built custom Elementor UI components.</span></li>
                        </ul>
                    </div>
                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-[#1ABC9C]/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-700/50 hover:border-[#1ABC9C]/50 ">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="w-full">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#1ABC9C] transition-colors">
                                    7Figures Local
                                </h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1A4D4F] to-[#1ABC9C] rounded-full mb-2">
                                    <p className="text-xs sm:text-xs lg:text-sm text-white font-medium">Web Developer</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">August 2026 – Present</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-30 mb-3 sm:mb-4"></div>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Rebuilt a client website from the ground up, improving structure, performance, and mobile
                                responsiveness</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Published SEO- and GEO-optimized content on an ongoing basis to improve organic visibility and
                                AI-driven search discoverability</span></li>
                            <li className="flex items-start"><span className="text-[#1ABC9C] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base">▹</span><span className="text-sm sm:text-sm lg:text-base">Implemented structured data (Schema markup) across site pages to improve search engine indexing
                                and rich result eligibility</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;
