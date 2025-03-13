import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Grievances from "./Pages/Grievances/Grievances";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Signup from "./Pages/SignUp/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/LogIn/login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Ambulance from "./Pages/Ambulance/Ambulance";
import Police from "./Pages/Police/Police";
import Petrol from "./Pages/Petrol/Petrol";
import Bloodbank from "./Pages/Bloodbank/Bloodbank";
import Fastag from "./Pages/Fastag/Fastag";
import Fire from "./Pages/Fire/Fire";
import NearestHospitals from "./Pages/NearestHospitals/NearestHospitals";
import FindHospital from "./Pages/FindHospital/FindHospital";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grievences" element={<Grievances />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/userProfile" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ambulance" element={<Ambulance/>}/>
        <Route path="/police" element={<Police/>}/>
        <Route path="/petrol" element={<Petrol/>}/>
        <Route path="/bloodbank" element={<Bloodbank/>}/>
        <Route path="/fastag" element={<Fastag/>}/>
        <Route path="/fire" element={<Fire/>}/>
        {/* <Route path="/nearestHospitals" element={<NearestHospitals/>}/> */}
        <Route path="/findHospital" element={<FindHospital/>}/>

      </Routes>
      <Footer />
    </>
  );
};

export default App;
