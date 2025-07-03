import Footer from "../home/Footer";
import ContactUs from "../home/ContactUs"
import Registrationpage from "./Registationpage";
import RegisterHero from "./RegisterHero";

const RegisterApp = () => {
    return (
      <>
      <RegisterHero />
      <Registrationpage />
        <ContactUs/>
        <Footer />
      </>
    );
  };
  
  export default RegisterApp;