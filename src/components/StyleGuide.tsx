import React, { useState } from 'react';
import './StyleGuide.css';
import Navbar from './Navbar';
import FAQ from './FAQ';
import HowItWorks from './HowItWorks';

function StyleGuide() {
  const [copiedColor, setCopiedColor] = useState('');

  const colors = {
    primary: [
      { name: 'Naranja Principal', hex: '#F78700', usage: 'Botones primarios, CTAs, elementos destacados' },
      { name: 'Naranja Hover', hex: '#D67300', usage: 'Estados hover de botones primarios' },
      { name: 'Naranja Claro', hex: '#FFF7ED', usage: 'Fondos de alertas, highlights, rangos de calendario' },
      { name: 'Naranja Borde', hex: '#FDBA74', usage: 'Bordes de alertas y mensajes informativos' },
    ],
    neutral: [
      { name: 'Negro', hex: '#000000', usage: 'Títulos principales, textos importantes' },
      { name: 'Gris Oscuro', hex: '#374151', usage: 'Textos secundarios, contenido general' },
      { name: 'Gris Medio', hex: '#4B5563', usage: 'Subtítulos, descripciones' },
      { name: 'Gris', hex: '#6B7280', usage: 'Textos terciarios, labels' },
      { name: 'Gris Claro', hex: '#9CA3AF', usage: 'Placeholders, textos deshabilitados' },
      { name: 'Gris Muy Claro', hex: '#D1D5DB', usage: 'Bordes, separadores' },
      { name: 'Gris Fondo', hex: '#E5E7EB', usage: 'Bordes sutiles, divisores' },
      { name: 'Fondo Claro', hex: '#F3F4F6', usage: 'Fondos secundarios, cards' },
      { name: 'Fondo Muy Claro', hex: '#F9FAFB', usage: 'Fondos de secciones, inputs' },
      { name: 'Blanco', hex: '#FFFFFF', usage: 'Fondo principal, cards, modales' },
    ],
    accent: [
      { name: 'Verde Check', hex: '#10B981', usage: 'Checkmarks, estados de éxito' },
      { name: 'Marrón Oscuro', hex: '#92400E', usage: 'Textos en alertas naranjas' },
    ]
  };

  const typography = [
    { name: 'Hero Title', size: '3.5rem', weight: '800', lineHeight: '1.15', usage: 'Títulos principales del Hero' },
    { name: 'Section Title', size: '2.5rem', weight: '800', lineHeight: '1.2', usage: 'Títulos de secciones' },
    { name: 'Subtitle Large', size: '1.25rem', weight: '600', lineHeight: '1.6', usage: 'Subtítulos grandes' },
    { name: 'Subtitle', size: '1.125rem', weight: '600', lineHeight: '1.6', usage: 'Subtítulos estándar' },
    { name: 'Body Large', size: '1.125rem', weight: '400', lineHeight: '1.6', usage: 'Texto de cuerpo grande' },
    { name: 'Body', size: '1rem', weight: '400', lineHeight: '1.6', usage: 'Texto de cuerpo estándar' },
    { name: 'Body Small', size: '0.875rem', weight: '400', lineHeight: '1.5', usage: 'Texto pequeño' },
    { name: 'Caption', size: '0.8125rem', weight: '500', lineHeight: '1.5', usage: 'Captions, detalles' },
    { name: 'Label', size: '0.75rem', weight: '600', lineHeight: '1.4', usage: 'Labels, tags' },
  ];

  const spacing = [
    { name: 'XS', value: '0.25rem', pixels: '4px' },
    { name: 'SM', value: '0.5rem', pixels: '8px' },
    { name: 'MD', value: '0.75rem', pixels: '12px' },
    { name: 'LG', value: '1rem', pixels: '16px' },
    { name: 'XL', value: '1.5rem', pixels: '24px' },
    { name: '2XL', value: '2rem', pixels: '32px' },
    { name: '3XL', value: '3rem', pixels: '48px' },
    { name: '4XL', value: '4rem', pixels: '64px' },
  ];

  const borderRadius = [
    { name: 'Small', value: '4px', usage: 'Botones pequeños, tags' },
    { name: 'Medium', value: '8px', usage: 'Botones, inputs, cards' },
    { name: 'Large', value: '12px', usage: 'Modales, dropdowns' },
    { name: 'XLarge', value: '20px', usage: 'Imágenes destacadas' },
    { name: '2XLarge', value: '24px', usage: 'Hero images' },
    { name: 'Full', value: '50px', usage: 'Pills, badges circulares' },
  ];

  const shadows = [
    { name: 'Small', value: '0 1px 2px rgba(0, 0, 0, 0.05)', usage: 'Elementos sutiles' },
    { name: 'Medium', value: '0 4px 6px rgba(0, 0, 0, 0.1)', usage: 'Cards, botones' },
    { name: 'Large', value: '0 10px 15px rgba(0, 0, 0, 0.1)', usage: 'Modales, dropdowns' },
    { name: 'XLarge', value: '0 20px 25px rgba(0, 0, 0, 0.15)', usage: 'Calendarios, popovers' },
    { name: 'Orange', value: '0 10px 40px rgba(247, 135, 0, 0.15)', usage: 'Elementos destacados naranjas' },
    { name: 'Orange Hover', value: '0 4px 12px rgba(247, 135, 0, 0.3)', usage: 'Hover en botones naranjas' },
  ];

  const animations = [
    { name: 'fadeInScale', duration: '1s', easing: 'ease-out', usage: 'Entrada de imágenes' },
    { name: 'slideDown', duration: '0.2s', easing: 'ease', usage: 'Dropdowns hacia abajo' },
    { name: 'slideUp', duration: '0.2s', easing: 'ease', usage: 'Calendarios hacia arriba' },
    { name: 'float', duration: '3s', easing: 'ease-in-out', usage: 'Elementos flotantes' },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  return (
    <div className="style-guide">
      <Navbar />
      <div className="style-guide-header">
        <div className="container">
          <h1>Guía de Estilos <span className="highlight">SiempreWiFi</span></h1>
          <p className="guide-subtitle">Sistema de diseño y componentes para el desarrollo del sitio web</p>
        </div>
      </div>

      <div className="container">
        {/* Colores */}
        <section className="guide-section">
          <h2 className="section-title">🎨 Paleta de Colores</h2>
          
          <h3 className="subsection-title">Colores Primarios</h3>
          <div className="color-grid">
            {colors.primary.map((color, index) => (
              <div key={index} className="color-card" onClick={() => copyToClipboard(color.hex)}>
                <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
                <div className="color-info">
                  <h4>{color.name}</h4>
                  <p className="color-hex">{color.hex}</p>
                  <p className="color-usage">{color.usage}</p>
                  {copiedColor === color.hex && <span className="copied-badge">✓ Copiado</span>}
                </div>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Colores Neutrales</h3>
          <div className="color-grid">
            {colors.neutral.map((color, index) => (
              <div key={index} className="color-card" onClick={() => copyToClipboard(color.hex)}>
                <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
                <div className="color-info">
                  <h4>{color.name}</h4>
                  <p className="color-hex">{color.hex}</p>
                  <p className="color-usage">{color.usage}</p>
                  {copiedColor === color.hex && <span className="copied-badge">✓ Copiado</span>}
                </div>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Colores de Acento</h3>
          <div className="color-grid">
            {colors.accent.map((color, index) => (
              <div key={index} className="color-card" onClick={() => copyToClipboard(color.hex)}>
                <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
                <div className="color-info">
                  <h4>{color.name}</h4>
                  <p className="color-hex">{color.hex}</p>
                  <p className="color-usage">{color.usage}</p>
                  {copiedColor === color.hex && <span className="copied-badge">✓ Copiado</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tipografía */}
        <section className="guide-section">
          <h2 className="section-title">📝 Tipografía</h2>
          <p className="section-description">Fuente: <strong>Inter</strong> (Google Fonts)</p>
          
          <div className="typography-grid">
            {typography.map((type, index) => (
              <div key={index} className="typography-card">
                <div className="typography-sample" style={{ 
                  fontSize: type.size, 
                  fontWeight: type.weight,
                  lineHeight: type.lineHeight 
                }}>
                  Aa
                </div>
                <div className="typography-info">
                  <h4>{type.name}</h4>
                  <p className="typography-specs">
                    {type.size} / {type.weight} / {type.lineHeight}
                  </p>
                  <p className="typography-usage">{type.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Espaciado */}
        <section className="guide-section">
          <h2 className="section-title">📏 Espaciado</h2>
          <div className="spacing-grid">
            {spacing.map((space, index) => (
              <div key={index} className="spacing-card">
                <div className="spacing-visual">
                  <div className="spacing-bar" style={{ width: space.value }}></div>
                </div>
                <div className="spacing-info">
                  <h4>{space.name}</h4>
                  <p className="spacing-value">{space.value} ({space.pixels})</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="guide-section">
          <h2 className="section-title">🔲 Border Radius</h2>
          <div className="radius-grid">
            {borderRadius.map((radius, index) => (
              <div key={index} className="radius-card">
                <div className="radius-visual" style={{ borderRadius: radius.value }}></div>
                <div className="radius-info">
                  <h4>{radius.name}</h4>
                  <p className="radius-value">{radius.value}</p>
                  <p className="radius-usage">{radius.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sombras */}
        <section className="guide-section">
          <h2 className="section-title">💫 Sombras</h2>
          <div className="shadow-grid">
            {shadows.map((shadow, index) => (
              <div key={index} className="shadow-card">
                <div className="shadow-visual" style={{ boxShadow: shadow.value }}></div>
                <div className="shadow-info">
                  <h4>{shadow.name}</h4>
                  <p className="shadow-value">{shadow.value}</p>
                  <p className="shadow-usage">{shadow.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Animaciones */}
        <section className="guide-section">
          <h2 className="section-title">✨ Animaciones</h2>
          <div className="animation-grid">
            {animations.map((anim, index) => (
              <div key={index} className="animation-card">
                <div className={`animation-demo animation-${anim.name}`}></div>
                <div className="animation-info">
                  <h4>{anim.name}</h4>
                  <p className="animation-specs">{anim.duration} / {anim.easing}</p>
                  <p className="animation-usage">{anim.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Botones */}
        <section className="guide-section">
          <h2 className="section-title">🔘 Botones</h2>
          <div className="button-showcase">
            <div className="button-group">
              <h4>Primario</h4>
              <button className="btn-primary">Contratar ahora</button>
              <button className="btn-primary" disabled>Deshabilitado</button>
            </div>
            <div className="button-group">
              <h4>Secundario Outline</h4>
              <button className="btn-secondary-outline">Cómo Funciona</button>
              <button className="btn-secondary-outline" disabled>Deshabilitado</button>
            </div>
            <div className="button-group">
              <h4>Aplicar Animado (Calendar)</h4>
              <button className="btn-apply-animated">
                <span className="btn-text">Aplicar</span>
                <span className="btn-icon-wrapper">
                  <svg className="btn-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <p className="button-description">Hover para ver la animación de expansión del icono</p>
            </div>
          </div>
        </section>

        {/* Iconografía */}
        <section className="guide-section">
          <h2 className="section-title">🎯 Iconografía</h2>
          <div className="icon-grid">
            <div className="icon-card">
              <span className="icon-sample">✓</span>
              <p>Checkmark</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">⚠️</span>
              <p>Advertencia</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">📍</span>
              <p>Ubicación</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">🌍</span>
              <p>Global</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">📅</span>
              <p>Calendario</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">›</span>
              <p>Flecha</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">‹</span>
              <p>Flecha Izq</p>
            </div>
            <div className="icon-card">
              <span className="icon-sample">★</span>
              <p>Estrella</p>
            </div>
          </div>
        </section>

        {/* FAQ Component */}
        <section className="guide-section">
          <h2 className="section-title">Componente FAQ</h2>
          <p className="section-description">
            Componente reutilizable de preguntas frecuentes con animaciones de expansión/colapso.
          </p>
          <div className="component-demo">
            <FAQ />
          </div>
          <div className="component-usage">
            <h3>Uso</h3>
            <pre className="code-block">
{`import FAQ from './FAQ';

function MyPage() {
  return (
    <div>
      <FAQ />
    </div>
  );
}`}
            </pre>
          </div>
        </section>

        {/* HowItWorks Component */}
        <section className="guide-section">
          <h2 className="section-title">Componente How It Works</h2>
          <p className="section-description">
            Componente reutilizable que muestra los pasos del proceso en un diseño horizontal con iconos SVG, 
            línea conectora y animaciones de entrada. Ideal para explicar procesos de 3-4 pasos.
          </p>
          <div className="component-demo">
            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Demo (badges ON)</h4>
              <HowItWorks showNumbers={true} />
            </div>
            <div>
              <h4>Demo (custom destination)</h4>
              <HowItWorks destination="México" showNumbers={false} />
            </div>
          </div>
          <div className="component-usage">
            <h3>Características</h3>
            <ul className="feature-list-guide">
              <li>✓ 4 pasos con iconos SVG personalizables</li>
              <li>✓ Línea horizontal conectora entre pasos</li>
              <li>✓ Badge numérico en cada paso (opcional via <code>showNumbers</code>)</li>
              <li>✓ Animaciones de entrada con Intersection Observer</li>
              <li>✓ Efecto hover en círculos de iconos</li>
              <li>✓ Diseño responsive (horizontal en desktop, vertical en móvil)</li>
            </ul>
            <h3>Uso</h3>
            <pre className="code-block">
{`import HowItWorks from './HowItWorks';

function MyPage() {
  return (
    <div>
      <HowItWorks destination="México" showNumbers={false} />
    </div>
  );
}`}
            </pre>
            <h3>Personalización</h3>
            <p className="section-description">
              Para personalizar los pasos, edita el array <code>steps</code> en <code>HowItWorks.tsx</code>:
            </p>
            <pre className="code-block">
{`const steps = [
  {
    number: 1,
    title: 'Tu título',
    description: 'Tu descripción',
    icon: (
      <svg>...</svg>
    )
  },
  // ... más pasos
];`}
            </pre>
          </div>
        </section>
      </div>

      <div className="guide-footer">
        <p>🎨 Guía de Estilos SiempreWiFi v1.0 | Usa el navbar para navegar o presiona ESC para volver</p>
      </div>
    </div>
  );
}

export default StyleGuide;
