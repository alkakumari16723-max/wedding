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
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import PreWedding from "./Pages/Prewedding";
import Wedding from "./Pages/Wedding";
import Reception from "./Pages/Reception";
import Mumbai from "./Pages/Mumbai";
import Uttarpradesh from "./Pages/Uttarpradesh";
import Delhi from "./Pages/Delhi";
import Payment from "./Pages/Payment";
import AiWeddingGenerator from "./Components/AiWeddingGenerator";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path='/goa' element={<Goa />} />
        <Route path='/jaipur' element={<Jaipur />} />
        <Route path='/Uttar-pradesh' element={<Uttarpradesh />} />
        <Route path='/delhi' element={<Delhi />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/pre-wedding" element={<PreWedding />} />
        <Route path="/services/wedding" element={<Wedding />} />
        <Route path="/services/reception" element={<Reception />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/payment" element={<Payment />} />
    
      </Routes>

      <Footer />   

    </BrowserRouter>
  );
}

export default App;