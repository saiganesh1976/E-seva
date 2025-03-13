import React from "react";
import NavigationBar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Announcements from "../../Components/Announcements/Announcements";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Announcements />
      <Carousel />
      <About/>
    </div>
  );
};

export default Home;
