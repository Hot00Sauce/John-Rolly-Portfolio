import './App.css'
import Navigation from './navigation'
import SideBoxContent from './side-box-content'
import Summary from './summary'
import Body from './body'
import Footer from './footer'

function App() {

  return (
    <div className="App">
      <div className=">
        absolute
        top-
        w-screen
        h-80
        sm:h-[400px]
        md:h-[500px]
        lg:h-[662px]
        xl:h-[780px]
        items-top justify-center
        bg-linear-to-b from-[#1A4D4F] to-[#1ABC9C]
        pt-14

        md:pt-10
        md:rounded-br-4xl
        md:w-90 lg:w-lg xl:w-150
        ">
        <SideBoxContent />
      </div>
      <Navigation />
      <Summary />
      <Body />
      <Footer />
    </div>

  )
}

export default App
