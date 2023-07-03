import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Slider
        cName="slider"
        sliderImg="https://images.unsplash.com/photo-1549492423-400259a2e574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      ></Slider>
      <Destination></Destination>
      <Trip></Trip>
      <Footer></Footer>
    </>
  );
}

export default Home;
