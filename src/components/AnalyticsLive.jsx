import React, { useState, useEffect } from 'react';

const AnalyticsLive = () => {
  const [metrics, setMetrics] = useState({
    transactions: 1247,
    volume: 542.36,
    users: 3289,
    gasPrice: 42.5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        transactions: prev.transactions + Math.floor(Math.random() * 10 - 3),
        volume: Math.max(0, prev.volume + (Math.random() * 20 - 8)),
        users: prev.users + Math.floor(Math.random() * 5 - 1),
        gasPrice: Math.max(1, prev.gasPrice + (Math.random() * 5 - 2))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'white', 
      padding: '25px', 
      borderRadius: '15px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#333', marginBottom: '20px', fontSize: '1.5rem' }}>📊 Analytics Temps Réel Blockchain</h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '15px',
        marginTop: '20px'
      }}>
        <MetricCard 
          title="Transactions" 
          value={metrics.transactions.toLocaleString()} 
          color="#007bff"
          icon="🔄"
        />
        <MetricCard 
          title="Volume (ETH)" 
          value={metrics.volume.toLocaleString()} 
          color="#28a745"
          icon="💰"
        />
        <MetricCard 
          title="Utilisateurs Actifs" 
          value={metrics.users.toLocaleString()} 
          color="#ffc107"
          icon="👥"
        />
        <MetricCard 
          title="Gas Price (Gwei)" 
          value={metrics.gasPrice.toFixed(1)} 
          color="#dc3545"
          icon="⛽"
        />
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, color, icon }) => (
  <div style={{ 
    textAlign: 'center', 
    padding: '20px', 
    background: '#f8f9fa', 
    borderRadius: '10px',
    border: `2px solid ${color}20`,
    transition: 'all 0.3s ease'
  }}
  onMouseOver={(e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  }}
  onMouseOut={(e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  }}
  >
    <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
    <h4 style={{ margin: '8px 0', color: '#495057' }}>{title}</h4>
    <p style={{ 
      fontSize: '28px', 
      fontWeight: 'bold', 
      color: color,
      margin: 0
    }}>
      {value}
    </p>
  </div>
);

export default AnalyticsLive;
