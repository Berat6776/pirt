const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Kullanıcıların bağlandığı ana sayfa
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Socket.io bağlantısı için olaylar
io.on("connection", (socket) => {
    console.log("Bir kullanıcı bağlandı");

    // Kullanıcıdan gelen mesajları dinler
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);  // Mesajı tüm kullanıcılara gönder
    });

    // Kullanıcı ayrıldığında
    socket.on("disconnect", () => {
        console.log("Bir kullanıcı ayrıldı");
    });
});

// Sunucu başlatılır
server.listen(3000, () => {
    console.log("Sunucu 3000 portunda çalışıyor");
});
