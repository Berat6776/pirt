const express = require('express');
const app = express();

// Public dizininde bulunan dosyaları sun
app.use(express.static('public'));

// Anasayfa
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Server'ı başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
