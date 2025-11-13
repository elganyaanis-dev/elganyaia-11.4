import React, { useState } from 'react';

const IAAssistant = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;
    setResponses(prev => [...prev, 
      { type: 'user', content: message },
      { type: 'assistant', content: `Analyse: "${message}" - Conseil blockchain: vérifiez gas fees et sécurité.` }
    ]);
    setMessage('');
  };

  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h3>🧠 Assistant IA Blockchain</h3>
      <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', marginBottom: '10px', background: '#fafafa' }}>
        {responses.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center' }}>Posez une question blockchain...</p>
        ) : (
          responses.map((resp, index) => (
            <div key={index} style={{ textAlign: resp.type === 'user' ? 'right' : 'left', margin: '10px 0' }}>
              <span style={{
                background: resp.type === 'user' ? '#007bff' : '#e9ecef',
                color: resp.type === 'user' ? 'white' : 'black',
                padding: '8px 12px',
                borderRadius: '15px',
                display: 'inline-block',
                maxWidth: '80%'
              }}>
                {resp.content}
              </span>
            </div>
          ))
        )}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Question blockchain..."
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }}
        />
        <button onClick={handleSend} style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default IAAssistant;
