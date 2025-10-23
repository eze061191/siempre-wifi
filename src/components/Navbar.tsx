import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { getCountryCode } from '../utils/countryFlags';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDestinations) {
        const megaMenu = document.querySelector('.destinations-mega-menu');
        const dropdownLink = event.target.closest('.nav-link-dropdown');
        
        if (megaMenu && !megaMenu.contains(event.target) && !dropdownLink) {
          setShowDestinations(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDestinations]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const popularDestinations = [
    { name: 'España', icon: '🌍' },
    { name: 'Estados Unidos', icon: '🌍' },
    { name: 'Marruecos', icon: '🌍' },
    { name: 'Japón', icon: '🌍' },
    { name: 'China', icon: '🌍' },
    { name: 'México', icon: '🌍' },
    { name: 'Turquía', icon: '🌍' },
    { name: 'Suiza', icon: '🌍' },
    { name: 'Reino Unido', icon: '🌍' },
  ];

  const regionalPlans = [
    'África', 'América Central', 'América Latina', 'Asia', 'Balcanes', 'Caribe', 
    'Escandinavia', 'Europa', 'Global', 'Medio Oriente', 'Oceanía'
  ];

  const countries = [
    'Albania', 'Alemania', 'Andorra', 'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 
    'Aruba', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bahréin', 'Bangladesh', 
    'Barbados', 'Bélgica', 'Belice', 'Benín', 'Bermudas', 'Bielorrusia', 'Bolivia', 
    'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunei', 'Bulgaria', 'Burkina Faso', 
    'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China', 'Chipre', 'Colombia', 
    'Corea del Sur', 'Costa de Marfil', 'Costa Rica', 'Croacia', 'Curazao', 'Dinamarca', 
    'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes', 'Eslovaquia', 
    'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Fiji', 'Filipinas', 'Finlandia', 
    'Francia', 'Gabón', 'Georgia', 'Ghana', 'Gibraltar', 'Granada', 'Grecia', 'Guadalupe', 
    'Guam', 'Guatemala', 'Guyana', 'Haití', 'Honduras', 'Hong Kong', 'Hungría', 'India', 
    'Indonesia', 'Irán', 'Irlanda', 'Islandia', 'Israel', 'Italia', 'Jamaica', 'Japón', 
    'Jordania', 'Kazajistán', 'Kenia', 'Kuwait', 'Laos', 'Letonia', 'Líbano', 'Liechtenstein', 
    'Lituania', 'Luxemburgo', 'Macao', 'Madagascar', 'Malasia', 'Maldivas', 'Malta', 
    'Marruecos', 'Martinica', 'Mauricio', 'México', 'Mónaco', 'Mongolia', 'Montenegro', 
    'Mozambique', 'Myanmar', 'Nepal', 'Nicaragua', 'Noruega', 'Nueva Zelanda', 'Omán', 
    'Países Bajos', 'Pakistán', 'Panamá', 'Perú', 'Polonia', 'Portugal', 'Puerto Rico', 
    'Reino Unido', 'República Checa', 'República Dominicana', 'Rumania', 'Rusia', 'Senegal', 
    'Serbia', 'Seychelles', 'Singapur', 'Sri Lanka', 'Sudáfrica', 'Suecia', 'Suiza', 
    'Tailandia', 'Taiwán', 'Tanzania', 'Trinidad y Tobago', 'Túnez', 'Turquía', 'Ucrania', 
    'Uganda', 'Uruguay', 'Vietnam'
  ];

  const cities = [
    'Abu Dabi', 'Ámsterdam', 'Antalya', 'Atenas', 'Bali', 'Bangkok', 'Barcelona', 'Berlín', 
    'Bombay', 'Boston', 'Budapest', 'Cancún', 'Chicago', 'Dubái', 'Dublín', 'El Cairo', 
    'Estambul', 'Florida', 'Hawaii', 'Honolulu', 'Ibiza', 'Las Vegas', 'Lisboa', 'Londres', 
    'Los Ángeles', 'Madrid', 'Mallorca', 'Manila', 'Marrakech', 'Melbourne', 'Miami', 
    'Milán', 'Montreal', 'Moscú', 'Nueva York', 'Osaka', 'París', 'Pekín', 'Phuket', 
    'Praga', 'Punta Cana', 'Roma', 'San Francisco', 'Seattle', 'Seúl', 'Shanghái', 
    'Sídney', 'Tenerife', 'Tokio', 'Toronto', 'Vancouver', 'Viena', 'Washington D.C.', 'Yakarta'
  ];

  const allDestinations = [...regionalPlans, ...countries, ...cities];

  const categories = [
    { name: 'Popular', key: 'popular' },
    { name: 'Planes regionales', key: 'regional' },
    { name: 'Países', key: 'countries' },
    { name: 'Ciudades', key: 'cities' },
    { name: 'Todos los destinos', key: 'all' }
  ];

  const [activeCategory, setActiveCategory] = useState('popular');

  const getDestinationsByCategory = () => {
    if (searchQuery) {
      return allDestinations.filter(dest => dest.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    switch(activeCategory) {
      case 'popular':
        return popularDestinations.map(d => d.name);
      case 'regional':
        return regionalPlans;
      case 'countries':
        return countries;
      case 'cities':
        return cities;
      case 'all':
        return allDestinations;
      default:
        return allDestinations;
    }
  };

  const filteredDestinations = getDestinationsByCategory();

  return (
    <>
      {showDestinations && <div className="mega-menu-overlay" onClick={() => setShowDestinations(false)}></div>}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => {
            if (window.navigateToHome) {
              window.navigateToHome();
            }
          }} style={{ cursor: 'pointer' }}>
            <span className="logo-text">
              Siempre<span className="logo-highlight">WiFi</span>
            </span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            <li className="nav-item-dropdown">
              <a 
                href="#destinos" 
                className="nav-link-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  setShowDestinations(!showDestinations);
                }}
              >
                ¿A dónde viajas? <span className={`dropdown-arrow ${showDestinations ? 'open' : ''}`}>▼</span>
              </a>
              {showDestinations && (
                <div className="destinations-mega-menu">
                  <div className="mega-menu-header">
                    <div className="search-box">
                      <span className="search-icon">🔍</span>
                      <input
                        type="text"
                        placeholder="Buscar destino..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                      />
                    </div>
                    <button className="btn-explore-animated" onClick={() => {
                      setShowDestinations(false);
                      if (window.navigateToDestinations) {
                        window.navigateToDestinations();
                      }
                    }}>
                      <span className="btn-text">Explorar destinos</span>
                      <span className="btn-icon-wrapper">
                        <svg className="btn-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="mega-menu-categories">
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        className={`category-tab ${activeCategory === cat.key ? 'active' : ''}`}
                        onClick={() => {
                          setActiveCategory(cat.key);
                          setSearchQuery('');
                        }}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                  <div className="mega-menu-content">
                    {activeCategory === 'popular' && !searchQuery ? (
                      <div className="popular-destinations-grid">
                        {popularDestinations.map((dest, index) => {
                          const countryCode = getCountryCode(dest.name);
                          return (
                            <div 
                              key={index} 
                              className="popular-destination-card"
                              onClick={() => {
                                setShowDestinations(false);
                                if (window.navigateToDestinationDetail) {
                                  window.navigateToDestinationDetail(dest.name);
                                }
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <span className="dest-icon">
                                {countryCode ? (
                                  <span className={`fi fi-${countryCode}`}></span>
                                ) : (
                                  <span>🌍</span>
                                )}
                              </span>
                              <span className="dest-name">{dest.name}</span>
                              <span className="dest-arrow">→</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="all-destinations-grid">
                        {filteredDestinations.slice(0, 30).map((dest, index) => {
                          const countryCode = getCountryCode(dest);
                          return (
                            <div 
                              key={index} 
                              className="destination-item"
                              onClick={() => {
                                setShowDestinations(false);
                                if (window.navigateToDestinationDetail) {
                                  window.navigateToDestinationDetail(dest);
                                }
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              {countryCode ? (
                                <span className={`fi fi-${countryCode}`} style={{marginRight: '0.5rem'}}></span>
                              ) : (
                                <span style={{marginRight: '0.5rem'}}>🌍</span>
                              )}
                              {dest}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li><a href="#planes" onClick={(e) => scrollToSection(e, 'planes')}>Planes</a></li>
            <li><a href="#cobertura" onClick={(e) => scrollToSection(e, 'cobertura')}>Cobertura</a></li>
            <li><a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</a></li>
            <li><a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a></li>
          </ul>
          <button className="cta-button" onClick={(e) => scrollToSection(e, 'planes')}>
            Contratar ahora
          </button>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            id="hamburger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
