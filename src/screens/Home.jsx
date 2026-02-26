import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import About from "../components/about";
import Carousel from "../components/carousel";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
