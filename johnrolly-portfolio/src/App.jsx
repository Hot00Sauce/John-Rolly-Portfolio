import './App.css'
import Navigation from './navigation'
import SearchBar from './search-bar'
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
        h-[320px]
        sm:h-[400px]
        md:h-[500px]
        lg:h-[662px]
        xl:h-[780px]
        items-top justify-center
        bg-gradient-to-b from-[#1A4D4F] to-[#1ABC9C]
        pt-14

        md:pt-10
        md:rounded-br-4xl
        md:w-90 lg:w-128 xl:w-150
        ">

        <SearchBar />
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
