import About from "./components/AboutSection/About";
import Admission from "./components/AdmissionSection/Admission";
import Contact from "./components/ContactSection/Contact";
import Course from "./components/CourseSection/Course";
import Footer from "./components/FooterSection/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Course/>
      <Admission/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;