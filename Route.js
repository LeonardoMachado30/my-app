const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/", (req, res) => {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// Todas as outras solicitações GET não tratadas retornarão nosso app em React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});