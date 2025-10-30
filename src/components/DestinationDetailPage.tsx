import React, { useState, useEffect } from "react";
import './DestinationDetailPage.css';
import Navbar from './Navbar';
import FAQ from './FAQ';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
function DestinationDetailPage({ destination = 'España', bookingData }: { destination?: string; bookingData?: any }) {
  const [activeTab, setActiveTab] = useState<string>('detalles');
  const [startDate, setStartDate] = useState<Date | null>(bookingData?.startDate || null);
  const [endDate, setEndDate] = useState<Date | null>(bookingData?.endDate || null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [quantity, setQuantity] = useState<number>(1);
  const [basePrice, setBasePrice] = useState<number>(bookingData?.price || 0);
  const [selectedSimType, setSelectedSimType] = useState<string>('esim');

  // Adjust image height to match right column
  useEffect(() => {
    const adjustImageHeight = () => {
      const rightColumn = document.querySelector('.detail-hero-right');
      const imageCard = document.querySelector('.destination-image-card');
      
      if (rightColumn && imageCard) {
        const rightHeight = rightColumn.getBoundingClientRect().height;
        // Use maxHeight instead of forcing an explicit height so the image
        // can stay within bounds without stretching layouts unexpectedly.
        (imageCard as HTMLElement).style.maxHeight = `${rightHeight}px`;
      }
    };

    adjustImageHeight();
    window.addEventListener('resize', adjustImageHeight);
    
    return () => window.removeEventListener('resize', adjustImageHeight);
  }, [startDate, endDate, quantity, activeTab]);

  // Datos de ejemplo para España (esto se puede hacer dinámico después)
  const destinationData = {
    name: destination,
    description: 'Mantente conectado durante tu viaje con nuestra eSIM',
    rating: 4.8,
    reviews: 2847,
    image: '🇪🇸', // Esto se puede reemplazar con una imagen real
  };

  const features = [
    {
      icon: '📱',
      title: 'Activación instantánea',
      description: 'Recibe tu eSIM por email y actívala en segundos desde tu dispositivo'
    },
    {
      icon: '🌐',
      title: 'Cobertura nacional',
      description: 'Conexión 4G/5G en todo el país con las mejores operadoras locales'
    },
    {
      icon: '💳',
      title: 'Sin costos ocultos',
      description: 'Precio fijo, sin cargos adicionales ni sorpresas en tu factura'
    },
    {
      icon: '🔒',
      title: 'Conexión segura',
      description: 'Navega con total seguridad y privacidad en redes confiables'
    }
  ];

  const detailEsimSteps = [
    {
      title: 'Selecciona destino y duración',
      description: 'Elige tu destino y la duración de tu viaje para adquirir tu eSIM. Confirma que tu teléfono sea compatible con la eSIM.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="18" r="0.9" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Recibe eSIM por email',
      description: 'Recibirás por email el código QR y las instrucciones para la instalación automática o manual.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Escanea o instala',
      description: 'Escanea el código QR en tu teléfono o sigue las instrucciones de la app para instalar la eSIM.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Activa en destino',
      description: `Al llegar a ${destination}, activa tu eSIM y comienza a navegar sin configuraciones complicadas.`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M2 12h20M12 2v20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Pagos y seguridad',
      description: 'Procesos de pago seguros y múltiples métodos disponibles para finalizar tu compra con confianza.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="6" y="9" width="4" height="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de soporte está disponible en todo momento y ofrecemos opciones de reembolso cuando aplica.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  // Calendar functions
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDayOfWeek = new Date(year, month, 1).getDay();
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const changeMonth = (direction: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date.getTime() < startDate.getTime()) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  const calculateDays = (): number => {
    if (startDate && endDate) {
      return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    }
    return bookingData?.days || 0;
  };

  // Calculate total price based on dates and quantity
  const calculateTotalPrice = () => {
    const days = calculateDays();
    
    // If no dates selected, price is 0
    if (!startDate || !endDate || days === 0) {
      return 0;
    }
    
    // Base price per day (you can adjust this formula)
    const pricePerDay = 15; // $15 USD per day
    const calculatedPrice = days * pricePerDay * quantity;
    
    // If coming from Hero with a price, use that as base
    if (basePrice > 0 && bookingData?.startDate && bookingData?.endDate) {
      return basePrice * quantity;
    }
    
    return calculatedPrice;
  };

  // Update base price when dates change
  useEffect(() => {
    if (startDate && endDate && !bookingData?.price) {
      const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const pricePerDay = 15;
      setBasePrice(days * pricePerDay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  // Quantity handlers
  const handleIncreaseQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCalendar) {
        const calendarElement = document.querySelector('.calendar-dropdown-detail');
        const target = event.target as HTMLElement;
        const inputElement = target?.closest('.date-input-wrapper');
        
        if (calendarElement && !calendarElement.contains(target) && !inputElement) {
          setShowCalendar(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  // IntersectionObserver to animate steps on entry (like the StyleGuide HowItWorks component)
  useEffect(() => {
    const elems = Array.from(document.querySelectorAll('.esim-step')) as HTMLElement[];
    if (!elems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    elems.forEach(e => observer.observe(e));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="destination-detail-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-content">
            {/* Left: Image */}
            <div className="detail-hero-left">
              <div className="destination-image-card">
                <img 
                  src="/images/hero-amigos-wifi.jpg" 
                  alt={`eSIM para ${destination}`}
                  className="destination-hero-image"
                />
              </div>
            </div>

            {/* Right: Info & Pricing */}
            <div className="detail-hero-right">
              <h1 className="detail-title-main">eSIM para {destination}</h1>
              
              <div className="detail-rating-row">
                <span className="rating-label-main">Excelente</span>
                <div className="stars-main">
                  {'★'.repeat(5)}
                </div>
                <span className="rating-text">Basado en {destinationData.reviews.toLocaleString()} reseñas en</span>
                <span className="trustpilot-badge">Trustpilot</span>
              </div>

              <div className="tabs-container">
                <div className="tabs-left">
                  <div className="info-tabs">
                    <button 
                      className={`info-tab ${activeTab === 'detalles' ? 'active' : ''}`}
                      onClick={() => setActiveTab('detalles')}
                    >
                      Detalles de eSIM
                    </button>
                    <button 
                      className={`info-tab ${activeTab === 'cobertura' ? 'active' : ''}`}
                      onClick={() => setActiveTab('cobertura')}
                    >
                      Cobertura
                    </button>
                  </div>
                </div>
                <div className="tabs-right">
                  <button className="btn-verify-compatibility">
                    Verificar compatibilidad
                    <svg 
                      className="verify-icon" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M13 3L6 10L3 7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Tab Content: Detalles de eSIM */}
              {activeTab === 'detalles' && (
                <div className="tab-content">
                  <div className="features-list-main">
                    <div className="feature-item-main">
                      <span className="feature-icon-main">∞</span>
                      <span className="feature-text-main">Datos ilimitados</span>
                    </div>
                    <div className="feature-item-main">
                      <span className="feature-icon-main">⚡</span>
                      <span className="feature-text-main">Internet rápido y confiable</span>
                    </div>
                    <div className="feature-item-main">
                      <span className="feature-icon-main">📵</span>
                      <span className="feature-text-main">No más cargos por roaming</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Cobertura */}
              {activeTab === 'cobertura' && (
                <div className="tab-content">
                  <div className="features-list-main">
                    <div className="feature-item-main">
                      <span className="feature-icon-main">⚡</span>
                      <span className="feature-text-main">Cobertura 4G LTE y 5G</span>
                    </div>
                    <div className="feature-item-main">
                      <span className="feature-icon-main">📶</span>
                      <span className="feature-text-main">Operadora principal de {destination}</span>
                    </div>
                    <div className="feature-item-main">
                      <span className="feature-icon-main">🌍</span>
                      <span className="feature-text-main">Cobertura nacional completa</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing Card Compact */}
              <div className="pricing-card-compact">
                <div className="pricing-card-header">
                  <h3 className="pricing-title">Disfruta de datos ilimitados</h3>
                  <div className="price-display">
                    <span className="price-main">${calculateTotalPrice()}</span>
                    <span className="price-currency-main">USD</span>
                  </div>
                </div>

                <div className="selector-group">
                  <label className="selector-label">Selecciona tus fechas</label>
                  <p className="selector-hint">Elige la fecha de inicio y fin de tu plan</p>
                  <div className="date-input-wrapper" onClick={() => setShowCalendar(!showCalendar)}>
                    <div className="date-input-detail">
                      <svg className="calendar-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 2V5M14 2V5M3 8H17M4 4H16C16.5523 4 17 4.44772 17 5V17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17V5C3 4.44772 3.44772 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="date-text-detail">
                        {startDate && endDate ? (
                          <>
                            <span>{formatDate(startDate)}</span>
                            <span className="date-separator">→</span>
                            <span>{formatDate(endDate)}</span>
                            <span className="days-count">({calculateDays()} días)</span>
                          </>
                        ) : (
                          <span className="placeholder-text">Selecciona fechas</span>
                        )}
                      </div>
                    </div>
                    {showCalendar && (
                      <div className="calendar-dropdown-detail" onMouseDown={(e) => e.preventDefault()}>
                        <div className="calendar-navigation">
                          <button onClick={(e) => { e.stopPropagation(); changeMonth(-1); }} className="calendar-nav">‹</button>
                          <button onClick={(e) => { e.stopPropagation(); changeMonth(1); }} className="calendar-nav">›</button>
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
                                  const disabled = date.getTime() < new Date().setHours(0, 0, 0, 0);
                                  const selected = (startDate && date.toDateString() === startDate.toDateString()) || (endDate && date.toDateString() === endDate.toDateString());
                                  const inRange = startDate && endDate && date.getTime() > startDate.getTime() && date.getTime() < endDate.getTime();
                                  
                                  days.push(
                                    <div
                                      key={`m1-${day}`}
                                      className={`calendar-day ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''} ${inRange ? 'in-range' : ''}`}
                                      onClick={(e) => { e.stopPropagation(); if (!disabled) handleDateClick(date); }}
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
                                  const disabled = date.getTime() < new Date().setHours(0, 0, 0, 0);
                                  const selected = (startDate && date.toDateString() === startDate.toDateString()) || (endDate && date.toDateString() === endDate.toDateString());
                                  const inRange = startDate && endDate && date.getTime() > startDate.getTime() && date.getTime() < endDate.getTime();
                                  
                                  days.push(
                                    <div
                                      key={`m2-${day}`}
                                      className={`calendar-day ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''} ${inRange ? 'in-range' : ''}`}
                                      onClick={(e) => { e.stopPropagation(); if (!disabled) handleDateClick(date); }}
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
                      </div>
                    )}
                  </div>
                </div>

                <div className="selector-group">
                  <label className="selector-label">Número de eSIMs</label>
                  <p className="selector-hint">¿Cuántos viajeros?</p>
                  <div className="quantity-selector">
                    <button 
                      className={`qty-btn ${quantity === 1 ? 'disabled' : ''}`}
                      onClick={handleDecreaseQuantity}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <input type="number" className="qty-input" value={quantity} readOnly />
                    <button 
                      className={`qty-btn ${quantity === 20 ? 'disabled' : ''}`}
                      onClick={handleIncreaseQuantity}
                      disabled={quantity === 20}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="total-row">
                  <span className="total-label">Total</span>
                  <span className="total-price">${calculateTotalPrice()} USD</span>
                </div>

                {selectedSimType && (
                  <div className="detail-sim-selection">
                    <span className="sim-selection-icon">{selectedSimType === 'fisica' ? '📱' : '📲'}</span>
                    <span className="sim-selection-text">{selectedSimType === 'fisica' ? 'SIM Física' : 'eSIM'}</span>
                  </div>
                )}

                <button className="btn-buy-main">
                  Obtén internet ilimitado
                </button>
              </div>
            </div>

            {/* Info and Payment Section - Below Right Column */}
            <div className="hero-bottom-info">
              {/* eSIM Info Message */}
              <div className="esim-info-message">
                <span className="info-icon">📱</span>
                <p className="info-text">
                  Instala tu eSIM antes o durante tu viaje. Tu plan comenzará una vez que llegues a tu destino y actives tu eSIM.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="payment-methods">
                <div className="payment-label">
                  <span className="secure-icon">🔒</span>
                  <span>Pago Seguro</span>
                </div>
                <div className="payment-logos">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="payment-logo" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="payment-logo" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="payment-logo" />
                  <span className="payment-text">Google Pay</span>
                  <span className="payment-text">Apple Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conexión rápida y confiable */}
      <section className="connection-section">
        <div className="container">
          <h2 className="section-title-center">Conexión rápida y confiable</h2>
          <div className="connection-grid">
            <div className="connection-features">
              <div className="connection-item">
                <div className="connection-icon-wrapper whatsapp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="connection-logo">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <p className="connection-text">Videollamadas claras y sin retrasos</p>
              </div>
              <div className="connection-item">
                <div className="connection-icon-wrapper instagram-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="connection-logo">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <p className="connection-text">Comparte historias en solo segundos</p>
              </div>
              <div className="connection-item">
                <div className="connection-icon-wrapper tiktok-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="connection-logo">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <p className="connection-text">Disfruta creando contenido de video y subiéndolo súper rápido</p>
              </div>
              <div className="connection-item">
                <div className="connection-icon-wrapper maps-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="connection-logo">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="connection-text">¡Encuentra tu camino donde sea que vayas!</p>
              </div>
            </div>
            <div className="connection-apps">
              <h3 className="apps-title">El mejor rendimiento en todas las apps</h3>
              <p className="apps-description">
                Descubre la libertad de una conexión confiable con alta velocidad 4G y 5G. Siempre<span className="logo-highlight">WiFi</span> te mantiene conectado, ¡sin importar la aventura!
              </p>
              <div className="apps-icons">
                <div className="app-icon-box uber-box">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="app-logo">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.174 14.326h-1.058v-4.652h-3.116v4.652h-1.058v-4.652H8.826v4.652H7.768V8.718h1.058v4.61h3.116v-4.61h1.058v4.61h3.116v-4.61h1.058v5.608z"/>
                  </svg>
                </div>
                <div className="app-icon-box facebook-box">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="app-logo">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="app-icon-box spotify-box">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="app-logo">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div className="app-icon-box airbnb-box">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="app-logo">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm5.1-13.9c-.4-.4-1-.4-1.4 0L12 11.8 8.3 8.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.4 4.4c.2.2.4.3.7.3s.5-.1.7-.3l4.4-4.4c.4-.4.4-1 0-1.4z"/>
                  </svg>
                </div>
                <div className="app-icon-box gmail-box">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="app-logo">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable HowItWorks component (replaces inline markup) */}
      <HowItWorks destination={destination} steps={detailEsimSteps} showNumbers={false} />

      {/* Ventajas de usar la eSIM */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title-center">Ventajas de usar la eSIM de Siempre<span className="logo-highlight">WiFi</span> en {destination}</h2>
          <div className="advantages-hero">
            <div className="advantages-hero-image">💰</div>
            <div className="advantages-hero-content">
              <h3 className="advantages-hero-title">¿Cambio de planes? ¡Ningún problema!</h3>
              <p className="advantages-hero-text">
                Compra tu eSIM de Siempre<span className="logo-highlight">WiFi</span> para {destination} con total tranquilidad. Si tus planes cambian, puedes solicitar un reembolso.
              </p>
              <button className="advantages-hero-btn">Conoce más aquí</button>
            </div>
          </div>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">💬</div>
              <h3 className="advantage-title">Mantén tu número de WhatsApp</h3>
              <p className="advantage-text">
                Sigue usando tu número de WhatsApp mientras usas tu eSIM para datos. No pierdes tu contacto con amigos y familia.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📱</div>
              <h3 className="advantage-title">La Mejor eSIM para {destination}</h3>
              <p className="advantage-text">
                Nuestra eSIM para {destination} te ofrece la mejor cobertura y velocidad. Disfruta de internet sin preocupaciones.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">♾️</div>
              <h3 className="advantage-title">Planes de datos ilimitados</h3>
              <p className="advantage-text">
                Olvídate de quedarte sin datos. Con nuestros planes ilimitados, navega sin límites durante todo tu viaje.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🛡️</div>
              <h3 className="advantage-title">Soporte al cliente 24/7</h3>
              <p className="advantage-text">
                Estamos aquí para ayudarte en cualquier momento. Nuestro equipo de soporte está disponible 24 horas al día, 7 días a la semana.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">⚡</div>
              <h3 className="advantage-title">Entrega inmediata</h3>
              <p className="advantage-text">
                Recibe tu eSIM por email en menos de 2 minutos. No esperes, comienza a disfrutar de internet de inmediato.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📶</div>
              <h3 className="advantage-title">Comparte tus datos con familiares y amigos</h3>
              <p className="advantage-text">
                Activa el hotspot y comparte tu conexión con tus seres queridos. Todos conectados sin costo adicional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="comparison-title">¿Por qué elegirnos?</h2>
          <p className="comparison-subtitle">Solo Siempre<span className="logo-highlight">WiFi</span> ofrece un servicio premium de calidad.</p>
          
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-header-cell"></div>
              <div className="comparison-header-cell highlight">eSIM Siempre<span className="logo-highlight">WiFi</span></div>
              <div className="comparison-header-cell">Proveedor local</div>
              <div className="comparison-header-cell">eSIM con datos limitados</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">
                <span className="feature-icon-comp">∞</span>
                <span>Datos ilimitados</span>
              </div>
              <div className="comparison-cell highlight">
                <span className="check-icon">✓</span>
              </div>
              <div className="comparison-cell">
                <span className="cross-icon">✕</span>
              </div>
              <div className="comparison-cell">
                <span className="cross-icon">✕</span>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">
                <span className="feature-icon-comp">💰</span>
                <span>Sin tarifas ocultas</span>
              </div>
              <div className="comparison-cell highlight">
                <span className="check-icon">✓</span>
              </div>
              <div className="comparison-cell">
                <span className="cross-icon">✕</span>
              </div>
              <div className="comparison-cell">
                <span className="cross-icon">✕</span>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">
                <span className="feature-icon-comp">⚡</span>
                <span>Conexión instantánea</span>
              </div>
              <div className="comparison-cell highlight">
                <span className="check-icon">✓</span>
              </div>
              <div className="comparison-cell">
                <span className="cross-icon">✕</span>
              </div>
              <div className="comparison-cell">
                <span className="check-icon">✓</span>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">
                <span className="feature-icon-comp">📶</span>
                <span>Cobertura rápida y confiable</span>
              </div>
              <div className="comparison-cell highlight">
                <span className="check-icon">✓</span>
              </div>
              <div className="comparison-cell">
                <span className="check-icon">✓</span>
              </div>
              <div className="comparison-cell">
                <span className="cross-icon">✕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="cta-section-detail">
        <div className="container">
          <div className="cta-content-detail">
            <h2>¿Listo para tu viaje a {destination}?</h2>
            <p>Compra tu eSIM ahora y recíbela al instante por email</p>
            <button className="btn-cta-detail" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Ver planes
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DestinationDetailPage;
