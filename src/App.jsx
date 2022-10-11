import './App.css'

import Header from './sections/Header'
import Offers from './sections/Offers'
import Menu from './sections/Menu'
import CustomerService from './sections/CustomerService'
import Reviews from './sections/Reviews'
import Publications from './sections/Publications'
import Deliveries from './sections/Deliveries'
import Footer from './sections/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Offers />
      <Menu />
      <CustomerService />
      <Reviews />
      <Publications />
      {/*<Deliveries />
      <Footer />*/}
    </div>
  )
}

export default App
