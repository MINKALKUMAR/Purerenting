import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PropertyPage from "./components/PropertyPage";
import PropertyPhotos from "./components/PropertyPhotos";
import OwnerRegistrationForm from "./components/OwnerRegistrationForm";
import TenantRegistrationForm from "./components/TenantRegistrationForm";

// Newly Added Pages
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* NAVBAR ALWAYS VISIBLE */}
      <Navbar />

      {/* GLOBAL POPUP OWNER FORM */}
      <OwnerRegistrationForm mode="popup" />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <PropertyPage />
            </>
          }
        />

        {/* PROPERTY PHOTOS PAGE */}
        <Route path="/property/:pid" element={<PropertyPhotos />} />

        {/* OWNER REGISTRATION FULL PAGE */}
        <Route
          path="/owner-registration"
          element={<OwnerRegistrationForm mode="page" />}
        />

        {/* TENANT REGISTRATION FULL PAGE */}
        <Route
          path="/tenant-registration"
          element={<TenantRegistrationForm mode="page" />}
        />

        {/* NEW PAGES */}
        
        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        {/* SERVICES PAGE */}
        <Route path="/services" element={<Services />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
