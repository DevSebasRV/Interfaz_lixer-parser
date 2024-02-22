// src/TokenizationApp.js
import React, { useState } from 'react';
import TokenizationTable from './TokenizationTable';
import axios from 'axios';
import './TokenizationApp.css';

const TokenizationApp = () => {
  const [inputText, setInputText] = useState('');
  const [tokenizationResults, setTokenizationResults] = useState(null);

  const handleTokenizeClick = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/tokenize', { inputText });
      setTokenizationResults(response.data);
    } catch (error) {
      console.error('Error tokenizing:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <div className="input-label">
            <p>Ingrese el texto a tokenizar:</p>
        </div>

        <label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <button onClick={handleTokenizeClick}>Tokenizar</button>
      </div>
      {tokenizationResults && <TokenizationTable data={tokenizationResults} />}
    </div>
  );
};

export default TokenizationApp;
