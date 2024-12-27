import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="h-full w-full px-5 py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
