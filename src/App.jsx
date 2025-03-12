import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Allergy from "./Pages/Allergy"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Menu from "./Pages/Menu"
import Service from "./Pages/Service"
import Login from "./Pages/Auth/Login"
import SignUp from "./Pages/Auth/SignUp"
import Navigation from "./NavBar/Navigation"
import ProductDescription from "./Pages/ProductDescription"
import Cart from "./Pages/Cart"
import Payment from "./Payment/Payment"
import Success from "./Payment/Success"
import Failure from "./Payment/Failure"
import Profile from "./Pages/Profile"

function App() {
  return (

    

    <div >
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allergy" element={<Allergy/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/failure" element={<Failure/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/ProductDescription/:id" element={<ProductDescription/>} />

      </Routes>
    </div>
  )
}

export default App
