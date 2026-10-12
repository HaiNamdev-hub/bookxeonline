import Header from './components/Header';
import Hero from './components/Hero';
import RideCalculator from './components/RideCalculator';
import Services from './components/Services';
import Pricing from './components/Pricing';
import DriverRegistration from './components/DriverRegistration';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />
      <Hero />
      <RideCalculator />
      <Services />
      <Pricing />
      <DriverRegistration />
      <Footer />
    </div>
  );
}