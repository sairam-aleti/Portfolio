import Banner from "./components/banner/Banner";
import Interests from "./components/features/Interests";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Publication from "./components/publication/Publication";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
      <Navbar />
      <Banner />
      <Interests />
      <Projects />
      <Resume />
      <Publication />
      <Contact />
      <FooterBottom /> 
      </div>
    </div>
  );
}

export default App;
