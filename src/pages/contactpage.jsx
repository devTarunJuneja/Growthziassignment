import ContactSection from "../components/ContactSection";
import MapContactSection from "../components/MapContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function ContactPage() {
  return (
    <>
    <Navbar />
      <ContactSection />
      <MapContactSection />
      <Footer />
    </>
  );
}
export default ContactPage;