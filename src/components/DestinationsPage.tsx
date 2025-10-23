import React, { useState } from 'react';
import './DestinationsPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobeFeature from './GlobeFeature';
import { getCountryCode } from '../utils/countryFlags';

function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('popular');

  // Datos de destinos organizados
  const popularDestinations = [
    { name: 'España', flag: '🇪🇸', type: 'País' },
    { name: 'Estados Unidos', flag: '🇺🇸', type: 'País' },
    { name: 'Marruecos', flag: '🇲🇦', type: 'País' },
    { name: 'Japón', flag: '🇯🇵', type: 'País' },
    { name: 'China', flag: '🇨🇳', type: 'País' },
    { name: 'México', flag: '🇲🇽', type: 'País' },
    { name: 'Turquía', flag: '🇹🇷', type: 'País' },
    { name: 'Suiza', flag: '🇨🇭', type: 'País' },
    { name: 'Reino Unido', flag: '🇬🇧', type: 'País' },
    { name: 'Europa', flag: '🌍', type: 'Región' },
    { name: 'Andorra', flag: '🇦🇩', type: 'País' },
    { name: 'Egipto', flag: '🇪🇬', type: 'País' },
    { name: 'Emiratos Árabes', flag: '🇦🇪', type: 'País' },
    { name: 'Asia', flag: '🌏', type: 'Región' },
    { name: 'Tailandia', flag: '🇹🇭', type: 'País' },
    { name: 'Indonesia', flag: '🇮🇩', type: 'País' },
    { name: 'Colombia', flag: '🇨🇴', type: 'País' },
    { name: 'Argentina', flag: '🇦🇷', type: 'País' }
  ];

  const regionalPlans = [
    { name: 'África', flag: '🌍', type: 'Región' },
    { name: 'América Central', flag: '🌎', type: 'Región' },
    { name: 'América Latina', flag: '🌎', type: 'Región' },
    { name: 'Asia', flag: '🌏', type: 'Región' },
    { name: 'Balcanes', flag: '🌍', type: 'Región' },
    { name: 'Caribe', flag: '🏝️', type: 'Región' },
    { name: 'Escandinavia', flag: '🌍', type: 'Región' },
    { name: 'Europa', flag: '🌍', type: 'Región' },
    { name: 'Europa del Este', flag: '🌍', type: 'Región' },
    { name: 'Japón y China', flag: '🌏', type: 'Región' },
    { name: 'Japón y Corea del Sur', flag: '🌏', type: 'Región' },
    { name: 'Norteamérica', flag: '🌎', type: 'Región' },
    { name: 'Oceanía', flag: '🌏', type: 'Región' },
    { name: 'Oriente Medio', flag: '🌍', type: 'Región' },
    { name: 'Global', flag: '🌐', type: 'Región' }
  ];

  const countries = [
    { name: 'Albania', flag: '🇦🇱' },
    { name: 'Alemania', flag: '🇩🇪' },
    { name: 'Andorra', flag: '🇦🇩' },
    { name: 'Arabia Saudita', flag: '🇸🇦' },
    { name: 'Argelia', flag: '🇩🇿' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Armenia', flag: '🇦🇲' },
    { name: 'Aruba', flag: '🇦🇼' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Austria', flag: '🇦🇹' },
    { name: 'Azerbaiyán', flag: '🇦🇿' },
    { name: 'Bahamas', flag: '🇧🇸' },
    { name: 'Bahréin', flag: '🇧🇭' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Barbados', flag: '🇧🇧' },
    { name: 'Bélgica', flag: '🇧🇪' },
    { name: 'Belice', flag: '🇧🇿' },
    { name: 'Benín', flag: '🇧🇯' },
    { name: 'Bermudas', flag: '🇧🇲' },
    { name: 'Bielorrusia', flag: '🇧🇾' },
    { name: 'Bolivia', flag: '🇧🇴' },
    { name: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { name: 'Botsuana', flag: '🇧🇼' },
    { name: 'Brasil', flag: '🇧🇷' },
    { name: 'Brunei', flag: '🇧🇳' },
    { name: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Burkina Faso', flag: '🇧🇫' },
    { name: 'Camboya', flag: '🇰🇭' },
    { name: 'Camerún', flag: '🇨🇲' },
    { name: 'Canadá', flag: '🇨🇦' },
    { name: 'Catar', flag: '🇶🇦' },
    { name: 'Chad', flag: '🇹🇩' },
    { name: 'Chile', flag: '🇨🇱' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Chipre', flag: '🇨🇾' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Corea del Sur', flag: '🇰🇷' },
    { name: 'Costa de Marfil', flag: '🇨🇮' },
    { name: 'Costa Rica', flag: '🇨🇷' },
    { name: 'Croacia', flag: '🇭🇷' },
    { name: 'Curazao', flag: '🇨🇼' },
    { name: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Dominica', flag: '🇩🇲' },
    { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Egipto', flag: '🇪🇬' },
    { name: 'El Salvador', flag: '🇸🇻' },
    { name: 'Emiratos Árabes', flag: '🇦🇪' },
    { name: 'Eslovaquia', flag: '🇸🇰' },
    { name: 'Eslovenia', flag: '🇸🇮' },
    { name: 'España', flag: '🇪🇸' },
    { name: 'Estados Unidos', flag: '🇺🇸' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Fiji', flag: '🇫🇯' },
    { name: 'Filipinas', flag: '🇵🇭' },
    { name: 'Finlandia', flag: '🇫🇮' },
    { name: 'Francia', flag: '🇫🇷' },
    { name: 'Gabón', flag: '🇬🇦' },
    { name: 'Georgia', flag: '🇬🇪' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Gibraltar', flag: '🇬🇮' },
    { name: 'Granada', flag: '🇬🇩' },
    { name: 'Grecia', flag: '🇬🇷' },
    { name: 'Guadalupe', flag: '🇬🇵' },
    { name: 'Guam', flag: '🇬🇺' },
    { name: 'Guatemala', flag: '🇬🇹' },
    { name: 'Guyana', flag: '🇬🇾' },
    { name: 'Haití', flag: '🇭🇹' },
    { name: 'Honduras', flag: '🇭🇳' },
    { name: 'Hong Kong', flag: '🇭🇰' },
    { name: 'Hungría', flag: '🇭🇺' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'Irán', flag: '🇮🇷' },
    { name: 'Irlanda', flag: '🇮🇪' },
    { name: 'Islandia', flag: '🇮🇸' },
    { name: 'Israel', flag: '🇮🇱' },
    { name: 'Italia', flag: '🇮🇹' },
    { name: 'Jamaica', flag: '🇯🇲' },
    { name: 'Japón', flag: '🇯🇵' },
    { name: 'Jordania', flag: '🇯🇴' },
    { name: 'Kazajistán', flag: '🇰🇿' },
    { name: 'Kenia', flag: '🇰🇪' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Laos', flag: '🇱🇦' },
    { name: 'Letonia', flag: '🇱🇻' },
    { name: 'Líbano', flag: '🇱🇧' },
    { name: 'Liechtenstein', flag: '🇱🇮' },
    { name: 'Lituania', flag: '🇱🇹' },
    { name: 'Luxemburgo', flag: '🇱🇺' },
    { name: 'Macao', flag: '🇲🇴' },
    { name: 'Madagascar', flag: '🇲🇬' },
    { name: 'Malasia', flag: '🇲🇾' },
    { name: 'Maldivas', flag: '🇲🇻' },
    { name: 'Malta', flag: '🇲🇹' },
    { name: 'Marruecos', flag: '🇲🇦' },
    { name: 'Martinica', flag: '🇲🇶' },
    { name: 'Mauricio', flag: '🇲🇺' },
    { name: 'México', flag: '🇲🇽' },
    { name: 'Mónaco', flag: '🇲🇨' },
    { name: 'Mongolia', flag: '🇲🇳' },
    { name: 'Montenegro', flag: '🇲🇪' },
    { name: 'Mozambique', flag: '🇲🇿' },
    { name: 'Myanmar', flag: '🇲🇲' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Nicaragua', flag: '🇳🇮' },
    { name: 'Noruega', flag: '🇳🇴' },
    { name: 'Nueva Zelanda', flag: '🇳🇿' },
    { name: 'Omán', flag: '🇴🇲' },
    { name: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Pakistán', flag: '🇵🇰' },
    { name: 'Panamá', flag: '🇵🇦' },
    { name: 'Perú', flag: '🇵🇪' },
    { name: 'Polonia', flag: '🇵🇱' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Puerto Rico', flag: '🇵🇷' },
    { name: 'Reino Unido', flag: '🇬🇧' },
    { name: 'República Checa', flag: '🇨🇿' },
    { name: 'República Dominicana', flag: '🇩🇴' },
    { name: 'Rumania', flag: '🇷🇴' },
    { name: 'Rusia', flag: '🇷🇺' },
    { name: 'Senegal', flag: '🇸🇳' },
    { name: 'Serbia', flag: '🇷🇸' },
    { name: 'Seychelles', flag: '🇸🇨' },
    { name: 'Singapur', flag: '🇸🇬' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Sudáfrica', flag: '🇿🇦' },
    { name: 'Suecia', flag: '🇸🇪' },
    { name: 'Suiza', flag: '🇨🇭' },
    { name: 'Tailandia', flag: '🇹🇭' },
    { name: 'Taiwán', flag: '🇹🇼' },
    { name: 'Tanzania', flag: '🇹🇿' },
    { name: 'Trinidad y Tobago', flag: '🇹🇹' },
    { name: 'Túnez', flag: '🇹🇳' },
    { name: 'Turquía', flag: '🇹🇷' },
    { name: 'Ucrania', flag: '🇺🇦' },
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Uruguay', flag: '🇺🇾' },
    { name: 'Vietnam', flag: '🇻🇳' }
  ];

  const cities = [
    { name: 'Abu Dabi', flag: '🇦🇪', country: 'Emiratos Árabes' },
    { name: 'Ámsterdam', flag: '🇳🇱', country: 'Países Bajos' },
    { name: 'Antalya', flag: '🇹🇷', country: 'Turquía' },
    { name: 'Atenas', flag: '🇬🇷', country: 'Grecia' },
    { name: 'Bali', flag: '🇮🇩', country: 'Indonesia' },
    { name: 'Bangkok', flag: '🇹🇭', country: 'Tailandia' },
    { name: 'Barcelona', flag: '🇪🇸', country: 'España' },
    { name: 'Berlín', flag: '🇩🇪', country: 'Alemania' },
    { name: 'Bombay', flag: '🇮🇳', country: 'India' },
    { name: 'Boston', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Budapest', flag: '🇭🇺', country: 'Hungría' },
    { name: 'Cancún', flag: '🇲🇽', country: 'México' },
    { name: 'Chicago', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Dubái', flag: '🇦🇪', country: 'Emiratos Árabes' },
    { name: 'Dublín', flag: '🇮🇪', country: 'Irlanda' },
    { name: 'El Cairo', flag: '🇪🇬', country: 'Egipto' },
    { name: 'Estambul', flag: '🇹🇷', country: 'Turquía' },
    { name: 'Hawaii', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Honolulu', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Ibiza', flag: '🇪🇸', country: 'España' },
    { name: 'Las Vegas', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Lisboa', flag: '🇵🇹', country: 'Portugal' },
    { name: 'Londres', flag: '🇬🇧', country: 'Reino Unido' },
    { name: 'Los Ángeles', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Madrid', flag: '🇪🇸', country: 'España' },
    { name: 'Mallorca', flag: '🇪🇸', country: 'España' },
    { name: 'Manila', flag: '🇵🇭', country: 'Filipinas' },
    { name: 'Marrakech', flag: '🇲🇦', country: 'Marruecos' },
    { name: 'Melbourne', flag: '🇦🇺', country: 'Australia' },
    { name: 'Miami', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Milán', flag: '🇮🇹', country: 'Italia' },
    { name: 'Montreal', flag: '🇨🇦', country: 'Canadá' },
    { name: 'Moscú', flag: '🇷🇺', country: 'Rusia' },
    { name: 'Nueva York', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Osaka', flag: '🇯🇵', country: 'Japón' },
    { name: 'París', flag: '🇫🇷', country: 'Francia' },
    { name: 'Pekín', flag: '🇨🇳', country: 'China' },
    { name: 'Phuket', flag: '🇹🇭', country: 'Tailandia' },
    { name: 'Praga', flag: '🇨🇿', country: 'República Checa' },
    { name: 'Punta Cana', flag: '🇩🇴', country: 'República Dominicana' },
    { name: 'Roma', flag: '🇮🇹', country: 'Italia' },
    { name: 'San Francisco', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Seattle', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Seúl', flag: '🇰🇷', country: 'Corea del Sur' },
    { name: 'Shanghái', flag: '🇨🇳', country: 'China' },
    { name: 'Sídney', flag: '🇦🇺', country: 'Australia' },
    { name: 'Tenerife', flag: '🇪🇸', country: 'España' },
    { name: 'Tokio', flag: '🇯🇵', country: 'Japón' },
    { name: 'Toronto', flag: '🇨🇦', country: 'Canadá' },
    { name: 'Vancouver', flag: '🇨🇦', country: 'Canadá' },
    { name: 'Viena', flag: '🇦🇹', country: 'Austria' },
    { name: 'Washington D.C.', flag: '🇺🇸', country: 'Estados Unidos' },
    { name: 'Yakarta', flag: '🇮🇩', country: 'Indonesia' }
  ];

  const allDestinations = [
    ...popularDestinations,
    ...regionalPlans,
    ...countries.map(c => ({ ...c, type: 'País' })),
    ...cities.map(c => ({ ...c, type: 'Ciudad' }))
  ];

  const getFilteredDestinations = () => {
    // Si hay búsqueda, buscar en TODOS los destinos sin importar el filtro activo
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const results = allDestinations.filter(dest => 
        dest.name.toLowerCase().includes(query)
      );
      
      // Auto-cambiar el filtro según los resultados encontrados
      if (results.length > 0) {
        const firstResult = results[0];
        
        // Determinar a qué categoría pertenece el primer resultado
        if (popularDestinations.some(d => d.name === firstResult.name)) {
          if (activeFilter !== 'popular') setActiveFilter('popular');
        } else if (regionalPlans.some(d => d.name === firstResult.name)) {
          if (activeFilter !== 'regional') setActiveFilter('regional');
        } else if (countries.some(d => d.name === firstResult.name)) {
          if (activeFilter !== 'countries') setActiveFilter('countries');
        } else if (cities.some(d => d.name === firstResult.name)) {
          if (activeFilter !== 'cities') setActiveFilter('cities');
        }
      }
      
      return results;
    }
    
    // Si no hay búsqueda, mostrar según el filtro activo
    let destinations = [];
    
    switch(activeFilter) {
      case 'popular':
        destinations = popularDestinations;
        break;
      case 'regional':
        destinations = regionalPlans;
        break;
      case 'countries':
        destinations = countries.map(c => ({ ...c, type: 'País' }));
        break;
      case 'cities':
        destinations = cities.map(c => ({ ...c, type: 'Ciudad' }));
        break;
      case 'all':
        destinations = allDestinations;
        break;
      default:
        destinations = allDestinations;
    }

    return destinations;
  };

  const filteredDestinations = getFilteredDestinations();

  return (
    <div className="destinations-page">
      <Navbar />
      
      {/* Globe Feature Section */}
      <GlobeFeature />
      
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="container">
          <h1>Descubre nuestros más de <span className="highlight-orange">160 destinos</span> disponibles</h1>
          
          {/* Search Bar */}
          <div className="search-bar-large">
            <span className="search-icon-pin">📍</span>
            <input
              type="text"
              placeholder="¿A dónde viajas?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn-search-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${activeFilter === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveFilter('popular')}
            >
              Popular
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'regional' ? 'active' : ''}`}
              onClick={() => setActiveFilter('regional')}
            >
              Planes regionales
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'countries' ? 'active' : ''}`}
              onClick={() => setActiveFilter('countries')}
            >
              Países
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'cities' ? 'active' : ''}`}
              onClick={() => setActiveFilter('cities')}
            >
              Ciudades
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Todos los destinos
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="destinations-grid-section">
        <div className="container">
          <p className="results-count">
            Mostrando {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destino' : 'destinos'}
          </p>
          
          <div className="destinations-grid-page">
            {filteredDestinations.map((destination, index) => {
              const countryCode = getCountryCode(destination.name);
              return (
                <div 
                  key={index} 
                  className="destination-card-page"
                  onClick={() => {
                    if (window.navigateToDestinationDetail) {
                      window.navigateToDestinationDetail(destination.name);
                    }
                  }}
                >
                  <div className="destination-card-content">
                    <div className="destination-flag">
                      {countryCode ? (
                        <span className={`fi fi-${countryCode}`}></span>
                      ) : (
                        <span>🌍</span>
                      )}
                    </div>
                    <div className="destination-info">
                      <span className="destination-type">eSIM</span>
                      <h3 className="destination-name">{destination.name}</h3>
                      {destination.country && (
                        <span className="destination-country">{destination.country}</span>
                      )}
                    </div>
                  </div>
                  <button className="destination-arrow" aria-label={`Ver ${destination.name}`}>
                    →
                  </button>
                </div>
              );
            })}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="no-results">
              <p>No se encontraron destinos que coincidan con tu búsqueda</p>
              <button className="btn-clear-search" onClick={() => setSearchQuery('')}>
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DestinationsPage;
