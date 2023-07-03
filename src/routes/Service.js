import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar></Navbar>
      <Slider
        cName="slider-mid"
        sliderImg="https://images.unsplash.com/photo-1636228528713-3561a1486d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Service"
        btnClass="hide"
      ></Slider>
      <Trip></Trip>
      <Footer></Footer>
    </>
  );
}

export default Service;
