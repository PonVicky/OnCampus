import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#f9ffe6]">
      <NavBar />
      <Hero />
      <div className="md:mb-30">
        <HowItWorks />
      </div>
      <Testimonials />
    </div>
  );
}

export default App;
