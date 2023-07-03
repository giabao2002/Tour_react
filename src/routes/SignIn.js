import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import FormSignIn from "../components/FormSignIn";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <Slider
        cName="slider-mid"
        sliderImg="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="About"
        btnClass="hide"
      ></Slider>
      <FormSignIn></FormSignIn>
      {/* <AboutUs></AboutUs> */}
      <Footer></Footer>
    </>
  );
}

export default About;
