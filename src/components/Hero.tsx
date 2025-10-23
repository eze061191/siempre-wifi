import React, { useState, useEffect } from 'react';
import './Hero.css';
import { getCountryCode } from '../utils/countryFlags';

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const destinations = [
    'Abu Dabi', 'África', 'Alaska', 'Albania', 'Alemania', 'América Central', 'América Latina',
    'Ámsterdam', 'Andorra', 'Anguila', 'Antalya', 'Antigua y Barbuda', 'Antillas Neerlandesas',
    'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Aruba', 'Asia', 'Atenas', 'Australia',
    'Austria', 'Azerbaiyán', 'Azores', 'Bahamas', 'Bahréin', 'Balcanes', 'Bali', 'Bangkok',
    'Bangladesh', 'Barbados', 'Barcelona', 'Bélgica', 'Belice', 'Benín', 'Berlín', 'Bermudas',
    'Bielorrusia', 'Bolivia', 'Bombay', 'Bonaire', 'Bosnia y Herzegovina', 'Boston', 'Botsuana',
    'Brasil', 'Brunei', 'Budapest', 'Bulgaria', 'Burkina Faso', 'California', 'Camboya', 'Camerún',
    'Canadá', 'Cancún', 'Caribe', 'Catar', 'Chad', 'Chicago', 'Chile', 'China', 'China, Hong Kong, Macao',
    'Chipre', 'Chipre del Norte', 'Ciudad del Cabo', 'Colombia', 'Corea del Sur', 'Costa de Marfil',
    'Costa Rica', 'Croacia', 'Curazao', 'Dinamarca', 'Dominica', 'Dubái', 'Dublín', 'Ecuador',
    'Egipto', 'El Cairo', 'El Salvador', 'Emiratos Árabes', 'Escandinavia', 'Eslovaquia', 'Eslovenia',
    'España', 'Estados Unidos', 'Estambul', 'Estonia', 'Eswatini (Suazilandia)', 'Europa', 'Europa del Este',
    'Fiji', 'Filipinas', 'Finlandia', 'Florida', 'Francia', 'Gabón', 'Georgia', 'Ghana', 'Gibraltar',
    'Global', 'Granada', 'Grecia', 'Guadalupe', 'Guam', 'Guatemala', 'Guayana Francesa', 'Guernsey',
    'Guinea', 'Guinea-Bisáu', 'Guyana', 'Haití', 'Hawaii', 'Honduras', 'Hong Kong', 'Honolulu',
    'Hungría', 'Ibiza', 'India', 'Indonesia', 'Irán', 'Irlanda', 'Isla de Man', 'Islandia',
    'Islas Aland', 'Islas Baleares', 'Islas Caimán', 'Islas Canarias', 'Islas Feroe', 'Islas Turcas y Caicos',
    'Islas Vírgenes Británicas', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Japón y China', 'Japón y Corea del Sur',
    'Jersey', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Kosovo', 'Kuala Lumpur', 'Kuwait',
    'Laos', 'Las Vegas', 'Letonia', 'Liberia', 'Liechtenstein', 'Lisboa', 'Lituania', 'Londres',
    'Los Ángeles', 'Luxemburgo', 'Macao', 'Macedonia del Norte', 'Madagascar', 'Madeira', 'Madrid',
    'Malasia', 'Malawi', 'Maldivas', 'Malí', 'Mallorca', 'Malta', 'Manila', 'Marrakech', 'Marruecos',
    'Martinica', 'Mauricio', 'Mayotte', 'Medellín', 'Melbourne', 'México', 'Miami', 'Milán',
    'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Montreal', 'Montserrat', 'Moscú', 'Mozambique',
    'Myanmar', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Norteamérica', 'Noruega', 'Nueva York',
    'Nueva Zelanda', 'Oceanía', 'Omán', 'Oriente Medio', 'Osaka', 'Países Bajos', 'Pakistán',
    'Palestina', 'Panamá', 'Papeete', 'Papua Nueva Guinea', 'Paraguay', 'París', 'Pekín', 'Perú',
    'Phuket', 'Polinesia Francesa', 'Polonia', 'Portugal', 'Praga', 'Puerto Rico', 'Punta Cana',
    'Reino Unido', 'República Centroafricana', 'República Checa', 'República del Congo', 'República Democrática del Congo',
    'República Dominicana', 'Reunión', 'Roma', 'Ruanda', 'Rumania', 'Rusia', 'San Bartolomé',
    'San Cristóbal y Nieves', 'San Diego', 'San Francisco', 'San Martín', 'San Pedro y Miquelón',
    'San Vicente y las Granadinas', 'Santa Lucía', 'Seattle', 'Senegal', 'Serbia', 'Seúl',
    'Seychelles', 'Shanghái', 'Sídney', 'Sierra Leona', 'Singapur', 'Sri Lanka', 'Sudáfrica',
    'Sudán', 'Suecia', 'Suiza', 'Surinam', 'Tailandia', 'Taiwán', 'Tanzania', 'Tayikistán',
    'Tenerife', 'Tokio', 'Tonga', 'Toronto', 'Trinidad y Tobago', 'Túnez', 'Turquía', 'Ucrania',
    'Uganda', 'Uruguay', 'Uzbekistán', 'Vancouver', 'Vanuatu', 'Viena', 'Vietnam', 'Washington D.C.',
    'Yakarta', 'Yemen', 'Zambia'
  ];

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCalendar) {
        const calendarElement = document.querySelector('.calendar-dropdown');
        const inputElement = event.target.closest('.input-group-wrapper');
        
        if (calendarElement && !calendarElement.contains(event.target) && !inputElement) {
          setShowCalendar(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredDestinations([]);
      setShowSuggestions(false);
    } else {
      const filtered = destinations.filter(dest =>
        dest.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Mostrar máximo 8 sugerencias
      setFilteredDestinations(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSelectDestination = (destination) => {
    setSearchQuery(destination);
    setShowSuggestions(false);
  };

  // Calendar functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateInRange = (date) => {
    if (!startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const isDateSelected = (date) => {
    if (!startDate && !endDate) return false;
    const dateTime = date.getTime();
    const startTime = startDate?.getTime();
    const endTime = endDate?.getTime();
    return dateTime === startTime || dateTime === endTime;
  };

  const handleDateClick = (date) => {
    if (isDateDisabled(date)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      // No cerrar el calendario, mantenerlo abierto
    } else if (date < startDate) {
      setStartDate(date);
      setEndDate(null);
      // No cerrar el calendario
    } else {
      setEndDate(date);
      // No cerrar el calendario después de seleccionar la segunda fecha
      // El usuario puede cerrar manualmente o hacer clic fuera
    }
  };

  const formatDateRange = () => {
    if (!startDate) return '';
    if (!endDate) return `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
    
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    
    // Si los días son 0 o negativos, no mostrar nada (volver al placeholder)
    if (days <= 0) return '';
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const startDay = startDate.getDate();
    const startMonth = monthNames[startDate.getMonth()];
    const endDay = endDate.getDate();
    const endMonth = monthNames[endDate.getMonth()];
    
    return `${startDay} ${startMonth} → ${endDay} ${endMonth} (${days} día${days !== 1 ? 's' : ''})`;
  };

  const changeMonth = (increment) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
  };

  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
                      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  const scrollToPlans = () => {
    const plansSection = document.getElementById('planes');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Viaja conectado a más de <span className="highlight">160 países</span> sin cambiar de SIM
            </h1>
            <p className="hero-subtitle">
              Internet 4G LTE ilimitado desde el momento que aterrizas. Sin sorpresas, sin roaming.
            </p>
            
            <div className="hero-rating">
              <div className="stars">★★★★★</div>
              <span className="rating-text">4.8/5 - Más de 15,000 viajeros conectados</span>
            </div>

            <div className="hero-cta">
              <button className="btn-primary" onClick={scrollToPlans}>
                Ver Planes y Precios
              </button>
              <button className="btn-secondary-outline" onClick={scrollToPlans}>
                Cómo Funciona
              </button>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Activación Instantánea</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Sin Contratos</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>Soporte 24/7</span>
              </div>
            </div>

            <div className="hero-search">
              <h3>Encuentra tu plan ideal</h3>
              <div className="search-inputs">
                <div className="input-group-wrapper">
                  <div className="input-group">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 10H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 2C12.5013 4.73835 13.9228 8.29203 14 12C13.9228 15.708 12.5013 19.2616 10 22C7.49872 19.2616 6.07725 15.708 6 12C6.07725 8.29203 7.49872 4.73835 10 2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input 
                      type="text" 
                      placeholder="¿A dónde viajas?" 
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => searchQuery && setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    />
                  </div>
                  {showSuggestions && filteredDestinations.length > 0 && (
                    <div className="suggestions-dropdown">
                      {filteredDestinations.map((destination, index) => {
                        const countryCode = getCountryCode(destination);
                        return (
                          <div
                            key={index}
                            className="suggestion-item"
                            onClick={() => handleSelectDestination(destination)}
                          >
                            <span className="suggestion-icon">
                              {countryCode ? (
                                <span className={`fi fi-${countryCode}`}></span>
                              ) : (
                                <span>🌍</span>
                              )}
                            </span>
                            {destination}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="input-group-wrapper">
                  <div className="input-group" onClick={() => setShowCalendar(!showCalendar)}>
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6 2V5M14 2V5M3 8H17M4 4H16C16.5523 4 17 4.44772 17 5V17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17V5C3 4.44772 3.44772 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="date-text-hero">
                      {startDate && endDate ? (
                        <>
                          <span>{startDate.getDate()} {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][startDate.getMonth()]}</span>
                          <span className="date-separator">→</span>
                          <span>{endDate.getDate()} {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][endDate.getMonth()]}</span>
                          <span className="days-count">({Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))} días)</span>
                        </>
                      ) : (
                        <span className="placeholder-text">¿Por cuántos días?</span>
                      )}
                    </div>
                  </div>
                  {showCalendar && (
                    <div className="calendar-dropdown" onMouseDown={(e) => e.preventDefault()}>
                      <h4 className="calendar-title">Elige la fecha de tu plan</h4>
                      <div className="calendar-info">
                        <span className="info-icon">⚠️</span>
                        <span className="info-text">
                          Tu plan comenzará una vez que llegues a tu destino y actives tu eSIM.
                        </span>
                      </div>
                      <div className="calendar-navigation">
                        <button onClick={() => changeMonth(-1)} className="calendar-nav">‹</button>
                        <button onClick={() => changeMonth(1)} className="calendar-nav">›</button>
                      </div>
                      <div className="calendar-months-container">
                        {/* Primer mes */}
                        <div className="calendar-month-wrapper">
                          <div className="calendar-header">
                            <span className="calendar-month">
                              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </span>
                          </div>
                          <div className="calendar-weekdays">
                            <div>Do</div>
                            <div>Lu</div>
                            <div>Ma</div>
                            <div>Mi</div>
                            <div>Ju</div>
                            <div>Vi</div>
                            <div>Sá</div>
                          </div>
                          <div className="calendar-days">
                            {(() => {
                              const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
                              const days = [];
                              
                              for (let i = 0; i < startingDayOfWeek; i++) {
                                days.push(<div key={`m1-empty-${i}`} className="calendar-day empty"></div>);
                              }
                              
                              for (let day = 1; day <= daysInMonth; day++) {
                                const date = new Date(year, month, day);
                                const disabled = isDateDisabled(date);
                                const selected = isDateSelected(date);
                                const inRange = isDateInRange(date);
                                
                                days.push(
                                  <div
                                    key={`m1-${day}`}
                                    className={`calendar-day ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''} ${inRange ? 'in-range' : ''}`}
                                    onClick={() => handleDateClick(date)}
                                  >
                                    {day}
                                  </div>
                                );
                              }
                              
                              return days;
                            })()}
                          </div>
                        </div>
                        
                        {/* Segundo mes */}
                        <div className="calendar-month-wrapper">
                          <div className="calendar-header">
                            <span className="calendar-month">
                              {monthNames[new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1).getMonth()]} {new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1).getFullYear()}
                            </span>
                          </div>
                          <div className="calendar-weekdays">
                            <div>Do</div>
                            <div>Lu</div>
                            <div>Ma</div>
                            <div>Mi</div>
                            <div>Ju</div>
                            <div>Vi</div>
                            <div>Sá</div>
                          </div>
                          <div className="calendar-days">
                            {(() => {
                              const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
                              const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(nextMonth);
                              const days = [];
                              
                              for (let i = 0; i < startingDayOfWeek; i++) {
                                days.push(<div key={`m2-empty-${i}`} className="calendar-day empty"></div>);
                              }
                              
                              for (let day = 1; day <= daysInMonth; day++) {
                                const date = new Date(year, month, day);
                                const disabled = isDateDisabled(date);
                                const selected = isDateSelected(date);
                                const inRange = isDateInRange(date);
                                
                                days.push(
                                  <div
                                    key={`m2-${day}`}
                                    className={`calendar-day ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''} ${inRange ? 'in-range' : ''}`}
                                    onClick={() => handleDateClick(date)}
                                  >
                                    {day}
                                  </div>
                                );
                              }
                              
                              return days;
                            })()}
                          </div>
                        </div>
                      </div>
                      {searchQuery && startDate && endDate && Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) > 0 && (
                        <div className="calendar-summary">
                          <div className="summary-content">
                            <div className="summary-header">
                              <span className="summary-title">Plan de {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))} días</span>
                            </div>
                            <div className="summary-dates">
                              <span className="summary-date">
                                {startDate.getDate()}-{startDate.getMonth() + 1}-{startDate.getFullYear().toString().slice(-2)}
                              </span>
                              <span className="summary-separator">→</span>
                              <span className="summary-date">
                                {endDate.getDate()}-{endDate.getMonth() + 1}-{endDate.getFullYear().toString().slice(-2)}
                              </span>
                            </div>
                            <div className="summary-price">
                              <span className="price-label">Total:</span>
                              <span className="price-amount">${(() => {
                                const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
                                const pricePerDay = 15;
                                return (days * pricePerDay).toFixed(2);
                              })()} USD</span>
                              <span className="price-detail">${15}/día</span>
                            </div>
                          </div>
                          <button className="btn-apply-animated" onClick={() => {
                            const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
                            const pricePerDay = 15;
                            const totalPrice = days * pricePerDay;
                            
                            window.navigateToDestinationDetail(searchQuery, {
                              destination: searchQuery,
                              startDate: startDate,
                              endDate: endDate,
                              days: days,
                              price: totalPrice
                            });
                          }}>
                            <span className="btn-text">Aplicar</span>
                            <span className="btn-icon-wrapper">
                              <svg className="btn-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-visual-new">
              <img 
                src="/images/conectividad-global.jpg" 
                alt="Conectividad global Siempre WiFi" 
                className="hero-main-image-new"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
