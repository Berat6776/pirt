const express = require('express');
const path = require('path');
const app = express();

// React uygulamasının build dosyalarını sunmak için
app.use(express.static(path.join(__dirname, '../client/build')));

// Tüm diğer isteklerde React uygulamanızın index.html dosyasını sunun
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});