import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import TestimonialContainer from "./components/TestimonialContainer";

function App() {
  return (
    <div className="bg-[#f9ffe6]">
      <NavBar />
      <Hero />
      <div className="md:mb-30">
        <HowItWorks />
      </div>
      <TestimonialContainer />
      <Footer />
    </div>
  );
}

export default App;
