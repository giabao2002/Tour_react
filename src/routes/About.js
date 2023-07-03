import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <Slider
        cName="slider-mid"
        sliderImg="https://images.unsplash.com/photo-1616159988985-750036b28b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        title="About"
        btnClass="hide"
      ></Slider>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default About;
