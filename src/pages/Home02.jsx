import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import RoomsSection from '../components/RoomSection';
import TestimonialSection from '../components/TestimonialSection';
import MeetTeam from '../components/MeetTeam';
import NewsUpdate from '../components/NewsUpdate';
import DiscountBanner from '../components/DiscountBanner';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <RoomsSection/>
      <TestimonialSection/>
      <MeetTeam />
      <NewsUpdate />  
      <DiscountBanner />
      <Footer />
      {/* Add other components as needed */}
      
    </>
  );
}

export default App;
