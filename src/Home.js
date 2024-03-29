import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Navbar from "./navbar";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
