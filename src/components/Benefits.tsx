import React, { useEffect, useRef } from 'react';
import './Benefits.css';

function Benefits() {
  const benefitsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    benefitsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: '🌍',
      title: 'Cobertura Global',
      description: 'Más de 150 países con conexión 4G/5G'
    },
    {
      icon: '⚡',
      title: 'Activación Instantánea',
      description: 'Conéctate en segundos al llegar a tu destino'
    },
    {
      icon: '💰',
      title: 'Sin Cargos Ocultos',
      description: 'Precio fijo, sin sorpresas en tu factura'
    },
    {
      icon: '📱',
      title: 'Múltiples Dispositivos',
      description: 'Comparte con hasta 5 dispositivos simultáneos'
    },
    {
      icon: '🔒',
      title: 'Conexión Segura',
      description: 'Cifrado de datos y navegación protegida'
    },
    {
      icon: '🎯',
      title: 'Sin Contratos',
      description: 'Paga solo por los días que necesites'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="section-header">
          <h2>¿Por qué elegir <span className="highlight">Siempre WiFi</span>?</h2>
          <p>Beneficios que marcan la diferencia</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
              ref={(el) => (benefitsRef.current[index] = el)}
            >
              <div className="benefit-icon">
                <span>{benefit.icon}</span>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
