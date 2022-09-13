const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/bicycle.route');

const port = 3003;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/bicycles', routes);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
