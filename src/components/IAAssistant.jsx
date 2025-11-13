import React, { useState } from 'react';

const IAAssistant = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    try {
      // Simulation réponse IA
      setTimeout(() => {
        setResponses(prev => [...prev, 
          { type: 'user', content: message },
          { type: 'assistant', content: `J'ai analysé votre question: "${message}". Pour la blockchain ElganyaIA, je recommande de vérifier les gas fees et la sécurité du smart contract.` }
        ]);
        setMessage('');
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Erreur IA:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: 'white', 
      padding: '25px', 
      borderRadius: '15px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#333', marginBottom: '20px', fontSize: '1.5rem' }}>🧠 Assistant Blockchain IA</h3>
      
      <div style={{
        height: '200px',
        overflowY: 'auto',
        border: '1px solid #eee',
        padding: '15px',
        marginBottom: '15px',
        background: '#fafafa',
        borderRadius: '8px'
      }}>
        {responses.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center', marginTop: '80px' }}>
            Posez une question sur la blockchain ElganyaIA...
          </p>
        ) : (
          responses.map((resp, index) => (
            <div key={index} style={{
              textAlign: resp.type === 'user' ? 'right' : 'left',
              margin: '10px 0'
            }}>
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
        {loading && <div style={{ textAlign: 'center', color: '#007bff' }}>🤔 L'IA réfléchit...</div>}
      </div>
      
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ex: Comment optimiser les gas fees sur ElganyaIA ?"
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginRight: '10px',
            fontSize: '1rem'
          }}
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          style={{
            padding: '12px 24px',
            background: loading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          {loading ? '...' : 'Envoyer'}
        </button>
      </div>
    </div>
  );
};

export default IAAssistant;
