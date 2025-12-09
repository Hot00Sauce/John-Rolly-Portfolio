import './App.css'
import Navigation from './navigation'
import SideBoxContent from './side-box-content'
import Summary from './summary'
import Body from './body'
import Footer from './footer'

function App() {

  return (
    <div className="App">
      <Navigation />
      <div className="relative -mt-20">
        <div className="
          absolute
          top-0
          w-full
          h-80
          sm:h-[400px]
          md:h-[500px]
          lg:h-[662px]
          xl:h-[780px]
          items-top justify-center
          bg-gradient-to-br from-[#1A4D4F] via-[#1ABC9C] to-[#16A085]
          pt-14
          overflow-hidden
          md:pt-10
          md:rounded-br-4xl
          md:w-90 lg:w-lg xl:w-150
          ">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-40">
            {/* Geometric pattern */}
            <div className="absolute bottom-35 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 sm:border-2 md:border-3 border-white/60 rounded-full"></div>
            <div className="absolute bottom-25 right-10 sm:top-20 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 sm:border-2 md:border-3 border-white/50 rounded-lg rotate-45"></div>
            <div className="absolute bottom-10 left-1/4 sm:bottom-20 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 sm:border-2 md:border-3 border-white/40 rounded-full"></div>

            {/* Gradient orbs */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl sm:blur-2xl md:blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl sm:blur-2xl md:blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <SideBoxContent />
          </div>
        </div>
        <Summary />
      </div>
      <Body />
      <Footer />
    </div>

  )
}

export default App
