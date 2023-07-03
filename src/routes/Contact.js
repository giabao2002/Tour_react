import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <Slider
        cName="slider-mid"
        sliderImg="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        title="Contact"
        btnClass="hide"
      ></Slider>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default Contact;
