import React from 'react';
import IAAssistant from './components/IAAssistant';
import AnalyticsLive from './components/AnalyticsLive';

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚀 ELGANYAIA ECOSYSTEM</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Dashboard Blockchain Intelligent</p>
      </header>

      {/* Container principal */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
      }}>
        
        {/* Section Services Principaux */}
        <div style={{ 
          background: 'white', 
          padding: '25px', 
          borderRadius: '15px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px', fontSize: '1.5rem' }}>📊 Services Principaux</h2>
          
          {/* Statut Global */}
          <div style={{
            textAlign: 'center', 
            color: '#28a745', 
            fontWeight: 'bold',
            marginBottom: '20px',
            padding: '10px',
            background: '#f8fff9',
            borderRadius: '8px',
            border: '1px solid #28a745'
          }}>
            ✅ Système Stable - 3/3 Services Opérationnels
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            <ServiceCard title="🔗 API Blockchain" status="🟢 En ligne" />
            <ServiceCard title="📱 Application Elganyala" status="🟢 En ligne" />
            <ServiceCard title="🗣️ Dashboard Verbal" status="🟢 En ligne" />
          </div>
        </div>

        {/* Analytics Temps Réel */}
        <AnalyticsLive />

        {/* Assistant IA */}
        <IAAssistant />

        {/* Actions Rapides */}
        <div style={{ 
          background: 'white', 
          padding: '25px', 
          borderRadius: '15px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px', fontSize: '1.5rem' }}>⚡ Actions Rapides</h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <ActionButton text="🧪 Tester API Santé" />
            <ActionButton text="📱 Ouvrir Application" />
            <ActionButton text="🗣️ Dashboard Verbal" />
            <ActionButton text="🤖 IA Assistant" />
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ title, status }) => (
  <div style={{
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #e9ecef',
    transition: 'transform 0.2s'
  }}>
    <h3 style={{ marginBottom: '8px', color: '#495057' }}>{title}</h3>
    <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>{status}</p>
  </div>
);

const ActionButton = ({ text }) => (
  <button style={{
    padding: '12px 20px',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'transform 0.2s'
  }}
  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
  >
    {text}
  </button>
);

export default App;
