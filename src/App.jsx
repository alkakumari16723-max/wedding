import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingForm from "./Pages/BookingForm";
import Locations from "./Pages/Locations";
import LocationDetails from "./Pages/LocationsDetails";
import Navbar from "./Components/Navbar";
import Goa from "./Pages/Goa";
import Footer from "./Components/Footer";
import Jaipur from "./Pages/Jaipur";
import Contact from "./Pages/Contact";
import ContactForm from "./Pages/Contactform";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Services from "./Pages/Service";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path='/goa' element={<Goa />} />
        <Route path='/jaipur' element={<Jaipur />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />   

    </BrowserRouter>
  );
}

export default App;