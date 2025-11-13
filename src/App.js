import React from 'react';
import IAAssistant from './components/IAAssistant';
import AnalyticsLive from './components/AnalyticsLive';

function App() {
  return (
    <div style={{ padding: '20px', background: '#f0f2f5', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>🚀 Dashboard Blockchain</h1>
        <p>Écosystème avec IA et Analytics</p>
      </header>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <AnalyticsLive />
        <IAAssistant />
      </div>
    </div>
  );
}

export default App;
