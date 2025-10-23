import React, { useEffect, useRef } from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const stepsRef = useRef([]);

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

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      icon: '📱',
      title: 'Elige tu plan',
      description: 'Selecciona el plan que mejor se adapte a tus necesidades. Todos incluyen datos ilimitados.'
    },
    {
      number: 2,
      icon: '✍️',
      title: 'Completa el registro',
      description: 'Formulario rápido con tus datos. Pago seguro con tarjeta o transferencia.'
    },
    {
      number: 3,
      icon: '🚀',
      title: '¡Listo para navegar!',
      description: 'Recibe tu SIM en 24-48h o activa tu eSIM al instante. Soporte incluido.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>Activa tu servicio en <span className="highlight">3 simples pasos</span></h2>
          <p>Comienza a navegar en menos de 10 minutos</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="step-card"
                ref={(el) => (stepsRef.current[index] = el)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
