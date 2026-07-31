function Summary() {
  return (
    <div id="summary" className="summary 
  md:pl-100 lg:pl-140 xl:pl-155
  pt-110 sm:pt-10 md:pt-35 lg:pt-60 xl:pt-70
  px-4 sm:px-6 md:px-8 pb-0 sm:pb-10 md:pb-12 lg:pb-0 flex justify-center items-center
  relative
">
      <div className="relative max-w-xl w-full">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-5 sm:p-8 shadow-2xl">
          <div className="mb-6">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#1A4D4F] via-[#1ABC9C] to-[#16A085] rounded-2xl px-5 sm:px-8 py-3 sm:py-4 shadow-lg">
                <h1 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold text-center">
                  Professional Summary
                </h1>
              </div>
            </div>
            <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent opacity-50"></div>
          </div>

          <p className="text-gray-300 text-sm sm:text-lg text-left leading-relaxed"
            style={{ fontFamily: 'Roboto, sans-serif' }}>
            Software Engineer specializing in React.js and TypeScript, with full-stack experience across Node.js, PHP, and SQL databases. I focus on building performant web applications, reliable backend integrations, and clean user interfaces that scale well across projects.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Summary;