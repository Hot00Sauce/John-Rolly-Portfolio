function Summary() {
  return (
    <div id="summary" className="summary 
    md:pl-100 lg:pl-140 xl:pl-155
    pt-90 sm:pt-10 md:pt-35 lg:pt-60 xl:pt-70
    px-8 flex justify-center items-center
    relative
    ">
      {/* Main card container */}
      <div className="relative max-w-xl w-full">
        {/* Card with dark background */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
          {/* Title button with gradient */}
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-[#1A4D4F] via-[#1ABC9C] to-[#16A085] 
              rounded-2xl px-8 py-4 shadow-lg">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                Software Engineer/Web Developer
              </h1>
            </div>
            {/* Underline separator */}
            <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-50"></div>
          </div>

          {/* Description text */}
          <p className="text-gray-300 text-lg text-left sm:text-xl leading-relaxed"
            style={{ fontFamily: 'Roboto, sans-serif' }}>
            Specializing in frontend development, eager to contribute my growing skills to a challenging opportunity and help drive your team's success.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Summary;