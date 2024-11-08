import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000') // Backend'ten veri alıyoruz
      .then(response => response.text())
      .then(data => setMessage(data)); // Backend'ten gelen veriyi state'e set ediyoruz
  }, []);

  return (
    <div>
      <h1>Frontend: {message}</h1>
    </div>
  );
}

export default App;
