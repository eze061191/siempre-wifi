import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIcons from './components/TrustIcons';
import Benefits from './components/Benefits';
import ImageShowcase from './components/ImageShowcase';
import FeatureHighlight from './components/FeatureHighlight';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StyleGuide from './components/StyleGuide';
import DestinationPage from './components/DestinationPage';
import DestinationsPage from './components/DestinationsPage';
import DestinationDetailPage from './components/DestinationDetailPage';
import { BookingData } from './types';

// Extend Window interface for global navigation functions
declare global {
  interface Window {
    navigateToDestination: () => void;
    navigateToDestinations: () => void;
    navigateToDestinationDetail: (destination?: string, data?: BookingData | null) => void;
    navigateToHome: () => void;
  }
}

type PageType = 'home' | 'destination' | 'destinations' | 'destinationDetail';

function App() {
  const [showStyleGuide, setShowStyleGuide] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedDestination, setSelectedDestination] = useState<string>('España');
  const [bookingData, setBookingData] = useState<BookingData>({
    destination: '',
    startDate: null,
    endDate: null,
    days: 0,
    price: 0
  });

  // Reset scroll position immediately on page change
  useEffect(() => {
    // Set scroll position to top instantly before render
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    // Also set document scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage, showStyleGuide]);

  // Disable browser's scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Expose setCurrentPage globally for navigation
  useEffect(() => {
    window.navigateToDestination = () => setCurrentPage('destination');
    window.navigateToDestinations = () => setCurrentPage('destinations');
    window.navigateToDestinationDetail = (destination, data = null) => {
      setSelectedDestination(destination || 'España');
      if (data) {
        setBookingData(data);
      } else {
        // Reset booking data if navigating without data
        setBookingData({
          destination: destination || 'España',
          startDate: null,
          endDate: null,
          days: 0,
          price: 0
        });
      }
      setCurrentPage('destinationDetail');
    };
    window.navigateToHome = () => setCurrentPage('home');
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    let keySequence = '';

    const handleKeyPress = (e: KeyboardEvent) => {
      // Limpiar timeout anterior
      if (timeoutId) clearTimeout(timeoutId);

      // Agregar la tecla presionada a la secuencia
      keySequence = (keySequence + e.key.toLowerCase()).slice(-20);
      
      console.log('Secuencia actual:', keySequence); // Para debug

      // Verificar si la secuencia contiene el easter egg
      if (keySequence.includes('siemprewifiui')) {
        setShowStyleGuide(true);
        keySequence = '';
      }

      // Limpiar la secuencia después de 2 segundos de inactividad
      timeoutId = setTimeout(() => {
        keySequence = '';
      }, 2000);
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showStyleGuide) {
        setShowStyleGuide(false);
        keySequence = '';
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keydown', handleEscKey);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [showStyleGuide]);

  return (
    <div className="App">
      {showStyleGuide ? (
        <StyleGuide />
      ) : currentPage === 'destinationDetail' ? (
        <DestinationDetailPage destination={selectedDestination} bookingData={bookingData} />
      ) : currentPage === 'destinations' ? (
        <DestinationsPage />
      ) : currentPage === 'destination' ? (
        <DestinationPage />
      ) : (
        <>
          <Navbar />
          <Hero />
          <TrustIcons />
          <Benefits />
          <ImageShowcase />
          <FeatureHighlight />
          <HowItWorks />
          <Plans />
          <Testimonials />
          <FAQ />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
